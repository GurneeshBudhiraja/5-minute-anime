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
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

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
  const [showCitations, setShowCitations] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLButtonElement>(null);
  const citationsRef = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const size = container.clientWidth;
    const scrollPos = container.scrollLeft;
    const idx = Math.round(scrollPos / size);
    setCurrentIndex(idx);
    setTimeout(() => {
      setShowPrompt(false);
      setShowCitations(false);
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

    let prevIndex = currentIndex - 1;
    while (prevIndex >= 0 && !viewStory.data[prevIndex].isLoaded) {
      prevIndex--;
    }
    if (prevIndex >= 0) {
      container.scrollTo({
        left: prevIndex * container.clientWidth,
        behavior: "smooth",
      });
      setCurrentIndex(prevIndex);
    }
  };

  const handleNext = () => {
    const container = containerRef.current;
    if (!container) return;

    let nextIndex = currentIndex + 1;
    while (
      nextIndex < viewStory.data.length &&
      !viewStory.data[nextIndex].isLoaded
    ) {
      nextIndex++;
    }
    if (nextIndex < viewStory.data.length) {
      container.scrollTo({
        left: nextIndex * container.clientWidth,
        behavior: "smooth",
      });
      setCurrentIndex(nextIndex);
    }
  };

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (
        promptRef.current?.contains(e.target as Node) ||
        infoRef.current?.contains(e.target as Node) ||
        citationsRef.current?.contains(e.target as Node)
      ) {
        return;
      } else {
        setShowPrompt(false);
        setShowCitations(false);
      }
    };
    document.querySelector("body")?.addEventListener("click", handleBodyClick);
    return () =>
      document
        .querySelector("body")
        ?.removeEventListener("click", handleBodyClick);
  }, []);

  const hasPrevLoaded = (() => {
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (viewStory.data[i].isLoaded) return true;
    }
    return false;
  })();

  const hasNextLoaded = (() => {
    for (let i = currentIndex + 1; i < viewStory.data.length; i++) {
      if (viewStory.data[i].isLoaded) return true;
    }
    return false;
  })();

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

        {/* citation icon */}
        {viewStory.data[currentIndex].citations?.length > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowPrompt(false);
              setShowCitations(!showCitations);
            }}
            ref={citationsRef}
            className="absolute bottom-4 right-16 p-2 bg-black/50 rounded-full z-30 hover:bg-black/60 transition border border-primary-blue/80"
            title="Show citations"
          >
            <DocumentTextIcon className="h-5 w-5 text-primary-blue cursor-pointer" />
          </button>
        )}

        {/* info icon */}
        <button
          ref={infoRef}
          onClick={(e) => {
            e.stopPropagation();
            setShowCitations(false);
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
              className="snap-center w-full h-full flex-shrink-0 relative mx-3 flex items-center justify-center"
            >
              {item.isLoaded ? (
                <Image
                  src={item.image}
                  alt={`scene ${idx + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="loader-border-4 loader-border-light-primary rounded-full w-12 h-12 border-t-transparent animate-spin"></div>
              )}
            </div>
          ))}
        </div>
        {showPrompt && (
          <div
            className="absolute right-6 bottom-10 mb-4 max-w-[90%] max-h-32 text-light-primary font-semibold backdrop-blur-2xl p-3 rounded z-20 overflow-auto break-words border-2 border-primary-blue"
            ref={promptRef}
          >
            {/* icon to show the Perplexity prompt */}
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
        {showCitations && (
          <div
            className="absolute right-16 bottom-10 mb-4 max-w-[80%] max-h-32 text-light-primary font-semibold backdrop-blur-2xl bg-dark/30 p-3 rounded z-20 overflow-auto break-words border-2 border-primary-blue"
            ref={promptRef}
          >
            {/* icon to show the Perplexity citations */}
            <div className="text-sm sm:text-base mb-1 text-primary-blue">
              <span className="inline-flex items-center gap-1 bg-dark/50 px-2 py-1 rounded-full text-xs">
                <InformationCircleIcon className="h-4 w-4 text-primary-blue" />
                Perplexity Citations
              </span>
            </div>
            <div className="mt-1 text-xs sm:text-sm">
              <ol className="list-disc pl-5 text-primary-blue">
                {viewStory.data[currentIndex].citations.map((citation, idx) => (
                  <li key={idx}>
                    <a
                      href={citation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-blue underline"
                    >
                      {citation}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
        {/* Prev button */}
        <button
          onClick={handlePrev}
          disabled={!hasPrevLoaded}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/60 transition disabled:opacity-30 z-10 border border-light/30"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={!hasNextLoaded}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/60 transition disabled:opacity-30 z-10 border border-light/30"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default ViewStory;
