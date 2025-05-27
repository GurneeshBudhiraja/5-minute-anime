"use client";
import React from "react";
import { useRouter } from "next/navigation";
import HomePageHeading from "./components/homepage-heading";
import BottomNav from "./components/BottomNav";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col md:min-h-screen min-h-svh">
      <main className="flex flex-col justify-center items-center flex-1 py-12 bg-light-primary font-fun">
        <HomePageHeading />

        <div className="md:flex justify-center items-center w-full space-x-8 mb-12 gap-8">
          {/* homepage action */}
          <button
            onClick={() => router.push("/generate")}
            className="bg-brown-primary px-8 py-3 rounded-full text-light shadow-[5px_5px_0px] shadow-dark text-2xl tracking-widest hover:opacity-95 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-100 ease-in-out select-none justify-center items-center flex mx-auto md:flex-none md:mx-0"
          >
            Let&apos;s Go!
          </button>

          {/* explore action */}
          <button
            onClick={() => router.push("/explore")}
            className="hidden md:block bg-brown-light px-8 py-3 rounded-full border-2 border-brown-primary text-brown-primary shadow-[5px_5px_0px] shadow-dark text-2xl tracking-widest hover:opacity-95 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-100 ease-in-out select-none "
          >
            Explore
          </button>
        </div>
      </main>

      {/* mobile like nav */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
