"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import githubIcon from "@/public/githubIcon.webp";
import linkedinIcon from "@/public/linkedinIcon.webp";

const Footer = () => {
  return (
    <div
      id="contact"
      className="bg-portfolio-black text-portfolio-white mt-20 flex w-full items-center justify-between px-8 py-5"
    >
      <div className="flex items-center gap-2">
        <a href="mailto:yubinzhen020105@gmail.com">
          <Mail className="h-6 w-6 text-white" />
        </a>

        <a
          href="mailto:yubinzhen020105@gmail.com"
          className="hidden text-sm hover:text-blue-400 sm:block md:text-base"
        >
          yubinzhen020105@gmail.com
        </a>
      </div>

      <div className="flex items-center gap-6">
        <Link
          href="https://www.linkedin.com/in/yubinzhen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={linkedinIcon} alt="LinkedIn Icon" width={60} />
        </Link>
        <Link
          href="https://github.com/yubinzhen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={githubIcon} alt="GitHub Icon" width={40} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
