"use client";

import Image from "next/image";
import experience1 from "@/public/experience1.webp";

const Experience = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-20 flex flex-col items-center text-3xl font-bold text-blue-400">
        Experience
      </div>
      <Image src={experience1} alt="Experience 1" className="w-1/2" />

      <div className="text-portfolio-gray text-l w-5/12 text-left">
        <li>
          {" "}
          Develop various frontend components to display static information and
          participate in weekly developer team meetings{" "}
        </li>
        <li> Tech Stack: Next.js, TailwindCSS, Prettier, Motion, EsLint </li>
        <li>
          {" "}
          Projects: AI CSE Resources, Pre-Therapy Student Organization, Thai
          Student Union{" "}
        </li>
      </div>
    </div>
  );
};

export default Experience;
