"use client";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const { ref } = useSectionInView("/#skills", 0.7);
  const container = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const fadeInAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <section ref={ref} id="skills" className="scroll-mt-24">
      <h2 className="section-heading">My Skills</h2>
      <motion.ul
        variants={container}
        whileInView="animate"
        viewport={{ once: true }}
        initial="initial"
        className="flex flex-wrap items-center justify-center gap-1 gap-y-2"
      >
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimation}
            key={index}
            className="rounded-lg border bg-card/50 px-4 py-2 backdrop-blur-md dark:bg-card/20"
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
export default SkillsSection;
