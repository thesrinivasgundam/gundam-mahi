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
  title: "Digital Marketer Portfolio",
  description: "Showcasing my digital marketing projects and skills.",
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