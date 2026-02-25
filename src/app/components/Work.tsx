"use client";

import { useState, useRef, useEffect } from "react";

import {
  FaLinkedin,
  FaInstagram,
  FaMedium,
  FaPinterest,
  FaLaptop,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

/* ------------------------------------
   Platform Type Definition
-------------------------------------*/
type Platform = {
  name: string;
  icon: React.ReactNode;
};

/* ------------------------------------
   Social Platforms Data
-------------------------------------*/
const platforms: Platform[] = [
  { name: "LinkedIn", icon: <FaLinkedin /> },
  { name: "Instagram", icon: <FaInstagram /> },
  { name: "Twitter X", icon: <BsTwitterX /> },
  { name: "Medium", icon: <FaMedium /> },
  { name: "Pinterest", icon: <FaPinterest /> },
  { name: "Webinar", icon: <FaLaptop /> },
  { name: "Newsletter", icon: <FaLinkedin /> },
];

/* ------------------------------------
   Main Work Section Component
-------------------------------------*/
export default function Work() {
  return (
    <section
      id="work"
      className="min-h-screen pt-10 space-y-10 text-center bg-[#3a4755] rounded-md text-white px-4"
    >
      {/* Section Title */}
      <h2 className="my-work-title text-5xl sm:text-4xl md:text-5xl lg:text-6xl">
        My Work
      </h2>

      {/* Render All Platforms */}
      <div className="space-y-6 max-w-5xl mx-auto">
        {platforms.map((platform, index) => (
          <GlassTable key={index} platform={platform} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------
   GlassTable Component
   - Handles tooltip open/close
   - Click outside detection
-------------------------------------*/
function GlassTable({ platform }: { platform: Platform }) {
  const [open, setOpen] = useState(false); // Controls tooltip visibility
  const containerRef = useRef<HTMLDivElement>(null);

  /* ------------------------------------
     Close tooltip when clicking outside
  -------------------------------------*/
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      
      {/* -------------------------------
         Main Clickable Table
         - Ripple effect enabled
         - Click toggles tooltip
      --------------------------------*/}
      <div className="table-wrapper">
        <table
          onClick={() => setOpen(!open)}
          className="w-full ripple cursor-pointer border-separate border-spacing-0 rounded-xl overflow-hidden shadow-xl"
        >
          <thead className="bg-white/10 backdrop-blur-md border border-white/20">
            <tr>
              {/* Platform Name Column */}
              <th className="ripple px-6 py-4 text-left uppercase tracking-wider flex items-center gap-4 cursor-pointer">
                {platform.icon}
                {platform.name}
              </th>

              {/* Action Column */}
              <th className="ripple px-6 py-4 text-right uppercase tracking-wider cursor-pointer">
                View Posts
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {/* -------------------------------
         Tooltip Panel
         - Positioned above table
         - Smooth open/close animation
      --------------------------------*/}
      <div
        className={`
          absolute left-0 bottom-full mb-5 z-50
          transition-all duration-300
          ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-2"
          }
        `}
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-5 max-w-[95vw] overflow-x-auto space-y-4">

          {/* Tooltip Header */}
          <div className="flex items-center gap-3 text-lg border-b border-white/20 pb-3 uppercase">
            <span className="text-2xl">{platform.icon}</span>
            <span className="tracking-[2px]">
              {platform.name} Analytics
            </span>
          </div>

          {/* Analytics Table */}
          <table className="min-w-[700px] w-full text-xs text-left">
            <thead className="border-b border-white/20 uppercase">
              <tr>
                <th className="py-2 px-3">Impressions</th>
                <th className="py-2 px-3">Engagements</th>
                <th className="py-2 px-3">Engagement Rate</th>
                <th className="py-2 px-3">Clicks</th>
                <th className="py-2 px-3">CTR</th>
                <th className="py-2 px-3">Reactions</th>
                <th className="py-2 px-3">Comments</th>
                <th className="py-2 px-3">Reposts</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-white/10 hover:bg-white/5 transition">
                <td className="py-2 px-3">12,450</td>
                <td className="px-3">1,245</td>
                <td className="px-3">10%</td>
                <td className="px-3">320</td>
                <td className="px-3">2.5%</td>
                <td className="px-3">780</td>
                <td className="px-3">120</td>
                <td className="px-3">45</td>
              </tr>

              <tr className="hover:bg-white/5 transition">
                <td className="py-2 px-3">18,900</td>
                <td className="px-3">1,890</td>
                <td className="px-3">10%</td>
                <td className="px-3">510</td>
                <td className="px-3">2.7%</td>
                <td className="px-3">1,200</td>
                <td className="px-3">210</td>
                <td className="px-3">72</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}