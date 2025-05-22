"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function HomePageHeading() {
  const numberRef = useRef<HTMLSpanElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleText = "MINUTE ANIME";

  useEffect(() => {
    if (numberRef.current) {
      gsap.to(numberRef.current, {
        y: -20,
        rotation: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 3,
      });
    }

    if (subtitleRef.current) {
      const letters = Array.from(
        subtitleRef.current.querySelectorAll<HTMLElement>(".letter")
      );
      letters.forEach((letter, i) => {
        const effectType = i % 3;
        const tl = gsap.timeline({
          repeat: -1,
          yoyo: true,
          delay: i * 0.12 + Math.random() * 0.05,
          repeatDelay: 0.5 + Math.random() * 0.3,
        });

        if (effectType === 0) {
          // floating effect
          tl.to(letter, {
            y: -5,
            duration: 1.6 + Math.random() * 0.4,
            ease: "sine.inOut",
          });
        } else if (effectType === 1) {
          // tilting effect
          tl.to(letter, {
            rotation: (Math.random() > 0.5 ? 1 : -1) * (3 + Math.random() * 2),
            transformOrigin: "50% 50%",
            duration: 1.9 + Math.random() * 0.4,
            ease: "sine.inOut",
          });
        } else {
          // scaling effect
          tl.to(letter, {
            scale: 1.04,
            transformOrigin: "center center",
            duration: 1.8 + Math.random() * 0.4,
            ease: "sine.inOut",
          });
        }
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <span
        ref={numberRef}
        className="text-[10rem] sm:text-[9rem] md:text-[11rem] lg:text-[13rem] leading-none text-brown-primary select-none -mb-4
        "
      >
        5
      </span>

      {/* Animated subtitle */}
      <h2
        ref={subtitleRef}
        className="flex select-none text-[4rem] md:text-[5rem] text-brown-primary"
      >
        {subtitleText.split("").map((char, idx) => (
          <span key={idx} className="letter inline-block whitespace-pre">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
    </div>
  );
}
