'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["home", "work", "services", "about", "contact"];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const smoothScroll = (targetId: string, duration = 800) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const start = window.scrollY;
    const end = target.offsetTop - -13; // offset for fixed navbar
    const distance = end - start;
    let startTime: number | null = null;

    const easeInOut = (t: number) => {
      return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOut(progress);

      window.scrollTo(0, start + distance * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        <div className=" text-xl">Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-0">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => smoothScroll(item)}
                className="px-5 py-2 rounded-full border border-gray-400
                           border-b-4 border-b-gray-700 hover:translate-y-1
                           transition-all duration-300 text-sm lg:text-base
                           font-sans font-bold capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => smoothScroll("contact")}
            className="ml-6 px-6 py-2 bg-yellow-300 text-black rounded-full
                       hover:scale-105 transition duration-300 font-source"
          >
            Contact Now!
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-lg py-6 px-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => smoothScroll(item)}
              className="block w-full text-left py-2 text-lg border-b capitalize"
            >
              {item}
            </button>
          ))}

          <button
            onClick={() => smoothScroll("contact")}
            className="block w-full mt-4 text-center bg-yellow-500 text-white py-3 rounded-full"
          >
            Start Project
          </button>
        </div>
      )}
    </nav>
  );
}