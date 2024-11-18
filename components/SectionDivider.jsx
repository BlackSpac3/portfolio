"use client";

import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="hidden py-5 opacity-20 sm:block dark:opacity-50">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
        className="bg-muted-foreground h-[80px] w-[2px] place-self-center rounded-full"
      ></motion.div>
    </div>
  );
};
export default SectionDivider;
