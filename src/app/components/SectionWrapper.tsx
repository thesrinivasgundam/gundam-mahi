'use client';

import { ReactNode } from "react";

interface Props {
  id: string;
  bgColor: string;
  children: ReactNode;
}

export default function SectionWrapper({ id, bgColor, children }: Props) {
  return (
    <section
      id={id}
      style={{ backgroundColor: bgColor }}
      className="
        min-h-screen 
        flex items-center justify-center
        px-4 sm:px-6 md:px-10 lg:px-20
        py-20 sm:py-28
        transition-all duration-700 ease-in-out
      "
    >
      <div className="w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
}