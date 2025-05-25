"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import BottomNav from "../components/BottomNav";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const PREMADE_STORIES = [
  { id: 1, title: "Space Samurai Saga", cover: "/samples/space-samurai.png" },
  {
    id: 2,
    title: "Mystic Forest Friends",
    cover: "/samples/forest-friends.png",
  },
  { id: 3, title: "Cyberpunk City Chase", cover: "/samples/cyber-chase.png" },
];

export default function ExplorePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 bg-light-primary font-fun p-4 sm:p-6 flex flex-col">
        <header className="relative flex items-center justify-center mb-8 px-2 sm:px-0">
          <button
            onClick={() => router.push("/")}
            aria-label="Back to home"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-light-secondary rounded-full shadow-md border-2 border-transparent hover:border-brown-primary transition-colors duration-100 ease-linear"
          >
            <HomeIcon className="h-6 w-6 text-brown-primary" />
          </button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brown-primary text-center tracking-wide">
            Storybook Gallery
          </h1>
        </header>

        {/* Story cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 overflow-auto pb-24 px-2 sm:px-6">
          {PREMADE_STORIES.map((story) => (
            <Link
              key={story.id}
              href={`/generate?topic=${encodeURIComponent(story.title)}`}
              className="block bg-light-secondary rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
            >
              <div className="relative w-full h-40 sm:h-56 lg:h-64">
                <Image
                  src={story.cover}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl md:text-2xl text-brown-primary font-semibold text-center">
                  {story.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 w-full bg-light-secondary border-t border-brown-light shadow-inner">
        <BottomNav />
      </footer>
    </div>
  );
}
