import React from "react";
import { motion } from "motion/react";

interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LoadingAnimation = ({
  size = "md",
  className = "",
}: LoadingAnimationProps) => {
  const heightMap = {
    sm: "h-4",
    md: "h-7",
    lg: "h-3",
  };
  const widthMap = {
    sm: "w-64 sm:w-80",
    md: "w-64 sm:w-80",
    lg: "w-64 sm:w-80",
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-lg bg-light-secondary max-w-full border border-dark/30
        ${heightMap[size]} ${widthMap[size]} ${className}
      `}
    >
      {/* loading effect */}
      <motion.div
        className={`
          absolute h-full w-2/5 
          bg-gradient-to-r from-transparent via-brown-primary/20 to-transparent
          rounded-full
        `}
        animate={{
          x: ["-100%", "200%"],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default LoadingAnimation;
