import {
  EWA_logo,
  CT_logo,
  ctSite_preview,
  wfDinner_preview,
  olushodimu_preview,
  abinitio_preview,
} from "@/assets";

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Python",
  "React.js",
  "Next.js",
  "Auth.js",
  "Express.js",
  "Node.js",
  "Tailwind CSS",
  "SASS/SCSS",
  "Framer Motion",
  "MongoDB",
  "Mongoose",
  "SQL",
  "MySQL",
  "Knex.js",
  "Jest",
  "Git",
  "GitHub",
];

export const projectsData = [
  {
    title: "What's for Dinner",
    description:
      "This is an MVP e-commerce website for fast food, allowing users to sign up, browse a variety of meals, add items to their cart, proceed to checkout, and pay securely via Stripe payment system.",
    tags: ["React", "Express.js", "MongoDB", "Framer Motion", "Stripe"],
    imageUrl: wfDinner_preview,
    nodeEnv: "development",
    link: "https://github.com/BlackSpac3/whats-for-dinner",
  },
  {
    title: "Cardinal Torch",
    description:
      "Developed this fullstack website in 6 months for an Agro Commodities Company, with a fully functional content management system (CMS) and many more feutures.",
    tags: ["Next.js", "Auth.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
    imageUrl: ctSite_preview,
    nodeEnv: "production",
    link: "https://www.cardinaltorch.com",
  },
  {
    title: "Olu Shodimu & Co Legal Practicioners",
    description:
      "Developed a responsive one-page website for a Nigerian law firm using Next.js and Tailwind CSS, showcasing the firm’s key information with a sleek, modern design.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    imageUrl: olushodimu_preview,
    nodeEnv: "production",
    link: "https://www.olushodimu.com",
  },
  {
    title: "Abinitio Energy",
    description:
      "This is a straightforward website for an oil and gas logistics company, showcasing essential information like contact details, services, and history.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: abinitio_preview,
    nodeEnv: "production",
    link: "https://www.abinitio-energy.com",
  },
];

export const experienceData = [
  {
    title: "Software Developer Intern",
    company_name: "Excellent Way Academy",
    location: "Abuja",
    icon: EWA_logo,
    iconBg: "#383E56",
    date: "Sept 2023 - Jun 2024",
    points: [
      "Assisted in developing responsive web applications using React.js, JavaScript, and Tailwind CSS.",
      "Worked closely with senior developers to debug and optimize frontend code.",
      "Gained experience in agile development processes, including sprint planning and code reviews.",
    ],
  },
  {
    title: "Business Dev Officer / IT Solutions Expert",
    company_name: "Cardinal Torch Company LTD",
    location: "Lagos",
    icon: CT_logo,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Present",
    points: [
      "Developed a high-quality full-stack web application with separate client and admin panels using Next.js and modern JavaScript frameworks.",
      "Designed a clean, user-friendly frontend adhering to UI/UX best practices, styled with Tailwind CSS and enhanced with smooth animations using Framer Motion.",
      "Built and integrated RESTful APIs via Next.js API routes, enabling efficient and seamless data interaction with the backend.",
      "Led the design and implementation of reusable React components, streamlining development and improving code maintainability.",
      "Applied unit testing and Test-Driven Development (TDD) practices to boost code reliability and minimize bugs in production",
      "Optimized SEO to enhance visibility and search rankings",
      "Continually monitor and maintain site performance post-deployment to ensure a smooth user experience.",
    ],
  },
];
