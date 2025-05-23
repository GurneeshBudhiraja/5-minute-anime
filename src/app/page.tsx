"use client";
//
import React from "react";
import HomepageButton from "./components/homepage-button";
import HomePageHeading from "./components/homepage-heading";


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-light-primary h-full font-fun p-4 sm:p-6 ">
      <HomePageHeading />
      {/* Button */}
      <HomepageButton />
    </main>
  );
}
