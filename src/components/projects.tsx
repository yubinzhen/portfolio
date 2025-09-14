"use client";

import Image from "next/image";
import Link from "next/link";
import pokemonProject from "@/public/pokemonProject.webp";
import quizMakerProject from "@/public/quizMakerProject.webp";
import aimlProject from "@/public/aimlProject.webp";
import ptsoProject from "@/public/ptsoProject.webp";
import { motion } from "motion/react";

const projects = [
  {
    title: "Thai Student Union",
    description:
      "Developed and launched UCR’s Thai Student Union website in collaboration with 10 developers.",
    image: ptsoProject,
    link: "https://github.com/acm-ucr/tsu-website",
  },

  {
    title: "Pre-Therapy Student Organization",
    description:
      "Developed and launched UCR’s Pre-Therapy Student Organization website in collaboration with 10 developers.",
    image: ptsoProject,
    link: "https://ptso.ucrhighlanders.org",
  },

  {
    title: "AI/ML CSE Resources",
    description:
      "Developed and launched the AI/ML page for UCR's computer science department in collaboration with 10 developers.",
    image: aimlProject,
    link: "https://learnai.cs.ucr.edu",
  },

  {
    title: "Text-Based Pokémon Roleplay Game",
    description:
      "A text-based battle game using first generation Pokémon. Users can battle, catch, and buy items. Built with GitHub, Kanban, Unit Tests, and SCRUM practices.",
    image: pokemonProject,
    link: "https://github.com/yubinzhen/CS100-WAYL-Project",
  },
  {
    title: "Cutie Hackathon: Quiz Maker (12 Hours)",
    description:
      "A flashcard program that allows students to save/load flashcards and quiz themselves. Helps prepare for exams with custom study decks.",
    image: quizMakerProject,
    link: "https://github.com/wesleylwu/cutieHack24",
  },
];

const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-portfolio-white w-full py-20"
    >
      <div className="mb-10 text-center text-3xl font-bold text-blue-400">
        Projects
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-15 px-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            className="group flex flex-col items-center rounded-2xl bg-[#151516] p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative mb-3 w-full overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="mb-2 text-xl font-bold group-hover:text-blue-400">
              {project.title}
            </div>
            <p className="text-portfolio-gray text-center text-sm">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
