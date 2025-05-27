// src/app/generate/results/page.tsx
import React, { Suspense } from "react";
import StoryResultsClient from "./StoryResultsClient";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <StoryResultsClient />
    </Suspense>
  );
}
