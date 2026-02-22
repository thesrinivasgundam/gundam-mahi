'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["home", "work", "services", "about", "contact"];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        <div className="font-bold text-xl">Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">

          <div className="flex gap-0">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="
                  px-5 py-2 rounded-full
                  border border-gray-400
                  border-b-4 border-b-gray-700
                  hover:translate-y-1
                  transition-all duration-300
                  text-sm lg:text-base font-sans font-bold
                "
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="ml-6 px-6 py-2 bg-yellow-300 text-black rounded-full 
                       hover:scale-105 transition duration-300 font-sans font-bold "
          >
            Start Project
          </a>

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
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-lg border-b"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center bg-yellow-500 text-white py-3 rounded-full"
          >
            Start Project
          </a>
        </div>
      )}
    </nav>
  );
}