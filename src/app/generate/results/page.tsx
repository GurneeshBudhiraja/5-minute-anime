"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export default function StoryResults() {
  const router = useRouter();
  const params = useSearchParams();
  const [mounted, setMounted] = useState<boolean>(false);
  const [storyDetails, setStoryDetails] = useState({
    topic: "",
    pages: 5, // defaults to 5
    info: "",
  });
  const [applicationStatus, setApplicationStatus] = useState<ApplicationStatus>(
    {
      currentViewPage: 0,
      aiGeneratedPages: [],
    }
  );
  const [perplexityChatHistory, setPerplexityChatHistory] = useState<
    PerplexityMessage[]
  >([]);

  const fetchStoryPage = async (currentPageToLoad: number) => {
    if (currentPageToLoad > Number(params.get("pages"))) return;
    console.log(applicationStatus.aiGeneratedPages[currentPageToLoad]);
    if (applicationStatus.aiGeneratedPages[currentPageToLoad]?.loaded) return;
    const newChatHistory: PerplexityMessage[] = perplexityChatHistory;
    if (newChatHistory.length === 0) {
      newChatHistory.push({
        role: "user",
        content: `Generate a story about ${params.get(
          "topic"
        )} that needs to be finished within ${params.get("pages")} pages. ${
          params.get("info")
            ? `Additional information: ${params.get("info")}`
            : ""
        }. Generate the single scene prompt for the page number ${
          currentPageToLoad + 1
        }`,
      });
    } else {
      newChatHistory.push({
        role: "user",
        content: `Generate the single scene prompt for the page number ${
          currentPageToLoad + 1
        }`,
      });
    }
    console.log(currentPageToLoad + 1);
    console.log(newChatHistory);
    console.log("generating respone for", currentPageToLoad + 1);
    const imagePromptResponse = await fetch("/api/v1/perplexity/image-prompt", {
      body: JSON.stringify({
        messages: newChatHistory,
        generateImage: false,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const imagePromptData = (await imagePromptResponse.json()) as {
      success: boolean;
      data: {
        aiResponse: string;
        citations: Citation[];
      };
    };
    const { data: aiData, success } = imagePromptData;
    if (!success) {
      console.log("Not able to generate image");
      newChatHistory.pop();
      router.push("/generate");
      return;
    }
    const { aiResponse, citations } = aiData;
    console.log("Image prompt");
    console.log(aiResponse);
    console.log("Generating image");
    const imageGenerationResponse = await fetch(
      "/api/v1/perplexity/generate-image",
      {
        method: "POST",
        body: JSON.stringify({
          imagePrompt: aiResponse,
        }),
      }
    );
    const imageGenerationData = (await imageGenerationResponse.json()) as {
      success: boolean;
      image: string;
    };
    if (!imageGenerationData.success) {
      newChatHistory.pop();
      router.push("/generate");
      return;
    }
    const { image: base64Image } = imageGenerationData;
    newChatHistory.push({
      role: "assistant",
      content: aiResponse,
    });
    // updates the perplexity chat history
    setPerplexityChatHistory(newChatHistory);
    // updates the application status
    setApplicationStatus((prev) => ({
      ...prev,
      aiGeneratedPages: [
        ...prev.aiGeneratedPages.slice(0, currentPageToLoad),
        {
          ...prev.aiGeneratedPages[currentPageToLoad],
          prompt: `${aiResponse}`,
          image: `data:image/png;base64,${base64Image}`,
          loaded: true,
          citations,
        },
        ...prev.aiGeneratedPages.slice(currentPageToLoad + 1),
      ],
    }));
  };

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }
    const storyTopic = params.get("topic");
    const totalStoryPages = params.get("pages");
    const storyAdditionalInformation = params.get("info");
    if (
      !storyTopic ||
      Number(totalStoryPages) < 5 ||
      Number(totalStoryPages) > 7
    ) {
      router.push("/generate");
      return;
    }
    setStoryDetails({
      topic: storyTopic,
      info: storyAdditionalInformation ?? "",
      pages: Number(totalStoryPages),
    });
    setApplicationStatus((prev) => ({
      ...prev,
      // Fill the array with the empty data
      aiGeneratedPages: Array(Number(totalStoryPages)).fill({
        loaded: false,
        image: "",
        citations: [],
        prompt: "",
      }),
    }));
    fetchStoryPage(applicationStatus.currentViewPage);
  }, [mounted, params, router]);

  if (!mounted) return;
  return (
    <div className="flex gap-10">
      {applicationStatus.aiGeneratedPages[applicationStatus.currentViewPage]
        ?.loaded ? (
        <div>
          <Image
            alt={`Page ${applicationStatus.currentViewPage + 1} of ${
              storyDetails.pages
            }`}
            src={
              applicationStatus.aiGeneratedPages[
                applicationStatus.currentViewPage
              ].image
            }
            width={500}
            height={500}
          />
        </div>
      ) : (
        <>Loading...</>
      )}
      <button
        onClick={() => {
          console.log(storyDetails);
          console.log(applicationStatus);
        }}
      >
        Click
      </button>
      {/* Total pages */}
      <div>
        {applicationStatus.currentViewPage + 1}/{storyDetails.pages}
      </div>
      <button
        disabled={applicationStatus.currentViewPage === 0}
        className="disabled:cursor-not-allowed"
        onClick={() => {
          setApplicationStatus((prev) => ({
            ...prev,
            currentViewPage: prev.currentViewPage - 1,
          }));
        }}
      >
        Prev
      </button>
      <button
        disabled={
          applicationStatus.currentViewPage === storyDetails.pages - 1 ||
          !applicationStatus.aiGeneratedPages[applicationStatus.currentViewPage]
            ?.loaded
        }
        className="disabled:cursor-not-allowed"
        onClick={() => {
          setApplicationStatus((prev) => ({
            ...prev,
            currentViewPage: prev.currentViewPage + 1,
          }));
          fetchStoryPage(applicationStatus.currentViewPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
