"use client";

import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const images = [
  "/logos/ahrefs.png",
  "/logos/buffer.png",
  "/logos/google-anlytics.png",
  "/logos/google-search-console.svg",
  "/logos/grammarly.png",
  "/logos/strapi.png",
  "/logos/salesforce.png",
  "/logos/surfer-seo.png",
  "/logos/zoominfo.png",
  "/logos/meta-business-suite.png",
];

export default function MarqueePage() {
  return (
    <SectionWrapper id="tools" bgColor="#ffffff">
      <h1 className="text-center font-bold tracking-wide text-6xl lg:text-6xl sm:text-4xl md:text-5xl mb-10">
        Tools Behind The Work
      </h1>

      <div className="w-full overflow-hidden">
        <div className="marquee-track flex gap-6">
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="relative w-[220px] h-[140px] sm:w-[280px] sm:h-[180px] md:w-[320px] md:h-[200px] lg:w-[380px] lg:h-[240px] flex-shrink-0"
            >
              <Image
                src={src}
                alt={`marquee-${index}`}
                fill
                className="object-contain rounded-xl shadow-lg bg-gray-300 p-4"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scoped CSS */}
     

    
    </SectionWrapper>
  );
}