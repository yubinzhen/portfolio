"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="font-portfolio-poppins bg-portfolio-black text-portfolio-white fixed z-100 w-full shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4 md:justify-between">
        <div className="hidden text-xl font-bold hover:text-blue-400 md:block">
          <Link href="#home">Home</Link>
        </div>

        <div className="flex gap-6 text-lg">
          <Link href="#experience" className="hover:text-blue-400">
            Experience
          </Link>
          <Link href="#skills" className="hover:text-blue-400">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-blue-400">
            Projects
          </Link>

          <Link href="#contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
