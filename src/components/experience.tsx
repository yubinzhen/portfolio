"use client";

import Image from "next/image";
import experience1 from "@/public/experience1.webp";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col items-center"
    >
      <div className="mt-20 flex flex-col items-center text-3xl font-bold text-blue-400">
        Experience
      </div>
      <Image src={experience1} alt="Experience 1" className="w-75 md:w-2/4" />

      <div className="text-portfolio-gray w-5/11 text-left text-sm sm:text-base md:text-lg">
        <li>
          Develop various frontend components to display static information and
          participate in weekly developer team meetings
        </li>
        <li> Tech Stack: Next.js, TailwindCSS, Prettier, Motion, EsLint </li>
        <li>
          Projects: AI CSE Resources, Pre-Therapy Student Organization, Thai
          Student Union
        </li>
      </div>
    </motion.div>
  );
};

export default Experience;
