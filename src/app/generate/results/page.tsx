"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/app/components/results/Header";

// Results page: shows a generated “story” as a sequence of images
export default function Results() {
  const router = useRouter();
  // Retrieves URL query parameters for topic, pages, and info
  const searchParams = useSearchParams();

  // Stores the main topic/subject of the story
  const [storyTopic, setStoryTopic] = useState<string>("");
  // Stores how many pages the user requested
  const [storyPagesCount, setStoryPagesCount] = useState<number>(0);
  // Stores optional additional story details/context
  const [storyAdditionalInfo, setStoryAdditionalInfo] = useState<string>("");
  // Tracks initial param-parsing/loading state
  const [loading, setLoading] = useState<boolean>(true);
  // Tracks which page index is currently being viewed (0-based)
  const [currentPage, setCurrentPage] = useState<number>(0);
  // Holds our “fetched” pages (null until loaded)
  const [storyPages, setStoryPages] = useState<(StoryPage | null)[]>([]);
  // Which page index is in the 2s loading delay right now, or -1 if none
  const [loadingPageIndex, setLoadingPageIndex] = useState<number>(-1);

  // parse & validate URL params on mount
  useEffect(() => {
    const topic = searchParams.get("topic")?.trim();
    const pagesParam = searchParams.get("pages");
    const pages = pagesParam ? Number(pagesParam) : 0;
    const info = searchParams.get("info")?.trim();

    // redirect home if missing/invalid
    if (!topic || !pagesParam || pages < 1 || pages > 7) {
      router.push("/");
      return;
    }

    setStoryTopic(topic);
    setStoryPagesCount(pages);
    if (info) setStoryAdditionalInfo(info);
    setLoading(false);
  }, [router, searchParams]);

  // initialize the array of pages to [null, null, ...] once we know count
  useEffect(() => {
    setStoryPages(Array(storyPagesCount).fill(null));
  }, [storyPagesCount]);

  // load the **currently visible** page if not yet fetched
  useEffect(() => {
    if (storyPages.length !== storyPagesCount) return;
    if (storyPages[currentPage] !== null) return;
    fetchPage(currentPage);
  }, [currentPage, storyPagesCount, storyPages]);

  /**
   * background-prefetch - the next unfetched page once current is loaded
   */
  useEffect(() => {
    // wait until initial page is done
    if (loadingPageIndex !== -1) return;
    if (storyPages.length !== storyPagesCount) return;
    if (storyPages[currentPage] === null) return;

    const nextIndex = storyPages.findIndex((p) => p === null);
    if (nextIndex !== currentPage + 1) return;
    if (nextIndex !== -1) {
      console.log("Fetching the page no", nextIndex + 1);
      fetchPage(nextIndex);
    }
  }, [storyPages, loadingPageIndex, storyPagesCount, currentPage]);

  // simulate prompt -> image generation with a 2s delay
  async function fetchPage(index: number) {
    setLoadingPageIndex(index);
    // delay to mimic API call
    await new Promise((res) => setTimeout(res, 2000));

    setStoryPages((prev) => {
      const copy = [...prev];
      copy[index] = {
        citations: [],
        image: `/testing-anime-pics/${index + 1}image.png`,
        prompt: `${index} image prompt`,
      };
      return copy;
    });

    setLoadingPageIndex(-1);
  }

  // show full-screen loading on initial param parse
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-light-primary">
        Loading…
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-light-primary font-fun">
      {/* header */}
      <Header storyTopic={storyTopic} />

      {/* image viewer */}
      <div className="relative flex-grow w-full max-w-md mx-auto px-4 py-2">
        {loadingPageIndex === currentPage ? (
          // 2s loading placeholder for the visible page
          <div className="flex items-center justify-center h-64 text-brown-secondary">
            Generating image…
          </div>
        ) : storyPages[currentPage]?.image ? (
          <Image
            src={storyPages[currentPage].image!}
            alt={`Story page ${currentPage + 1}`}
            width={600}
            height={600}
            className="object-contain border-4 border-brown-primary rounded-2xl shadow-story-page-card mx-auto"
          />
        ) : null}
      </div>

      {/* footer with prev/next */}
      <nav className="flex items-center justify-between p-4 bg-light-secondary">
        <button
          onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
          disabled={currentPage === 0}
          className="px-6 py-2 bg-brown-primary text-light rounded-full shadow-lg hover:scale-105 disabled:opacity-50 transition"
        >
          Previous
        </button>

        <span className="text-brown-primary">
          {currentPage + 1} / {storyPagesCount}
        </span>

        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(storyPagesCount - 1, p + 1))
          }
          disabled={
            currentPage === storyPagesCount - 1 ||
            loadingPageIndex === currentPage
          }
          className="px-6 py-2 bg-brown-primary text-light rounded-full shadow-lg hover:scale-105 disabled:opacity-50 transition"
        >
          Next
        </button>
      </nav>
    </div>
  );
}
