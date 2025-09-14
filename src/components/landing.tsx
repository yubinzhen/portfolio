"use client";

import Image from "next/image";
import landing from "@/public/landing.webp";
import { useState, useEffect } from "react";

const Landing = () => {
  const fullText = "Welcome!";
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Image
        src={landing}
        alt="Landing Page"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-portfolio-black z-10 rounded-lg p-6">
          <h1 className="text-portfolio-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Landing;
