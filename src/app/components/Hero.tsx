'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {

  
const fullText = `Building Brands
That Connect
and Convert`;

const [text, setText] = useState("");

useEffect(() => {
  let animationFrameId: number;
  let startTime: number | null = null;

  const baseSpeed = 100; // ms per character average

  const animate = (timestamp: number) => {
    if (!startTime) startTime = timestamp;

    const elapsed = timestamp - startTime;

    // Calculate index directly from elapsed time
    const nextIndex = Math.min(
      Math.floor(elapsed / baseSpeed),
      fullText.length
    );

    setText(fullText.slice(0, nextIndex));

    if (nextIndex < fullText.length) {
      animationFrameId = requestAnimationFrame(animate);
    }
  };

  animationFrameId = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(animationFrameId);
}, []);
  return (
    <div className=" grid md:grid-cols-2 gap-20 items-center">

      {/* Left Content */}
      <div className="space-y-8 text-center md:text-left">

        {/* Rotated Buttons */}
        <div className="flex font-(--font-bebas)  tracking-[0.07em] justify-center md:justify-start gap-4">

          <button className="bg-blue-500 text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 py-2 rounded-full transition-transform duration-300 hover:scale-110">
            strategy
          </button>

          <button className="bg-green-500 text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 py-2 rounded-full transition-transform duration-300 hover:scale-110">
            content
          </button>

          <button className="bg-red-500 text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 py-2 rounded-full transition-transform duration-300 hover:scale-110">
            SEO
          </button>

          <button className="bg-purple-500 text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 py-2 rounded-full transition-transform duration-300 hover:scale-110">
            growth
          </button>

        </div>

        {/* Main Text */}
<span
  className="
    block
    whitespace-pre-line
    text-3xl sm:text-4xl md:text-5xl lg:text-8xl
    font-bold leading-tight -tracking-tight
    min-h-[4em] sm:min-h-[4.2em] md:min-h-[4.5em] lg:min-h-[4em]
  "
>
  {text}
<span className="vertical-pulse w-[3px] sm:w-[3-px] md:w-[5px] lg:[w-7px] h-[0.7em] bg-[#FF0000] ml-4"></span>
</span>
        <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto md:mx-0 font-bold">
         I create content and run online campaigns that help brands reach more people, connect with their audience, and grow their business. I focus on making messages clear, engaging, and meaningful; while using data and insights to make sure every campaign delivers real results.
        </p>

      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <Image
          src="/hero.jpg"
          alt="hero"
          width={450}
          height={450}
          className="w-64 sm:w-80 md:w-96 lg:w-[450px] rounded-xl shadow-xl"
        />
      </div>

    </div>
  );
}