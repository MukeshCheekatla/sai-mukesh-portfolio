// Image paths (from /assets folder)
const notesImg = '/src/assets/notes.png';
const weatherImg = '/src/assets/weather.png';

export const RESUME_DATA = {
  name: "Sai Mukesh Cheekatla",
  role: "Full Stack Developer",
  tagline: "React, Node.js & Flask Developer | MCA Graduate",

  about: `I'm a full-stack developer who enjoys turning ideas into clean, functional applications. I like solving problems, understanding how things work, and building products that feel smooth and responsive.

I work with modern tools like React, Vite, Tailwind, Node.js, Express, Flask, PostgreSQL, and Supabase. I enjoy creating secure and scalable APIs, building intuitive UIs, and deploying full-stack apps end-to-end.

I've also worked with machine learning during my AI & ML internship, giving me experience in training and evaluating models.

I'm always learning and improving—currently exploring deeper backend concepts and refining my full-stack expertise.`,

  email: "cheekatlamukesh@gmail.com",
  resumeLink: "https://drive.google.com/file/d/1MAF2qQT7htw_HOrfX494a70M44AeTr90/view?usp=sharing",
  linkedinUrl: "https://www.linkedin.com/in/Mukesh-Cheekatla",
  githubProfile: "https://github.com/MukeshCheekatla"
};

export const SKILLS = [
  {
    category: "Frontend",
    skills: ["React", "Vite", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
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
    title: "NotesApp – Full Stack Notes",
    description:
      "A secure notes application featuring JWT authentication, note pinning, archiving, and deletion. Built with a responsive React frontend and a robust Flask backend.",
    techStack: ["React", "Vite", "Flask", "SQLAlchemy", "PostgreSQL", "Supabase"],
    githubUrl: "https://github.com/MukeshCheekatla/notesApp",
    liveUrl: "https://allmynote.netlify.app/",
    imageUrl: notesImg
  },
  {
    title: "LiveWeather – Forecast App",
    description:
      "Real-time weather application offering geolocation-based search and cached responses for performance. Features a clean, mobile-first design.",
    techStack: ["React", "Tailwind", "Node.js", "Express", "OpenWeather API"],
    githubUrl: "https://github.com/MukeshCheekatla/LiveWeather",
    liveUrl: "https://checkliveweatherdata.netlify.app/",
    imageUrl: weatherImg
  }
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Adikavi Nannaya University",
    location: "Rajahmundry",
    duration: "2023 – 2025",
    gpa: "7.6 CGPA"
  },
  {
    degree: "Bachelor of Science (Comp. Sci)",
    institution: "Aditya Degree College",
    location: "Amalapuram",
    duration: "2020 – 2023",
    gpa: "6.9 CGPA"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Vidyanidhi Junior College",
    location: "Amalapuram",
    duration: "2018 – 2020",
    gpa: "7.12 CGPA"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "MGM High School",
    location: "Amalapuram",
    duration: "2017 – 2018",
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
