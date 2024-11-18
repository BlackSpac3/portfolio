import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import {
  EWA_logo,
  CT_logo,
  tesla,
  cardinaltorchIMG,
  ctSite_preview,
  wfDinner_preview,
} from "@/assets";

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Oracle SQL",
  "MySQL",
  "Framer Motion",
];

export const projectsData = [
  {
    title: "What's for Dinner",
    description:
      "This is an MVP e-commerce website for fast food, allowing users to sign up, browse a variety of meals, add items to their cart, proceed to checkout, and pay securely via Stripe payment system.",
    tags: ["React", "exopress", "MongoDB", "Framer Motion", "Stripe"],
    imageUrl: wfDinner_preview,
    nodeEnv: "development",
    link: "https://github.com/BlackSpac3/whats-for-dinner",
  },
  {
    title: "Cardinal Torch",
    description:
      "I developed this fullstack website in 6 months for an Agro Commodities Company, with a fully functional content management system (CMS) and many more feutures.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Framer Motion"],
    imageUrl: ctSite_preview,
    nodeEnv: "production",
    link: "https://www.cardinaltorch.com",
  },
];

export const experienceData = [
  {
    title: "ICT Instructor",
    company_name: "Excellence Way Academy",
    location: "Abuja",
    icon: EWA_logo,
    iconBg: "#383E56",
    date: "Sept 2023 - Jan 2024",
    description:
      " Instructed junior courses in graphic design using Adobe Photoshop and taught an advanced course on web development to secondary school students, including HTML, CSS, and Javascript",
  },
  {
    title: "Business Development Officer",
    company_name: "Cardinal Torch Company LTD",
    location: "Lagos",
    icon: CT_logo,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Present",
    description:
      "I manage the company's brand identity and social media prescene, develop, deploy and manage websites like the one listed in the projects section using React, ExpressJS, NextJs and other tools.",
  },
];
