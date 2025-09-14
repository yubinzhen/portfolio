"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigations = [
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <nav className="font-portfolio-poppins bg-portfolio-black text-portfolio-white fixed z-50 w-full shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold hover:text-blue-400">
          <Link href="#home">Home</Link>
        </div>

        <div className="hidden gap-6 text-lg md:flex">
          {navigations.map(({ name, link }, index) => (
            <Link
              key={index}
              href={link}
              className={`${
                path === link ? "text-blue-400" : "hover:text-blue-400"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        <div
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-1 w-6 bg-white transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-1 w-6 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-1 w-6 bg-white transition-transform duration-300 ${isOpen ? "-translate-y-4 -rotate-45" : ""}`}
          />
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        className="bg-portfolio-black flex flex-col items-center overflow-hidden md:hidden"
      >
        {navigations.map(({ name, link }, index) => (
          <Link
            key={index}
            href={link}
            onClick={() => setIsOpen(false)}
            className={`block w-full py-3 text-center text-lg hover:text-blue-400 ${
              path === link ? "text-blue-400" : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

export default NavBar;
