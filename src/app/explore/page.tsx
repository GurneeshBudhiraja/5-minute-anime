"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BottomNav from "../components/BottomNav";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import PRE_MADE_STORIES from "@/app/preMadeStories";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import ViewStory from "../components/ViewStory";

export default function ExplorePage() {
  const router = useRouter();
  const [viewStory, setViewStory] = useState<{
    title: string;
    data: ExploreStoriesData[];
  }>({
    title: "",
    data: [],
  });

  useEffect(() => {
    if (viewStory.data.length > 0 && viewStory.title) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [viewStory]);

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-light-primary to-light-secondary`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        <main className="flex-1 py-8 flex flex-col">
          <header className="relative flex items-center justify-center mb-8 sm:mb-12 overflow-visible">
            <button
              onClick={() => router.push("/")}
              aria-label="Back to home"
              className="hidden absolute sm:block  sm:left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 backdrop-blur rounded-full shadow-lg border-2 border-transparent hover:border-brown-primary hover:scale-105 transition-all duration-200 ease-out z-10 cursor-pointer"
            >
              <HomeIcon className="h-4 w-4 sm:h-6 md:w-6 text-brown-primary" />
            </button>
            <h1 className="text-2xl sm:text-4xl font-semibold tracking-wider md:tracking-wide text-brown-primary text-center mb-0 font-fredoka">
              Storybook Gallery
            </h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
            {viewStory.data.length > 0 && (
              <ViewStory
                key={viewStory.data.length}
                setViewStory={setViewStory}
                viewStory={viewStory}
              />
            )}
            {PRE_MADE_STORIES.map((story, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-out"
                onClick={() => {
                  // open full set of pages without mutating original
                  const pages = PRE_MADE_STORIES[index].data.slice();
                  setViewStory({
                    title: PRE_MADE_STORIES[index].title,
                    data: pages,
                  });
                }}
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src={story.data[0].image.replace(/^\.\.\//, "/")}
                    alt={story.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <h2 className="text-2xl font-medium text-brown-primary font-fredoka group-hover:text-brown-dark transition-colors duration-200">
                    {story.title.replace(/<\/?title>/g, "")}
                  </h2>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center gap-2 bg-brown-primary/10 text-brown-primary px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                      <DocumentTextIcon className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                      {story.data.length} Pages
                    </span>
                    <button className="text-brown-primary hover:text-brown-dark transition-colors duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <footer className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-lg ">
          <BottomNav />
        </footer>
      </div>
    </div>
  );
}
