import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebas = localFont({
  src: "/fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas",
  display: "swap",
});

const sourceSans = localFont({
  src: "/fonts/SourceSans3-VariableFont_wght.ttf",
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gundam-mahi.vercel.app/"), // replace with real domain

  title: {
    default: "Maheshwari (Mahi) | Digital Marketing Specialist",
    template: "%s | Maheshwari - Digital Marketing Expert",
  },

  description:
    "Maheshwari (Mahi) is a results-driven Digital Marketing Specialist offering SEO, Google Ads, social media marketing, email campaigns, and performance-driven growth strategies.",

  keywords: [
    "Maheshwari Digital Marketer",
    "Mahi Marketing Expert",
    "SEO Specialist",
    "Google Ads Expert",
    "Social Media Advertising",
    "Email Marketing",
    "Performance Marketing",
  ],

  authors: [{ name: "Maheshwari (Mahi)" }],
  creator: "Maheshwari (Mahi)",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Maheshwari (Mahi) | Digital Marketing Portfolio",
    description:
      "Explore Maheshwari’s digital marketing services including SEO, paid advertising, and growth-focused strategies.",
    url: "https://gundam-mahi.vercel.app/",
    siteName: "Maheshwari Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Maheshwari (Mahi) | Digital Marketing Specialist",
    description:
      "Digital marketing services including SEO, PPC campaigns, and scalable growth strategies.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${bebas.className}
        ${sourceSans.variable}
      `}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}