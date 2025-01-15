"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { githubIcon, playBttnIcon } from "@/assets";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const ProjectCard = ({ title, description, tags, imageUrl, nodeEnv, link }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={cardRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group"
    >
      <section className="relative flex-col overflow-hidden rounded-lg border bg-card/20 backdrop-blur-md transition group-even:flex-row-reverse group-hover:bg-card-foreground/[0.02] dark:group-hover:bg-card-foreground/[0.06] sm:flex">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={link}
                target="blank"
                className="absolute right-4 top-4 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-[#111111] to-[#555555] opacity-100 shadow-lg transition-all hover:scale-[1.2] active:scale-95 sm:opacity-0 sm:group-hover:opacity-100"
              >
                <Image
                  alt=""
                  src={nodeEnv === "production" ? playBttnIcon : githubIcon}
                  className="size-6 object-cover opacity-95"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {nodeEnv === "production" ? "Live Demo" : "Github Repository"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="sm:hidden">
          <Image
            src={imageUrl}
            alt={title}
            className="aspect-[13/8] object-cover object-top"
          />
        </div>

        <div className="w-full p-4 sm:w-[50%] sm:px-8 sm:py-10">
          <h3 className="w-[80%] font-semibold md:text-2xl">{title}</h3>
          <p className="body-text mt-2 leading-relaxed">{description}</p>
          <ul className="mt-5 flex flex-wrap gap-2 sm:mt-10">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-full border bg-foreground/5 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground backdrop-blur-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden w-[50%] sm:flex"></div>

        <Image
          src={imageUrl}
          alt={title}
          className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.05] group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 sm:block"
        />
      </section>
    </motion.div>
  );
};
export default ProjectCard;
