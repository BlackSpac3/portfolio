"use client";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { ref } = useSectionInView("/#about", 0.75);
  return (
    <motion.div
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="scroll-mt-28 text-center"
    >
      <h2 className="section-heading">About Me</h2>
      <p className="body-text">
        I am a passionate and versatile full-stack web developer with extensive
        experience building dynamic, user-friendly applications. Proficient in
        JavaScript and modern frameworks like
        <span className="font-bold"> React and Next.js</span>, I specialize in
        creating seamless front-end interfaces and robust back-end solutions
        using technologies like{" "}
        <span className="font-bold">Express.js, MongoDB</span> and others. My
        expertise spans the entire development stack, enabling me to efficiently
        design, develop, and deploy high-performance web applications. I am
        committed to writing clean, maintainable code while staying up-to-date
        with the latest trends and best practices in web development.
      </p>
    </motion.div>
  );
};
export default AboutMe;
