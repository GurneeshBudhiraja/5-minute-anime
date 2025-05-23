import { useRouter } from "next/navigation";
import React from "react";

function HomepageButton() {
  const router = useRouter();

  return (
    <button
      className="bg-brown-primary w-2/3 md:w-1/4 h-14 rounded-full text-light-primary shadow-[5px_5px_0px] shadow-black text-3xl md:text-4xl tracking-widest hover:opacity-95 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-100 ease-in-out cursor-pointer select-none "
      aria-label="Start 5 Page Anime"
      onClick={() => {
        router.push("/generate");
      }}
    >
      Lets Go!
    </button>
  );
}

export default HomepageButton;
