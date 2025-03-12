"use client";

import React, { useEffect, useState } from "react";
import { experienceData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { useTheme } from "next-themes";

const ExperienceCard = ({ experience, cardStyle }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: cardStyle.bg,
        boxShadow: "none",
        border: `1px solid ${cardStyle.borderColor}`,
        borderRadius: "6px",
        padding: "1.3rem 2re,",
        color: "ffeeee",
        textAlign: "left",
        WebkitBackdropFilter: "blur",
      }}
      contentArrowStyle={{
        borderRight: `10px solid ${cardStyle.borderColor}`,
        background: "",
      }}
      date={experience.date}
      iconStyle={{
        background: cardStyle.iconBg,
        borderColor: "#ffeeee",
        boxShadow: `0 0 0 4px ${cardStyle.borderColor}`,
        userSelect: "none",
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="font-semibold">{experience.title}</h3>
        <p className="!mt-0 text-sm !font-normal text-muted-foreground">
          {experience.company_name} - {experience.location}
        </p>
        <ul className="body-text mt-2 list-inside list-disc !font-light !leading-snug">
          {experience.points.map((point, index) => (
            <li key={index} className="mb-2">
              {point}
            </li>
          ))}
          {/* {experience.description} */}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const ExperienceSection = () => {
  const { ref } = useSectionInView("/#experience", 0.5);
  const { resolvedTheme } = useTheme();
  const [cardStyle, setCardStyle] = useState({
    bg: "",
    borderColor: "",
    iconBg: "",
  });

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setCardStyle({
        bg: "#03071233",
        borderColor: "#1f2937",
        iconBg: "#1f2937",
      });
    } else {
      setCardStyle({
        bg: "#ffffff80",
        borderColor: "#e5e7eb",
        iconBg: "#ffffff",
      });
    }
  }, [resolvedTheme, setCardStyle]);
  return (
    <section ref={ref} id="experience" className="scroll-mt-24">
      <h2 className="section-heading">Experience</h2>
      <div className="flex w-full flex-col">
        <VerticalTimeline lineColor={cardStyle.borderColor}>
          {experienceData.map((experience, index) => (
            <React.Fragment key={index}>
              <ExperienceCard experience={experience} cardStyle={cardStyle} />
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
export default ExperienceSection;
