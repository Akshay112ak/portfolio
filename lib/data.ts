export const profile = {
  name: "Akshay S",
  role: "Frontend Developer",
  tagline: "I build fast, scalable frontends.",
  location: "Thiruvananthapuram, Kerala",
  email: "akshayakshay123401@gmail.com",
 
  resumeHref: "/Akshay_S_Resume.pdf",
  summary:
    "Results-oriented Frontend Developer with 2+ years of experience specializing in modern frontend architecture and scalable web applications. Highly skilled in the React ecosystem (Next.js, React.js) and Vue.js, with a proven track record of optimizing application performance and managing complex state. Adept at handling large-scale data processing, secure authentication pipelines (JWT, NextAuth), and advanced API integrations (TanStack Query) to deliver seamless, high-performance user experiences.",
};

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Akshay112ak",
    icon: "github" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akshay-s-041870292/",
    icon: "linkedin" as const,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/yeFPWVNi5Z/",
    icon: "leetcode" as const,
  },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" as const },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  "Next.js",
  "React.js",
  "Vue.js",
  "JavaScript (ES6+)",
  "TanStack Query",
  "Node.js / Express.js",
  "MongoDB / Firebase",
  "NextAuth.js / JWT",
  "SSR / SSG / SEO",
  "Code Splitting & Lazy Loading",
];

export const experience = [
  {
    company: "Eloit Innovations Pvt. Ltd.",
    companyHref: "https://eloit.com/",
    title: "Software Engineer",
    range: "October 2024 — Present",
    bullets: [
      "Spearheaded a Next.js ERP frontend, implementing advanced state management, dynamic routing, and JWT/NextAuth authentication.",
      "Engineered batch processing with @react-pdf/renderer for 200+ simultaneous PDFs and streamed 500+ record bulk Excel uploads, ensuring zero UI blocking.",
      "Integrated REST APIs using TanStack Query for optimal caching and implemented DOM virtualization to smoothly render massive datasets.",
      "Developed a customizable report card module in Vue.js, streamlining complex data entry and real-time validation.",
      "Engineered scalable Role-Based Access Control (RBAC) on the frontend via NextAuth, dynamically rendering UI by authorization level.",
    ],
    tech: ["Next.js", "React", "Vue.js", "TanStack Query", "NextAuth.js", "SCSS"],
  },
  {
    company: "Mashupstack",
    companyHref: "https://www.mashupstack.com/",
    title: "Full Stack Developer Intern",
    range: "December 2023 — September 2024",
    bullets: [
      "Built responsive React single-page applications, engineering robust backend REST APIs via Express.js and Node.js.",
      "Implemented Firebase Cloud Firestore for scalable database storage and configured secure user authentication.",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase"],
  },
];

export const projects = [
  {
    title: "Eloit Websuite (EWS)",
    copy: "A Next.js-based platform offering 30+ school-specific website templates. Users input data once through structured, mapped form fields — template switching preserves all entered data, eliminating re-entry. Built with dynamic routing, server-side rendering, and CI/CD pipelines via Azure DevOps for scalable, SEO-optimized delivery.",
    tech: ["Next.js", "SSR", "Azure DevOps CI/CD", "Multi-tenant"],
    links: [
      { label: "St. Antony's PS", href: "https://www.saps.edu.in/" },
      { label: "St. Mary's FSG", href: "https://mfsg.ews.ac/" },
      { label: "MCC Sarvi", href: "https://www.mccsarvi.edu.in/" },
    ],
  },
  {
    title: "Kristapp — Church Management SaaS",
    copy: "A multi-tenant Church Management System (ChMS) serving dioceses, parishes, and congregations worldwide — unifying church software, mobile apps, website CMS, and private social media in one platform. Built the Family Bulk Upload system (Excel template import with real-time validation and dynamic dropdown population), NextAuth.js with multi-factor authentication (email/SMS OTP), role-based access control across 10+ roles, and integrated 300+ REST API routes with SunEditor for content management and ExcelJS for data export.",
    tech: ["Next.js", "Multi-tenant SaaS", "NextAuth.js MFA", "RBAC", "ExcelJS"],
    links: [
      { label: "Live Example", href: "https://dbshrinehyd.kristapp.com/" },
    ],
  },
  {
    title: "Holistic Progress Card (HPC)",
    copy: "A Vue.js-based CBSE report card module for Edisapp, the school ERP, offering multiple customizable templates. Structured data-entry interfaces for marks, teacher feedback, and parent/student comments automate holistic report generation — streamlining admin workflows while keeping CBSE compliance and per-institution flexibility.",
    tech: ["Vue.js", "Edisapp ERP", "CBSE Compliance"],
    links: [
      {
        label: "Edisapp",
        href: "https://eloit.com/edisapp-erp-school-management-system/",
      },
    ],
  },
  {
    title: "Bulk PDF & Excel Pipeline",
    copy: "Batch-processed 200+ simultaneous PDFs with @react-pdf/renderer and streamed 500+ record Excel uploads without blocking the UI.",
    tech: ["React", "@react-pdf/renderer", "Data Streaming"],
    links: [],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "C.H.M.M College For Advanced Studies",
    range: "2021 — 2023",
  },
  {
    degree: "Bachelor of Computer Science (BSc)",
    school: "C.H.M.M College For Advanced Studies",
    range: "2017 — 2020",
  },
];

export const certifications = [
  "HTML, CSS, and JavaScript for Web Developers — Johns Hopkins University (Coursera)",
  "Introduction to C Programming — NPTEL (IIT-level certification)",
  "MERN Stack Development — Mashupstack",
];
