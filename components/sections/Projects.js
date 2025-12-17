"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { staggerContainer } from "@/utils/motion";
import styles from "./Projects.module.css";

export default function Projects() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "ConnectX",
      description:
        "A social media platform that allows users to connect, share content, and engage with friends and communities through posts, comments,and chats.",
      image: "/images/project1.png",
      tags: ["Next.js", "Express.js", "MongoDB", "Redux"],
      github: "https://github.com/itzRohit45/ConnectX",
      demo: "https://connect-x-ebon.vercel.app/",
    },
    {
      id: 2,
      title: "AttendX",
      description:
        "A Smart Attendance Management System that automates attendance tracking using time and location sensitive QR codes and provides real-time analytics for educational institutions.",
      image: "/images/attend.png",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/itzRohit45/qrcheck",
      demo: "https://attendx-4d61.onrender.com",
    },
    {
      id: 3,
      title: "Recipe Management App",
      description:
        "A Console-based application that allows users to manage recipes, including adding, editing, deleting, and searching for recipes.",
      image: "/images/project3.jpeg",
      tags: ["C++"],
      github: "https://github.com/itzRohit45/Recipe-App",
      demo: "https://github.com/itzRohit45/Recipe-App",
    },
    {
      id: 4,
      title: "Wanderlust",
      description:
        "A Booking and Travel Management System that allows users to search for destinations, book hotels and scenries, and manage their travel itineraries.",
      image: "/images/project4.jpg.webp",
      tags: ["HTML", "CSS", "EJS", "Material UI", "Bootstrap"],
      github: "https://github.com/itzRohit45/Wanderlust",
      demo: "https://wanderlust-45p8.onrender.com/listings",
    },
    {
      id: 5,
      title: "Mancala Game",
      description:
        "Mancala is a traditional African board game involving strategy and seed sowing. The objective is to capture more seeds than your opponent.",
      image: "/images/project5.jpeg",
      tags: ["Python"],
      github: "https://github.com/itzRohit45/Mancala_game",
      demo: "https://github.com/itzRohit45/Mancala_game",
    },
    {
      id: 6,
      title: "Weather App",
      description:
        "A weather application that provides real-time weather information for any location using a public weather API.",
      image: "/images/project7.png",
      tags: ["React", "Material UI", "Weather API"],
      github: "https://github.com/itzRohit45/Weather-App",
      demo: "https://github.com/itzRohit45/Weather-App",
    },
  ];

  // Filter states
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "react", name: "React" },
    { id: "next", name: "Next.js" },
    { id: "node", name: "Node.js" },
    { id: "fullstack", name: "Full Stack" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "react")
      return project.tags.some((tag) => tag.toLowerCase().includes("react"));
    if (filter === "next")
      return project.tags.some((tag) => tag.toLowerCase().includes("next"));
    if (filter === "node")
      return project.tags.some((tag) => tag.toLowerCase().includes("node"));
    if (filter === "fullstack") {
      return project.tags.some(
        (tag) =>
          tag.toLowerCase().includes("react") ||
          tag.toLowerCase().includes("next") ||
          tag.toLowerCase().includes("node")
      );
    }
    return true;
  });

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.filterButton} ${
                filter === category.id ? styles.active : ""
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className={styles.projectGrid}
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {filteredProjects.map((project) => (
            <div className={styles.projectItem} key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                github={project.github}
                demo={project.demo}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
