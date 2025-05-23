"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
    <main className="min-h-screen flex items-center justify-center bg-light-primary font-fun p-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-light-secondary p-8 rounded-2xl shadow-lg flex flex-col gap-6"
      >
        {/* Page heading */}
        <h1 className="text-3xl md:text-4xl text-brown-primary font-extrabold text-center">
          Your Anime Preferences
        </h1>

        {/* Topic input */}
        <div className="flex flex-col">
          <label htmlFor="topic" className="mb-2 text-brown-primary">
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
              focus:outline-none focus:ring-2 focus:ring-brown-secondary
            "
            required
          />
        </div>

        {/* Number of pages */}
        <div className="flex flex-col">
          <label htmlFor="pages" className="mb-2 text-brown-primary">
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
            className="
              w-32 p-3 rounded-lg
              border border-brown-primary
              bg-light-primary text-brown-primary
              focus:outline-none focus:ring-2 focus:ring-brown-secondary
            "
            required
          />
        </div>

        {/* Additional info */}
        <div className="flex flex-col">
          <label htmlFor="info" className="mb-2 text-brown-primary">
            Additional Info
          </label>
          <textarea
            id="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            placeholder="Any extra details or instructions..."
            rows={4}
            className="
              w-full p-3 rounded-lg
              border border-brown-primary
              bg-light-primary text-brown-primary
              focus:outline-none focus:ring-2 focus:ring-brown-secondary
            "
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="
            mt-4
            w-full py-3
            bg-brown-primary text-light
            rounded-full
            shadow-lg active:shadow-none active:translate-y-1
            hover:scale-105 transition
            focus:outline-none focus:ring-2 focus:ring-brown-secondary focus:ring-opacity-50
          "
        >
          Generate Anime
        </button>
      </form>
    </main>
  );
}
