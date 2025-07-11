import { HomeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React from "react";

function Header({ storyTopic }: { storyTopic: string }) {
  const router = useRouter();
  return (
    <header className="p-4 shadow-lg flex items-center gap-4">
      <div
        className="transition-all duration-200 hover:-rotate-12"
        onClick={() => router.push("/")}
      >
        <HomeIcon className="text-dark border-2 border-brown-primary rounded-lg p-3 w-12 h-12 hover:scale-110 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl active:scale-95" color="#704b4a"/>
      </div>
      <h1 className="text-2xl md:text-4xl font-extrabold text-brown-primary tracking-wider md:tracking-wide hover:tracking-wider transition-all duration-300 select-none">
        {storyTopic}
      </h1>
    </header>
  );
}

export default Header;
