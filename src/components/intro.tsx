"use client";

import Image from "next/image";
import profilePic from "@/public/profilePic.webp";
import { motion } from "motion/react";

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col items-center"
    >
      <Image
        src={profilePic}
        alt="Profile Picture"
        className="mt-20 w-32 sm:w-40 md:w-48 lg:w-56"
      />

      <div className="text-portfolio-white mt-8 text-2xl font-bold sm:text-3xl md:text-4xl">
        Hello, I'm Yubin Zhen!
      </div>

      <div className="text-portfolio-gray mt-3 w-1/2 text-center text-sm sm:text-base md:text-lg">
        I am a Computer Science major at University of California Riverside,
        with a strong foundation in programming, software development and
        problem solving. I am eager to learn new things and am passionate about
        creating projects that will solve real-world challenges. I strive for
        new experiences and collaborating with others to allow me to grow as a
        developer/person.
      </div>

      <div className="mt-10 flex gap-5">
        <a
          href="resume.pdf"
          download
          target="_blank"
          className="bg-portfolio-white text-portfolio-black border-portfolio-white hover:text-portfolio-white rounded-full border px-6 py-3 font-semibold transition-colors duration-300 hover:bg-transparent"
        >
          Resume
        </a>
        <a
          href="cv.pdf"
          download
          target="_blank"
          className="text-portfolio-white border-portfolio-white hover:bg-portfolio-white hover:text-portfolio-black rounded-full border bg-transparent px-6 py-3 font-semibold transition-colors duration-300"
        >
          CV
        </a>
      </div>
    </motion.div>
  );
};

export default Intro;
