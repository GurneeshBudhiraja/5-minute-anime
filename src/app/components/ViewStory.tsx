import React, {
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  useEffect,
} from "react";
import {
  XCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

interface ViewStoryProps {
  viewStory: { prompt: string; image: string }[];
  setViewStory: Dispatch<SetStateAction<{ prompt: string; image: string }[]>>;
}

function ViewStory({ viewStory, setViewStory }: ViewStoryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const size = container.clientWidth;
    const scrollPos = container.scrollLeft;
    const idx = Math.round(scrollPos / size);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrev = () => {
    const container = containerRef.current;
    if (!container) return;
    const prevIndex = Math.max(currentIndex - 1, 0);
    container.scrollTo({
      left: prevIndex * container.clientWidth,
      behavior: "smooth",
    });
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    const container = containerRef.current;
    if (!container) return;

    const nextIndex = Math.min(currentIndex + 1, viewStory.length - 1);
    container.scrollTo({
      left: nextIndex * container.clientWidth,
      behavior: "smooth",
    });
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="fixed inset-0 bg-dark/90 z-50 flex flex-col items-center justify-center p-2">
      <div className="relative max-w-xl w-full mx-auto">
        {/* Close Button */}
        <button
          onClick={() => setViewStory([])}
          className="absolute -top-2 -right-2 p-1 sm:p-2 bg-light-secondary rounded-full shadow-lg hover:bg-light-primary transition z-30"
        >
          <XCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-brown-primary" />
        </button>
        <div
          ref={containerRef}
          className="relative w-full h-[80vh] md:h-[90vh] bg-black/50 backdrop-blur-2xl rounded-xl overflow-x-auto flex snap-x snap-mandatory border-4 border-brown-secondary md:shadow-view-story-card  md:shadow-light/20"
          style={{
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {viewStory.map((item, idx) => (
            <div
              key={idx}
              className="snap-center inline-block w-full h-full flex-shrink-0 relative mx-3"
            >
              <Image
                src={item.image}
                alt={`scene ${idx + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
        {/* Prev button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-lg hover:bg-black/60 transition disabled:opacity-30 z-10"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={currentIndex === viewStory.length - 1}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-lg hover:bg-black/60 transition disabled:opacity-30 z-10"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default ViewStory;
