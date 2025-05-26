import React, {
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  useEffect,
} from "react";
import ReactMarkdown from "react-markdown";
import {
  XCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

interface ViewStoryProps {
  viewStory: {
    title: string;
    data: ExploreStoriesData[];
  };
  setViewStory: Dispatch<
    SetStateAction<{
      title: string;
      data: ExploreStoriesData[];
    }>
  >;
}

function ViewStory({ viewStory, setViewStory }: ViewStoryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const size = container.clientWidth;
    const scrollPos = container.scrollLeft;
    const idx = Math.round(scrollPos / size);
    setCurrentIndex(idx);
    setTimeout(() => {
      setShowPrompt(false);
    });
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

    const nextIndex = Math.min(currentIndex + 1, viewStory.data.length - 1);
    container.scrollTo({
      left: nextIndex * container.clientWidth,
      behavior: "smooth",
    });
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (
        promptRef.current?.contains(e.target as Node) ||
        infoRef.current?.contains(e.target as Node)
      ) {
        return;
      } else {
        setShowPrompt(false);
      }
    };
    document.querySelector("body")?.addEventListener("click", handleBodyClick);
    return () =>
      document
        .querySelector("body")
        ?.removeEventListener("click", handleBodyClick);
  }, []);

  return (
    <div className="fixed inset-0 bg-dark/90 z-50 flex flex-col items-center justify-center p-2">
      <div className="relative max-w-xl w-full mx-auto">
        {/* Close Button */}
        <button
          onClick={() =>
            setViewStory({
              data: [],
              title: "",
            })
          }
          className="absolute -top-2 -right-2 p-1 sm:p-2 bg-light-secondary rounded-full shadow-lg hover:bg-light-primary transition z-30"
        >
          <XCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-brown-primary" />
        </button>

        <button
          ref={infoRef}
          onClick={(e) => {
            e.stopPropagation();
            setShowPrompt(!showPrompt);
          }}
          className="absolute bottom-4 right-4 p-2 bg-black/50 rounded-full z-30 hover:bg-black/60 transition border border-primary-blue/80"
          title="Show description"
        >
          <InformationCircleIcon className="h-5 w-5 text-primary-blue cursor-pointer" />
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
          {/* story title */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded text-white text-sm sm:text-base font-bold z-50">
              {viewStory.title.replace(/<\/?title>/g, "")}
            </div>
          </div>
          {viewStory.data.map((item, idx) => (
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
        {showPrompt && (
          <div
            className="absolute right-6 bottom-10 mb-4 max-w-[90%] max-h-32 text-light-primary font-semibold backdrop-blur-2xl p-3 rounded z-20 overflow-auto break-words border-2 border-primary-blue"
            ref={promptRef}
          >
            <div className="text-sm sm:text-base mb-1 text-primary-blue">
              <span className="inline-flex items-center gap-1 bg-dark/50 px-2 py-1 rounded-full text-xs">
                <InformationCircleIcon className="h-4 w-4 text-primary-blue" />
                Generated by Sonar (Perplexity AI)
              </span>
            </div>
            <div
              className="mt-1 text-xs sm:text-sm"
              style={{ fontVariant: "all-petite-caps" }}
            >
              <ReactMarkdown>
                {viewStory.data[currentIndex].prompt}
              </ReactMarkdown>
            </div>
          </div>
        )}
        {/* Prev button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/60 transition disabled:opacity-30 z-10 border border-light/30"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={currentIndex === viewStory.data.length - 1}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/60 transition disabled:opacity-30 z-10 border border-light/30"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default ViewStory;
