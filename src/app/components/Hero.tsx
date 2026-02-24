'use client';

import Image from "next/image";

export default function Hero() {
  return (
    <div className=" grid md:grid-cols-2 gap-20 items-center">

      {/* Left Content */}
      <div className="space-y-8 text-center md:text-left">

        {/* Rotated Buttons */}
        <div className="flex font-(--font-bebas) tracking-[0.07em] justify-center md:justify-start gap-4">

          <button className="
            
            bg-blue-500 text-white
            text-xs sm:text-sm md:text-base lg:text-lg
            px-4 py-2
            rounded-full
            transition-transform duration-300
            hover:scale-110
            
          ">
            strategy
          </button>

          <button className="
            
            bg-green-500 text-white
            text-xs sm:text-sm md:text-base lg:text-lg
            px-4 py-2
            rounded-full
            transition-transform duration-300
            hover:scale-110
          ">
            content
          </button>

          <button className="
            
            bg-red-500 text-white
            text-xs sm:text-sm md:text-base lg:text-lg
            px-4 py-2
            rounded-full
            transition-transform duration-300
            hover:scale-110
          ">
            SEO
          </button>

          <button className="
            
            bg-purple-500 text-white
            text-xs sm:text-sm md:text-base lg:text-lg
            px-4 py-2
            rounded-full
            transition-transform duration-300
            hover:scale-110
          ">
            growth
          </button>

        </div>

        {/* Main Text */}
        <span className="
          block
          text-3xl sm:text-4xl md:text-5xl lg:text-8xl
          font-bold leading-tight -tracking-tight
        ">
          DIGITAL <br className="hidden sm:block" />
          MARKETER <br className="hidden sm:block" />
          GROWTH STRATEGIST
        </span>

        <p className="
          
          text-base sm:text-lg
          text-gray-600
          max-w-lg mx-auto md:mx-0 font-bold
        ">
                 I am a results-driven Digital Marketer specializing in performance marketing, 
        brand positioning, and data-driven growth strategies. My focus is on helping 
        businesses scale through SEO, paid advertising, and conversion optimization.
        </p>

      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <Image
          src="/hero.jpg"
          alt="hero"
          width={450}
          height={450}
          className="
            w-64 sm:w-80 md:w-96 lg:w-[450px]
            rounded-xl shadow-xl
          "
        />
      </div>

    </div>
  );
}