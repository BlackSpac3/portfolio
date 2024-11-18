"use client";
import { projectsData } from "@/lib/data";
import React from "react";
import ProjectCard from "./ProjectCard";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("/#projects", 0.4);
  return (
    <section ref={ref} id="projects" className="scroll-mt-24">
      <h2 className="section-heading">Recent Projects</h2>
      <div className="mt-14 flex flex-col gap-10">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default Projects;
