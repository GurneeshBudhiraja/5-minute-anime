"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function GeneratePage() {
  const router = useRouter();
  const [topic, setTopic] = useState("");
  const [pages, setPages] = useState(5);
  const [info, setInfo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // navigate to results with query params
    router.push(
      `/generate/results?topic=${encodeURIComponent(
        topic
      )}&pages=${pages}&info=${encodeURIComponent(info)}`
    );
  };

  return (
    <main className="min-h-screen flex md:items-center justify-center bg-light-primary font-fredoka p-6 select-none">
      <form
        onSubmit={handleSubmit}
        className="relative max-w-xl w-full bg-white p-10 rounded-3xl shadow-2xl flex flex-col gap-5  md:gap-8 overflow-hidden border border-brown-primary/85 h-fit"
      >
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-pink-300 rounded-full opacity-20"></div>
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-brown-secondary rounded-full opacity-10"></div>

        {/* Home button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-2 left-2 md:top-3 md:left-3 p-2 bg-light rounded-full shadow-md hover:opacity-80 cursor-pointer transition border border-brown-primary"
          aria-label="Home"
        >
          <HomeIcon className="w-6 h-6" color="#704b4a" />
        </button>

        {/* Page heading */}
        <h1 className="text-2xl md:text-4xl text-brown-primary font-extrabold text-center uppercase tracking-wider md:whitespace-nowrap mt-2">
          Your Anime Preferences
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Topic input */}
          <div className="flex flex-col">
            <label
              htmlFor="topic"
              className="mb-1 text-brown-primary font-semibold font-fredoka text-xl tracking-wide"
            >
              Topic
            </label>
            <input
              id="topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. The moon landing"
              className="
                w-full p-3 rounded-lg
                border border-brown-primary
                bg-light-primary text-brown-primary
                placeholder:text-brown-secondary
                text-lg tracking-wide
                focus:outline-none focus:ring-2 focus:ring-brown-secondary
              "
              required
            />
          </div>

          {/* Number of pages */}
          <div className="flex flex-col">
            <label
              htmlFor="pages"
              className="mb-1 text-brown-primary font-semibold font-fredoka text-lg tracking-wide"
            >
              Number of Pages (max 10)
            </label>
            <input
              id="pages"
              type="number"
              value={pages}
              onChange={(e) =>
                setPages(Math.min(10, Math.max(1, +e.target.value)))
              }
              min={5}
              max={10}
              className="w-full p-3 rounded-lg
                border border-brown-primary
                bg-light-primary text-brown-primary
                placeholder:text-brown-secondary
                text-lg tracking-wide
                focus:outline-none focus:ring-2 focus:ring-brown-secondary"
              required
            />
          </div>
        </div>

        {/* Additional info */}
        <div className="flex flex-col">
          <label
            htmlFor="info"
            className="mb-1 text-brown-primary font-semibold font-fredoka text-xl tracking-wide"
          >
            Additional Info
          </label>
          <textarea
            id="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            placeholder="Any extra details or instructions..."
            rows={4}
            className="w-full p-3 rounded-lg
                border border-brown-primary
                bg-light-primary text-brown-primary
                placeholder:text-brown-secondary
                text-lg tracking-wide
                focus:outline-none focus:ring-2 focus:ring-brown-secondary resize-none"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="mt-4 md:mt-6 w-full py-4 bg-brown-primary text-white font-medium  rounded-full hover:scale-105 transform transition duration-300 focus:outline-none focus:ring-4 focus:ring-brown-secondary focus:ring-opacity-50 tracking-widest font-fredoka "
        >
          Generate
        </button>
      </form>
    </main>
  );
}
