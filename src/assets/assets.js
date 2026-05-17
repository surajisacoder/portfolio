import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaDatabase,
  FaCloud,
  FaCogs,
} from "react-icons/fa";

import profileImg from "../assets/profile.jpg";
import projectImg1 from "../assets/project1.png";
import projectImg2 from "../assets/project2.png";
import projectImg3 from "../assets/project3.png";

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I enjoy building practical solutions to real-world problems using modern web technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "I focus on simple, user-friendly UI that looks good and feels smooth to use.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write clean, reusable, and efficient code by following best practices.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "I build fast and responsive user interfaces using modern frontend tools. I focus on clean design, smooth user experience, and mobile-friendly layouts.",
    tags: ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "I create secure and scalable backend systems with REST APIs, authentication, and server-side logic that supports real-world applications.",
    tags: [
      "Node.js",
      "Express",
      "REST APIs",
      "JWT Auth",
      "Microservices",
      "Socket.IO",
    ],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "I design and manage databases for storing and handling application data efficiently. I work with both SQL and NoSQL depending on the project needs.",
    tags: ["MongoDB", "Mongoose", "PostgreSQL", "Firebase"],
  },
  // {
  //   title: "Mobile Development",
  //   icon: FaMobileAlt,
  //   description:
  //     "Building cross-platform mobile applications with modern tools.",
  //   tags: ["React Native", "Flutter"],
  // },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    description:
      "I deploy and manage applications with tools that help in smooth hosting, scaling, and version control.",
    tags: ["AWS", "AWS DynamoDb", "Docker", "GitLab", "CI/CD"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "I use essential tools to plan, build, test, and deploy projects efficiently.",
    tags: ["Git & GitHub", "Postman", "VS Code", "Linux", "Virtual Machines"],
  },
  {
    title: "Core Concepts",
    icon: FaCogs,
    description:
      "Strong understanding of core computer science fundamentals and problem-solving concepts.",
    tags: ["DSA", "OOP", "DBMS", "OS"],
  },
];

export const projects = [
  {
    title: "Prescripto: Doctor Appointment Booking App",
    description:
      "Built a full-stack doctor appointment booking platform using MongoDB, Express, React, Node.js, and Tailwind, implementing JWT-based authentication with role-based access for patients, doctors, and admins, enabling real-time appointment booking, rescheduling, and availability management, and enhancing user experience through advanced doctor search, filtering, and optimized APIs.",
    image: projectImg1,
    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Razorpay"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://prescripto-frontend-hq8l.onrender.com",
    demo2: "https://prescripto-admin-kadq.onrender.com",
    code: "https://github.com/surajisacoder/Prescripto",
  },

  {
    title: "Music Player App ",
    description:
      "Built a dynamic music player using HTML, CSS, and JavaScript with custom playlists and dark mode, featuring a responsive UI with smooth transitions and event-driven controls for seamless playback and playlist management.",
    image: projectImg2,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://musicplayer-maet.onrender.com",
    code: "https://github.com/surajisacoder/MusicPlayer",
  },

  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website where I showcase my projects, skills, and experience with smooth animations.",
    image: projectImg3,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "https://suraj-kumar--portfolio.vercel.app/",
    code: "https://github.com/surajisacoder/portfolio",
  },

  // {
  //   title: "Chat App",
  //   description:
  //     "A real-time chat application with group messaging, emojis, and file sharing.",
  //   image: projectImg5,
  //   tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
  //   icons: [FaReact, FaNodeJs, FaDatabase],
  //   demo: "#",
  //   code: "#",
  // },
];

export const workData = [
  {
    role: "Software Developer",
    company: "Azympto",
    duration: "Feb 2025 - Present",
    description:
      "Developed scalable full-stack web applications for real-world production use, built reusable React components and responsive user interfaces to improve consistency and user experience, designed and integrated RESTful APIs with MongoDB and DynamoDB for efficient data management, and collaborated with cross-functional teams to deliver optimized, production-ready features.",
    color: "purple",
  },
  {
    role: "Software Developer",
    company: "YUHIRO",
    duration: "May 2025 - Jan 2026",
    description:
      "Working on full-stack features using React and Node.js/Express, managing PostgreSQL with Docker for smooth services, writing clean reusable code with Git for teamwork, and using Linux/VMs for development and testing.",
    color: "purple",
  },

  {
    role: "Teaching Assistant",
    company: "CODING NINJAS",
    duration: "July 2024 - October 2024",
    description:
      "Mentored 50+ students in MERN stack and DSA/C++, solved 100+ coding doubts through quick debugging, and earned a 4.5/5 mentor rating for clear concept explanations.",
    color: "blue",
  },
  {
    role: "Web Developer Intern",
    company: "IIT ROORKEE",
    duration: "June 2024 - July 2024",
    description:
      "Built and deployed a Tribal Service Platform using React, Node.js/Express, Firebase, and MongoDB for 500+ tribal users, adding real-time location-based services and optimizing it for fast, responsive performance across all devices.",
    color: "pink",
  },
];
