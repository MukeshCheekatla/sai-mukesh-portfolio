import mailCheckerIcon from "../assets/mail-checker-icon.png";
import fresherFlowIcon from "../assets/fresherflow.png";

const DEFAULT_RESUME_LINK = "https://drive.google.com/file/d/1MAF2qQT7htw_HOrfX494a70M44AeTr90/view?usp=sharing";
const RESUME_LINK = import.meta.env.VITE_RESUME_URL?.trim() || DEFAULT_RESUME_LINK;

export const RESUME_DATA = {
  name: "Sai Mukesh Cheekatla",
  role: "Full Stack Developer",
  tagline: "React, Node.js, and Flask Developer | MCA Graduate",
  location: "India",

  about: `I'm a full-stack developer who enjoys turning ideas into clean, functional applications. I like solving problems, understanding how things work, and building products that feel smooth and responsive.

I work with modern tools like React, Vite, Tailwind CSS, Node.js, Express, Flask, PostgreSQL, and Supabase. I enjoy creating secure and scalable APIs, building intuitive UIs, and deploying full-stack apps end-to-end.

I've also worked with machine learning during my AI & ML internship, giving me experience in training and evaluating models.

  I'm always learning and improving - currently exploring deeper backend concepts and refining my full-stack expertise.`,

  email: "cheekatlamukesh@gmail.com",
  resumeLink: RESUME_LINK,
  linkedinUrl: "https://www.linkedin.com/in/Mukesh-Cheekatla",
  githubProfile: "https://github.com/MukeshCheekatla"
};

export const SKILLS = [
  {
    category: "Frontend",
    skills: ["React", "Vite", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT Authentication"]
  },
  {
    category: "Database & Tools",
    skills: [
      "PostgreSQL (Supabase)",
      "SQLAlchemy",
      "MongoDB",
      "MySQL",
      "Git & GitHub",
      "Postman"
    ]
  }
];

export const PROJECTS = [
  {
    title: "Mail Checker for Zoho",
    description:
      "Cross-browser mail extension for Zoho with unread badge counts, quick message previews, desktop notifications, dark mode, and secure OAuth 2.0 token handling through a backend refresh flow.",
    techStack: ["JavaScript", "HTML", "CSS", "Browser Extension APIs", "OAuth 2.0"],
    githubUrl: "https://github.com/MukeshCheekatla/Mail-Checker-for-Zoho",
    liveUrl: "https://mail-checker-for-zoho.pages.dev/",
    iconUrl: mailCheckerIcon
  },
  {
    title: "FresherFlow",
    description:
      "Verified fresher-job platform that curates internships, walk-ins, and entry-level roles with smart filters, profile-based matching, bookmark tracking, and direct redirects to official company application pages.",
    techStack: ["TypeScript", "Next.js", "React", "Node.js", "Express", "PostgreSQL", "Prisma", "PWA"],
    githubUrl: "https://github.com/MukeshCheekatla/FresherFlow",
    liveUrl: "http://fresherflow.in/",
    iconUrl: fresherFlowIcon
  }
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Adikavi Nannaya University",
    location: "Rajahmundry",
    duration: "2023 - 2025",
    gpa: "7.6 CGPA"
  },
  {
    degree: "Bachelor of Science (Comp. Sci)",
    institution: "Aditya Degree College",
    location: "Amalapuram",
    duration: "2020 - 2023",
    gpa: "6.9 CGPA"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Vidyanidhi Junior College",
    location: "Amalapuram",
    duration: "2018 - 2020",
    gpa: "7.12 CGPA"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "MGM High School",
    location: "Amalapuram",
    duration: "2017 - 2018",
    gpa: "9.8 CGPA"
  }
];

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];
