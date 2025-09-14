"use client";

import { motion } from "motion/react";

const Skills = () => {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col items-center"
    >
      <div className="mt-15 flex flex-col items-center text-3xl font-bold text-blue-400">
        Skills
      </div>

      <div className="text-portfolio-gray mt-5 w-1/2 text-sm sm:text-base md:text-lg">
        <li>Coding Languages: C++, JavaScript, CSS, TypeScript, React, R </li>
        <li>
          Languages: English (Native), Taishanese (Native), Cantonese
          (Proficient), Madarin (Proficient){" "}
        </li>
        <li>
          Soft Skills: Hardworking, Critical Thinking, Teamwork, Problem
          Solving, Communication, Organized
        </li>
        <li>
          Interest: Trying new food/drinks, tennis/outdoor activities, and
          learning new things
        </li>
      </div>
    </motion.div>
  );
};

export default Skills;
