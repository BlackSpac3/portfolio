import { useActiveSection } from "@/context/ActiveSectionProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useSectionInView = (sectionTag, threshold) => {
  const { setActiveSection, lastClickTime } = useActiveSection();
  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection(sectionTag);
    }
  }, [inView, setActiveSection, lastClickTime, sectionTag]);

  return { ref };
};
