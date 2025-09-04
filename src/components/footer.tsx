"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import githubIcon from "@/public/githubIcon.webp";
import linkedinIcon from "@/public/linkedinIcon.webp";

const Footer = () => {
  return (
    <footer className="bg-portfolio-black text-portfolio-white mt-20 flex w-full items-center justify-between px-8 py-5">
      <div className="flex items-center gap-2">
        <Mail className="h-6 w-6 text-white" />
        <a
          href="mailto:yubinzhen571@gmail.com"
          className="text-sm hover:text-blue-400 md:text-base"
        >
          yubinzhen571@gmail.com
        </a>
      </div>

      <div className="flex items-center gap-6">
        <Link
          href="https://www.linkedin.com/in/yubinzhen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={linkedinIcon} alt="LinkedIn Icon" h-auto width={60} />
        </Link>
        <Link
          href="https://github.com/yubinzhen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={githubIcon} alt="GitHub Icon" width={40} h-auto />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
