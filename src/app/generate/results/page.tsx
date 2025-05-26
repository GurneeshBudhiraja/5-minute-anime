"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function StoryResults() {
  const router = useRouter();
  const params = useSearchParams();

  // gets URL params
  const totalPages = Number(params.get("pages"));
  const topicParam = params.get("topic") ?? "";
  const infoParam = params.get("info") ?? "";

  const [mounted, setMounted] = useState<boolean>(false);
  const [applicationStatus, setApplicationStatus] = useState<ApplicationStatus>(
    {
      currentViewPage: 0,
      aiGeneratedTitle: "",
      aiGeneratedPages: [],
    }
  );

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }
    // validate params/inputs
    if (!topicParam || totalPages < 5 || totalPages > 10) {
      router.push("/generate");
      return;
    }
    // initialize the application status with empty pages
    setApplicationStatus((prev) => ({
      ...prev,
      aiGeneratedPages: Array(totalPages + 1).fill({
        loaded: false,
        image: "",
        citations: [],
        prompt: "",
        isLoading: true,
      } as StoryPage),
    }));
    // start fetching the story pages
    fetchStoryPage(0, []);
    // eslint-disable-next-line
  }, [mounted]);

  /**
   * Generates the story page by fetching the AI generated prompt from Sonar (Perplexity AI) and image generation model.
   * @param currentPageToLoad the page number to load
   * @param chatHistory the Perplexity chat history
   */
  const fetchStoryPage = async (
    currentPageToLoad = 0,
    chatHistory: PerplexityMessage[]
  ) => {
    if (applicationStatus.aiGeneratedPages[currentPageToLoad]?.loaded) {
      return;
    }

    if (applicationStatus.aiGeneratedPages[currentPageToLoad]?.isLoading) {
      return;
    }
    if (currentPageToLoad > 1) {
      console.log("Not processing page", currentPageToLoad);
      return;
    }

    const newChatHistory = [...chatHistory];
    if (newChatHistory.length === 0) {
      newChatHistory.push({
        role: "user",
        content: `Generate a story about ${topicParam} that needs to be finished within ${totalPages} pages. ${
          infoParam ? `Additional information: ${infoParam}` : ""
        }. Generate the prompt for the cover page only including the title`,
      });
    } else {
      newChatHistory.push({
        role: "user",
        content: `Generate the single scene prompt for the page number ${currentPageToLoad} excluding the title`,
      });
    }

    // TODO: remove in prod
    console.log("New chat history:");
    console.log(newChatHistory);

    // generate the prompt and the image

    const imagePromptResponse = await fetch("/api/v1/perplexity/image-prompt", {
      body: JSON.stringify({
        messages: newChatHistory,
        generateImage: true,
        // model: newChatHistory.length === 1 ? "imagen" : "gpt-1",
        model: "imagen",
      }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const { success, data: aiData } = (await imagePromptResponse.json()) as {
      success: boolean;
      data: GeneratePromptAndImageReturnType;
    };

    if (!success) {
      router.push("/generate");
      return;
    }

    const { aiResponse, citations } = aiData;
    const { image: aiImage, prompt: imagePrompt } = aiResponse;

    // only gets and updates the title when the first message sent to the backend
    if (chatHistory.length === 0) {
      const re = /<title>([\s\S]*?)<\/title>/i;
      const match = imagePrompt.match(re);
      const aiGeneratedTitle = match ? match[1] : null;

      // updates the application status with the AI generated title
      setApplicationStatus((prev) => ({
        ...prev,
        aiGeneratedTitle: aiGeneratedTitle ?? "",
      }));
    }

    newChatHistory.push({ role: "assistant", content: imagePrompt });

    // TODO: remove in prod
    console.log("newChatHistory");
    console.log(newChatHistory);
    console.log("aiGeneratedTitle");

    // updates the application status with the AI generated image and prompt
    setApplicationStatus((prev) => {
      const pages = [...prev.aiGeneratedPages];
      pages[currentPageToLoad] = {
        ...pages[currentPageToLoad],
        prompt: imagePrompt,
        image: `data:image/png;base64,${aiImage}`,
        loaded: true,
        isLoading: false,
        citations,
      };
      return { ...prev, aiGeneratedPages: pages };
    });

    const nextPage = currentPageToLoad + 1;
    console.log("nextPage");
    console.log(nextPage);
    // if we still have pages to generate, recurse
    if (nextPage <= totalPages) {
      fetchStoryPage(nextPage, newChatHistory);
    }
  };

  if (!mounted) return null;

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <button
        onClick={() => {
          console.log(applicationStatus);
        }}
      >
        click{" "}
      </button>
      {applicationStatus.aiGeneratedTitle && (
        <>{applicationStatus.aiGeneratedTitle}</>
      )}
      {applicationStatus.aiGeneratedPages.length > 0 &&
        applicationStatus.aiGeneratedPages.map(
          (page: StoryPage, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md"
              >
                {page.isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <Image
                    src={page.image}
                    alt={page.prompt}
                    width={500}
                    height={500}
                    className="rounded-lg"
                  />
                )}
              </div>
            );
          }
        )}
    </main>
  );
}
