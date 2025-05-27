"use client";

import BottomNav from "@/app/components/BottomNav";
import LoadingStoryPageAnimation from "@/app/components/LoadingStoryPageAnimation";
import LoadingTextAnimation from "@/app/components/LoadingTextAnimation";
import { FilmIcon, HomeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ViewStory from "@/app/components/ViewStory";

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

  const [viewStory, setViewStory] = useState<{
    title: string;
    data: ExploreStoriesData[];
  }>({
    title: "",
    data: [],
  });

  const anyLoaded = applicationStatus.aiGeneratedPages.some(
    (page) => page.loaded
  );

  useEffect(() => {
    if (viewStory.data.length > 0 && viewStory.title) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [viewStory]);

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
    // return;
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
    // if (currentPageToLoad > 1) {
    //   console.log("Not processing page", currentPageToLoad);
    //   return;
    // }

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

    // generate the prompt and the image

    const imagePromptResponse = await fetch("/api/v1/perplexity/image-prompt", {
      body: JSON.stringify({
        messages: newChatHistory,
        generateImage: true,
        model: newChatHistory.length === 1 ? "imagen" : "gpt-1",
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
    <div
      className={`min-h-screen  bg-gradient-to-b from-light-primary to-light-secondary`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* header - includes title */}
        <main className="flex-1 py-8 flex flex-col">
          <header className="relative flex items-center justify-center mb-8 sm:mb-12 overflow-visible">
            <button
              onClick={() => router.push("/")}
              aria-label="Back to home"
              className="hidden absolute sm:block  sm:left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 backdrop-blur rounded-full shadow-lg border-2 border-transparent hover:border-brown-primary hover:scale-105 transition-all duration-200 ease-out z-10 cursor-pointer"
            >
              <HomeIcon className="h-4 w-4 sm:h-6 md:w-6 text-brown-primary" />
            </button>
            <motion.h1
              className="text-lg sm:text-4xl font-semibold tracking-wider md:tracking-wide text-brown-primary text-center mb-0 font-fredoka max-w-lg lg:max-w-5xl "
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              {applicationStatus.aiGeneratedTitle ? (
                applicationStatus.aiGeneratedTitle
              ) : (
                <LoadingTextAnimation size="md" />
              )}
            </motion.h1>
          </header>
        </main>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-36">
            {viewStory.data.length > 0 && (
              <ViewStory
                key={viewStory.data.length}
                setViewStory={setViewStory}
                viewStory={viewStory}
              />
            )}
            {/* ai generated story pages */}
            {applicationStatus.aiGeneratedPages.map((page, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-md duration-100 ease-out max-w-lg mx-auto w-full h-[280px] md:h-[350px] border-4 border-brown-primary md:border-2 md:border-brown-primary/50 flex items-center justify-center"
              >
                {page.loaded && (
                  <div
                    className={`absolute top-3 right-3 w-fit h-fit flex items-center justify-center rounded-full shadow-lg text-sm font-bold py-1 px-3 text-light bg-dark border-2 border-light pointer-events-none`}
                  >
                    <>Page {index + 1}</>
                  </div>
                )}
                {!page.isLoading ? (
                  <Image
                    src={page.image}
                    alt={page.prompt.slice(0, 20)}
                    width={200}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <LoadingStoryPageAnimation size="lg" />
                )}
              </div>
            ))}
          </div>
          {anyLoaded && (
            <div className="fixed bottom-10 sm:bottom-0 left-1/2 transform -translate-x-1/2 mb-8 flex gap-1.5 sm:gap-4 z-10 w-full justify-center flex-wrap">
              {/* enter story mode */}
              <button
                className="bg-brown-primary/90 text-light px-4 py-2 rounded-full cursor-pointer transition-transform hover:scale-105 text-center font-semibold shadow-lg border border-dark text-sm"
                onClick={() => {
                  setViewStory({
                    title: applicationStatus.aiGeneratedTitle,
                    data: applicationStatus.aiGeneratedPages.map((page) =>
                      page.loaded
                        ? {
                            image: page.image,
                            prompt: page.prompt,
                            citations: page.citations,
                            isLoaded: true,
                          }
                        : {
                            image: "",
                            prompt: "",
                            citations: [],
                            isLoaded: false,
                          }
                    ),
                  });
                }}
              >
                <FilmIcon className="inline-block w-5 h-5 mr-2" />
                Enter Presentation Mode
              </button>
            </div>
          )}
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 w-full shadow-lg h-16">
        <BottomNav />
      </footer>
    </div>
  );
}
