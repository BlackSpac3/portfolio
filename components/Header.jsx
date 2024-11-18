"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { useActiveSection } from "../context/ActiveSectionProvider";
import { EllipsisIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Header = () => {
  const { resolvedTheme } = useTheme();
  const { activeSection, setActiveSection, setLastClickTime } =
    useActiveSection();
  const [navBg, setNavBg] = useState(false);
  const navLinks = [
    // { name: "Home", url: "/#home" },
    { name: "About", url: "/#about" },
    { name: "Projects", url: "/#projects" },
    { name: "Skills", url: "/#skills" },
    { name: "Experience", url: "/#experience" },
    { name: "Contact", url: "/#contact" },
  ];
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -150 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (window.scrollY > 20) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }

    const handler = () => {
      if (window.scrollY > 20) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <header
      className={`${navBg && "border-b bg-background/65"} fixed inset-x-0 top-0 z-50 w-screen py-6 backdrop-blur-md transition`}
    >
      <motion.nav
        variants={container}
        initial="hidden"
        animate="show"
        className="container flex max-w-3xl items-center justify-between gap-2"
      >
        <motion.div variants={item}>
          <Link
            href="/"
            onClick={() => {
              setActiveSection("/#home");
              setLastClickTime(Date.now());
            }}
            className="font-serif text-2xl font-bold"
          >
            JD
          </Link>
        </motion.div>

        <motion.ul
          variants={item}
          className="hidden flex-wrap items-center gap-2 text-sm text-muted-foreground sm:flex"
        >
          {navLinks.map((link, index) => (
            <Link
              href={link.url}
              onClick={() => {
                setActiveSection(link.url);
                setLastClickTime(Date.now());
              }}
              key={index}
              className={`${activeSection === link.url && "text-foreground"} relative px-3 py-2 transition-colors hover:text-foreground`}
            >
              <p>
                {link.name}
                {activeSection === link.url && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute inset-0 -z-10 rounded-lg bg-foreground/10"
                  ></motion.span>
                )}
              </p>
            </Link>
          ))}
        </motion.ul>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div variants={item}>
                <ThemeToggle />
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu className="block sm:hidden">
          <motion.div variants={item} className="block sm:hidden">
            <DropdownMenuTrigger asChild>
              <EllipsisIcon />
            </DropdownMenuTrigger>
          </motion.div>
          <DropdownMenuContent className="w-fit">
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link href={link.url}>
                  <DropdownMenuItem>{link.name}</DropdownMenuItem>
                </Link>
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.nav>
    </header>
  );
};
export default Header;
