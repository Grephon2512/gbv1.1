"use client";

import dynamic from "next/dynamic";

const WasteCollectorMap = dynamic(() => import("./WasteCollectorMap"), {
  ssr: false, // Prevents server-side rendering issues
});

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Waste Collection Navigation
      </h1>
      <p className="text-lg text-center text-gray-700 mb-6">
        Find the nearest waste collector to efficiently manage waste disposal.
      </p>
      <WasteCollectorMap />
    </div>
  );
}
