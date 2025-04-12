import React, { lazy, Suspense } from "react";
const TrendingLibraries = lazy(() => import("./TrendingLibraries"));
const LibrariesNearYou = lazy(() => import("./LibrariesNearYou"));

function DesktopCard() {
  return (
    <>
      
      <Suspense fallback={<div>Loading...</div>}>
        <TrendingLibraries />
        
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      
        <LibrariesNearYou />
      </Suspense>
    </>
  );
}

export default DesktopCard;
