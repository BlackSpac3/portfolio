"use client";
import { myPicture } from "@/assets";
import { Button } from "@/components/ui/button";
import {
  ArrowRightCircleIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSection } from "@/context/ActiveSectionProvider";

const Intro = () => {
  const { ref } = useSectionInView("/#home", 0.5);
  const { setActiveSection, setLastClickTime } = useActiveSection();
  return (
    <div
      ref={ref}
      id="home"
      className="mx-auto flex flex-col items-center gap-5 py-4 sm:gap-8"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-fit select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={myPicture}
              alt="Picture of Toyin Jacobs"
              priority={true}
              className="size-20 select-none rounded-full border-4 border-[--foreground] shadow-xl sm:size-24"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-3xl"
          >
            👋
          </motion.span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-2xl leading-tight sm:text-3xl"
        >
          <span className="font-bold">Hello, I&apos;m Jacobs, </span>a{" "}
          <span className="bg-gradient-to-tr from-red-500 via-rose-400 to-indigo-500 bg-clip-text font-bold text-transparent">
            full-stack developer{" "}
          </span>
          with over <span className="font-bold">5 years </span>
          of experience. I enjoy building sites & apps. My focus is React
          (Next.js).
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          onClick={() => {
            setActiveSection("/#contact");
            setLastClickTime(Date.now());
          }}
        >
          <Button>
            Contact me now!
            <ArrowRightCircleIcon />
          </Button>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/Oluwatoyin-Jacobs-Resume.pdf"
          download={true}
        >
          <Button variant="outline">
            Download CV
            <DownloadIcon />
          </Button>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/BlackSpac3"
          target="blank"
          rel="noreferrer noopener"
        >
          <Button variant="outline">
            <GithubIcon />
          </Button>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/oluwatoyin-jacobs-422303b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="blank"
          rel="noreferrer noopener"
        >
          <Button variant="outline">
            <LinkedinIcon />
          </Button>
        </motion.a>
      </motion.div>
    </div>
  );
};
export default Intro;
