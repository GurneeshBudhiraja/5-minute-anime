"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function StoryResults() {
  const router = useRouter();
  const params = useSearchParams();
  const [mounted, setMounted] = useState<boolean>(false);
  const [storyDetails, setStoryDetails] = useState({
    topic: "",
    pages: 5,
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
    console.log("currentPageToLoad");
    console.log(currentPageToLoad);
    return;
  };

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }
    const topic = params.get("topic");
    const pages = Number(params.get("pages"));
    const info = params.get("info") ?? "";
    if (!topic || pages < 5 || pages > 10) {
      router.push("/generate");
      return;
    }
    setStoryDetails({ topic, pages, info });
    setApplicationStatus((prev) => ({
      ...prev,
      // one extra for the story cover page
      aiGeneratedPages: Array(pages + 1).fill({
        loaded: false,
        image: "",
        citations: [],
        prompt: "",
        isLoading: false,
      } as StoryPage),
    }));
    fetchStoryPage(0);
    // eslint-disable-next-line
  }, [mounted, params, router]);

  if (!mounted) return null;

  const { currentViewPage, aiGeneratedPages } = applicationStatus;
  const pageData = aiGeneratedPages[currentViewPage];

  return (
    <main className="min-h-screen bg-light-primary font-fun p-6 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl text-brown-primary font-extrabold mb-4 text-center">
        {storyDetails.topic} — Page {currentViewPage + 1} of{" "}
        {storyDetails.pages}
      </h2>

      <section className="relative w-full max-w-lg flex-1 flex items-center justify-center bg-light-secondary rounded-2xl shadow-story-page-card overflow-hidden p-4">
        {pageData?.loaded ? (
          <Image
            src={pageData.image}
            alt={`Page ${currentViewPage + 1}`}
            width={400}
            height={500}
            className="object-contain"
          />
        ) : (
          <div className="text-brown-secondary animate-pulse">
            Loading image…
          </div>
        )}
      </section>

      <nav className="mt-6 flex items-center space-x-4">
        <button
          onClick={() =>
            setApplicationStatus((p) => ({
              ...p,
              currentViewPage: p.currentViewPage - 1,
            }))
          }
          disabled={currentViewPage === 0}
          className="px-4 py-2 bg-brown-primary text-light rounded-full shadow hover:bg-brown-light disabled:opacity-50 transition"
        >
          Prev
        </button>

        <button
          onClick={() => {
            setApplicationStatus((p) => ({
              ...p,
              currentViewPage: p.currentViewPage + 1,
            }));
            fetchStoryPage(currentViewPage + 1);
          }}
          // disabled={currentViewPage === storyDetails.pages || !pageData?.loaded}
          disabled={!pageData?.loaded}
          className="px-4 py-2 bg-brown-primary text-light rounded-full shadow hover:bg-brown-light disabled:opacity-50 transition"
        >
          Next
        </button>
      </nav>
    </main>
  );
}
