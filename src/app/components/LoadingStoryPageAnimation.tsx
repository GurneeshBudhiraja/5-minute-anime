import React from "react";
import { motion } from "motion/react";

interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LoadingStoryPageAnimation = ({
  size = "md",
  className = "",
}: LoadingAnimationProps) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-48 h-48",
    lg: "w-64 h-64",
  };

  // staggering animation
  const pixels = Array.from({ length: 64 }, (_, i) => i);

  return (
    <div
      className={`relative ${sizeClasses[size]} ${className} rounded-lg overflow-hidden bg-gradient-to-br from-light-primary via-light-secondary to-light-secondary border-2 border-brown-primary/20`}
    >
      {/* grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {pixels.map((pixel) => (
            <motion.div
              key={pixel}
              className="border border-brown-primary/20"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                backgroundColor: [
                  "transparent",
                  "rgba(116, 75, 74, 0.1)",
                  "transparent",
                ],
              }}
              transition={{
                duration: 2,
                delay: pixel * 0.02,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          ))}
        </div>
      </div>

      {/* central loading icon with morphing shapes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-16 h-16">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* morphing shape */}
            <motion.path
              d="M50,25 L75,50 L50,75 L25,50 Z"
              fill="#704b4ac2"
              animate={{
                d: [
                  "M50,25 L75,50 L50,75 L25,50 Z", // diamond
                  "M25,25 L75,25 L75,75 L25,75 Z", // square
                  "M50,20 L70,35 L70,65 L50,80 L30,65 L30,35 Z", // hexagon
                  "M50,25 A25,25 0 1,0 50,75 A25,25 0 1,0 50,25 Z", // circle
                  "M50,25 L75,50 L50,75 L25,50 Z", // diamond
                ],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              style={{ transformOrigin: "50px 50px" }}
            />

            {/* central pulsing dot */}
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              fill="var(--primary-brown-secondary)"
              animate={{
                r: [6, 12, 6],
                opacity: [0.8, 0.3, 0.8],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </svg>
        </div>
      </div>

      {/* floating particles around the edges */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brown-primary/60 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${15 + (i % 2) * 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* scanning line effect - from top to bottom */}
      <motion.div
        className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brown-primary to-transparent opacity-60"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />

      {/* corner progress indicators */}
      {[0, 1, 2, 3].map((corner) => (
        <motion.div
          key={corner}
          className={`absolute w-3 h-3 border-2 border-brown-secondary rounded-full ${
            corner === 0
              ? "top-2 left-2"
              : corner === 1
              ? "top-2 right-2"
              : corner === 2
              ? "bottom-2 right-2"
              : "bottom-2 left-2"
          }`}
          animate={{
            scale: [0.8, 1.2, 0.8],
            borderColor: [
              "var(--fun-brown-primary)/30",
              "var(--fun-brown-primary)",
              "var(--fun-brown-primary)/30",
            ],
          }}
          transition={{
            duration: 1.5,
            delay: corner * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* shimmer effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-brown-secondary/30 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--fun-brown-primary)/20, transparent)",
        }}
      />
    </div>
  );
};

export default LoadingStoryPageAnimation;
