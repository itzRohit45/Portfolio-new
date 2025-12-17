"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SkillBar from "@/components/ui/SkillBar";
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "./About.module.css";

export default function About() {
  // Sample skills list
  const skills = [
    { name: "C/C++", percentage: 90 },
    { name: "Python", percentage: 60 },
    { name: "React.js", percentage: 90 },
    { name: "Node.js/Express.js", percentage: 85 },
    { name: "JavaScript", percentage: 92 },
    { name: "HTML & CSS", percentage: 95 },
    { name: "Next.js", percentage: 50 },
  ];

  // Core competencies icons
  const competencies = [
    {
      icon: <FaReact />,
      title: "Frontend",
      text: "Modern UI with React, Next.js, and CSS-in-JS libraries",
    },
    {
      icon: <FaNodeJs />,
      title: "Backend",
      text: "RESTful APIs and GraphQL with Node.js, Express",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      text: "SQL and NoSQL databases with efficient data modeling",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive",
      text: "Mobile-first approach with responsive design patterns",
    },
  ];

  // Stats for showcase
  const stats = [
    { number: "1.5+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "90%", label: "Client Satisfaction" },
    { number: "10+", label: "Technologies" },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Bio Section - Full Width */}
        <motion.div
          className={styles.bioSection}
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className={styles.subtitle}>Who Am I?</h3>
          <p className={styles.bio}>
            Hi! I'm a <span className={styles.highlight}>Full Stack Developer</span> passionate about crafting beautiful, 
            functional web experiences. With <span className={styles.highlight}>1.5+ years</span> of hands-on experience, 
            I specialize in building scalable applications that solve real-world problems using modern technologies.
          </p>
          <p className={styles.bio}>
            Currently pursuing <b>B.Tech in Computer Science (AI Specialization)</b> at{" "}
            <b>IIIT Kancheepuram</b>. I combine academic AI/ML knowledge with practical development skills to create intelligent, user-centric solutions.
          </p>
        </motion.div>

        {/* Image and Skills Section - Side by Side */}
        <div className={styles.content}>
          <motion.div
            className={styles.imageWrapper}
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.imageContainer}>
              <Image
                src="/images/profile.jpeg"
                alt="Your Name - Profile Picture"
                width={350}
                height={400}
                className={styles.profileImage}
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.skillsWrapper}
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className={styles.subtitle}>Technical Skills</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className={styles.stats}
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statItem}
              variants={fadeIn("up", index * 0.1)}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className={styles.statNumber}>{stat.number}</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.competencies}
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {competencies.map((item, index) => (
            <motion.div
              key={index}
              className={styles.competencyItem}
              variants={fadeIn("up", index * 0.1)}
              whileHover={{ y: -10 }}
            >
              <div className={styles.competencyIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
