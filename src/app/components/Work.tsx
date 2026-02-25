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
import { title } from "process";
import { url } from "inspector";
import { PiAirplaneLandingFill } from "react-icons/pi";

/* ================================
   Types
================================ */

type Platform = {
  name: string;
  icon: React.ReactNode;
  analytics?: AnalyticsRow[];
  links: {title: string;
    url:string;
  }[];
  
};

type AnalyticsRow = {
  impressions: number;
  engagements: number;
  engagementRate: string;
  clicks: number;
  ctr: string;
  reactions: number;
  comments: number;
  reposts: number;
};

/* ================================
   Data
================================ */




const sampleAnalytics: AnalyticsRow[] = [
  {
    impressions: 12450,
    engagements: 1245,
    engagementRate: "10%",
    clicks: 320,
    ctr: "2.5%",
    reactions: 780,
    comments: 120,
    reposts: 45,
  },
  {
    impressions: 18900,
    engagements: 1890,
    engagementRate: "10%",
    clicks: 510,
    ctr: "2.7%",
    reactions: 1200,
    comments: 210,
    reposts: 72,
  },
];

const platforms: Platform[] = [
  {
  name: "LinkedIn",
  icon: <FaLinkedin />,
  analytics: [
    {
      impressions: 4258,
      engagements: 2191,
      engagementRate: "51.46%",
      clicks: 2088,
      ctr: "49.04%",
      reactions: 94,
      comments: 0,
      reposts: 9,
    },
    {
      impressions: 932,
      engagements: 385,
      engagementRate: "41.31%",
      clicks: 345,
      ctr: "37.02%",
      reactions: 35,
      comments: 3,
      reposts: 2,
    },
    {
      impressions: 350,
      engagements: 33,
      engagementRate: "9.43%",
      clicks: 12,
      ctr: "3.43%",
      reactions: 16,
      comments: 4,
      reposts: 1,
    },
    {
      impressions: 612,
      engagements: 31,
      engagementRate: "5.07%",
      clicks: 27,
      ctr: "4.41%",
      reactions: 3,
      comments: 0,
      reposts: 1,
    },
  ],


  links: [
    {
      title: "GartnerIAM Summit 2025",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7403911293826482176",
    },
    {
      title: "AI is everywhere, drafting emails, summarizing meetings",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7422263542340571136",
    },
    {
      title: "During wars and geopolitical conflicts",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7422345241086603265",
    },
        {
      title: "Great energy and a fantastic turnout",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7425219875461021696",
    },
  ],

},
  
  {
    name: "Instagram",
    icon: <FaInstagram />,
    links:[
      {
        title:'gartner i am 2025 ( day 3 )',
        url:'https://www.instagram.com/p/DSGCfShE5dF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      },
            {
        title:'cyber security summit atlanta',
        url:'https://www.instagram.com/p/DNnvuRTPZka/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      },
    ],
  },
  {
    name: "X",
    icon: <BsTwitterX />,
        links:[
      {
        title:'do you know ?',
        url:'https://x.com/techdemocracy/status/2020918128457416886?s=20',
      },
      {
        title:'cisco form canada 2026',
        url:'https://x.com/techdemocracy/status/2018722495948562878?s=20',
      },
    ],
  },
  {
    name: "Medium",
    icon: <FaMedium />,
    links:[
      {
        title:'Zero Trust Tops Cybersecurity Investments in 2025, Why Every Smart Business Is Moving to Zero Trust, And What That Means?',
        url:'https://medium.com/p/5234fc9bed8c',
      },
            {
        title:'cyber security in education: a wake-up call for institutional leaders',
        url:'https://medium.com/p/3fb8695387f8',
      }
    ],
  },
  {
    name: "Pinterest",
    icon: <FaPinterest />,
        links:[
      {
        title:'identity resolution',
        url:'https://pin.it/3wdrz96dq',
      },
            {
        title:'cyber security 2026',
        url:'https://pin.it/5ski6P0Cc',
      },
    ],
  },

  {
    name: "Newsletter",
    icon: <FaLaptop />,

      links:[
      {
        title:'july newsletter',
        url:'https://go.pardot.com/webmail/1095742/2144617414/8ff4388f195372c0a76f779ffe8bb2af8538eea842cfad01b4066a1938d438b3',
      },
      {
        title:'september newsletter',
        url:'https://go.pardot.com/webmail/1095742/2167889278/8ff4388f195372c0a76f779ffe8bb2af8538eea842cfad01b4066a1938d438b3',
      }
    ],
  },

  {
  name: "landing pages & blogs",
  icon: <PiAirplaneLandingFill />,

  links: [
    { title: "TechDemocracy at Identiverse 2025 - Agile Innovation in Identity Security", url: "https://www.techdemocracy.com/company/event/tech-democracy-at-identiverse-2025-agile-innovation-in-identity-security-36" },
    { title: "the official cybersecurity summit 2025 dallas", url: "https://www.techdemocracy.com/company/event/the-official-cybersecurity-summit-2025-dallas-53" },
  ],
},
];










/* ================================
   Main Section
================================ */

export default function Work() {
  return (
    <section
      id="work"
      className="min-h-screen pt-6 space-y-10 text-center bg-[#3a4755] rounded-md text-white px-4"
    >
      <h2 className="my-work-title text-5xl sm:text-4xl md:text-5xl lg:text-6xl">
        My Work
      </h2>

      <div className="space-y-4 max-w-5xl mx-auto">
        {platforms.map((platform, index) => (
          <GlassTable key={index} platform={platform} />
        ))}
      </div>
    </section>
  );
}

/* ================================
   Glass Table Component
================================ */

function GlassTable({ platform }: { platform: Platform }) {
  const [open, setOpen] = useState(false); // analytics
  const [showLinks, setShowLinks] = useState(false); // links table
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setShowLinks(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="table-wrapper">
        <table className="w-full ripple border-separate border-spacing-0 rounded-xl overflow-hidden shadow-xl">
          <thead className="bg-white/10 backdrop-blur-md border border-white/20">
            <tr>
              {/* Analytics Toggle */}
              <th
                onClick={() => {
                  setOpen(!open);
                  setShowLinks(false);
                }}
                className=" px-6 py-4 text-left uppercase tracking-wider flex items-center gap-4 cursor-pointer"
              >
                {platform.icon}
                {platform.name}
              </th>

              {/* View Posts Button */}
              <th className="px-3 py-4 text-right uppercase tracking-wider">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowLinks(!showLinks);
                    setOpen(false);
                  }}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 transition rounded-md"
                >
                  View Posts
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {/* ================= Analytics Tooltip ================= */}
      <div
        className={`
          absolute left-0 top-full mb-5 z-50
          transition-all duration-300
          ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-2"
          }
        `}
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-5 max-w-[95vw] overflow-x-auto space-y-4">
          <div className="flex items-center gap-3 text-lg border-b border-white/20 pb-3 uppercase">
            <span className="text-2xl">{platform.icon}</span>
            <span className="tracking-[2px]">
              {platform.name} Analytics
            </span>
          </div>

          {platform.analytics && (
  <AnalyticsTable data={platform.analytics} />
)}
        </div>
      </div>

      {/* ================= Links Table ================= */}
      <div
        className={`
          absolute left-0 bottom-full mb-5 z-50
          transition-all duration-300
          ${
            showLinks
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-2"
          }
        `}
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-5 max-w-[95vw] overflow-x-auto space-y-4">
          
          <div className="text-lg border-b tracking-[2] border-white/20 pb-3 uppercase">
            {platform.name} Links
          </div>

          <table className="w-full text-sm text-left">
            <thead className="border-b border-white/20 uppercase">

            </thead>
              <tbody>
                {platform.links.map((link, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 hover:bg-white/5 transition"
                  >
                    <td className="py-2 px-3">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-300"
                        title={link.title}   // 👈 Tooltip on hover
                      >
                        {link.title}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

/* ================================
   Reusable Analytics Table
================================ */


function AnalyticsTable({ data }: { data: AnalyticsRow[] }) {
  // Merge data if you want repeated rows
  const mergedData = [ ...data];

  return (
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
        {mergedData.map((row, index) => (
          <tr
            key={index}
            className="border-b border-white/10 hover:bg-white/5 transition"
          >
            <td className="py-2 px-3">{row.impressions.toLocaleString()}</td>
            <td className="px-3">{row.engagements.toLocaleString()}</td>
            <td className="px-3">{row.engagementRate}</td>
            <td className="px-3">{row.clicks.toLocaleString()}</td>
            <td className="px-3">{row.ctr}</td>
            <td className="px-3">{row.reactions.toLocaleString()}</td>
            <td className="px-3">{row.comments.toLocaleString()}</td>
            <td className="px-3">{row.reposts.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}