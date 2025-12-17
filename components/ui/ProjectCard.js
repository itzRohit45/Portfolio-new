"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { useState, useEffect, useRef } from "react";

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  const handleFlip = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newFlippedState = !isFlipped;
    setIsFlipped(newFlippedState);
    console.log("Card flipped:", newFlippedState, "Title:", title);

    // Add a small delay to log the DOM state after the state change
    setTimeout(() => {
      if (cardRef.current) {
        console.log("Card element classes:", cardRef.current.className);
        const inner = cardRef.current.querySelector(`.${styles.cardInner}`);
        if (inner) {
          console.log("Inner element classes:", inner.className);
        }
      }
    }, 100);
  };

  // Add keyboard event listener to close card with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isFlipped) {
        setIsFlipped(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFlipped]);

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={!isFlipped ? { y: -10, scale: 1.02 } : {}}
      key={title}
      ref={cardRef}
    >
      <div
        className={`${styles.cardInner} ${isFlipped ? styles.flipped : ""}`}
        onClick={!isFlipped ? handleFlip : undefined}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleFlip(e);
          }
        }}
        role="button"
        aria-pressed={isFlipped}
      >
        <div className={styles.cardFront}>
          <div className={styles.imageContainer}>
            <Image
              src={image || "/images/project-placeholder.jpg"}
              alt={title}
              className={styles.image}
              width={500}
              height={300}
            />
            <div className={styles.overlay}>
              <button className={styles.flipButton} onClick={handleFlip}>
                View Details
              </button>
            </div>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.tags}>
              {tags &&
                tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className={styles.cardBack} onClick={(e) => e.stopPropagation()}>
          <button
            className={styles.closeButton}
            onClick={(e) => {
              e.stopPropagation();
              handleFlip(e);
            }}
            aria-label="Close details"
          >
            &times;
          </button>
          <h3 className={`${styles.title} ${styles.backTitle}`}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.links}>
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub /> Code
              </motion.a>
            )}
            {demo && (
              <motion.a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            )}
          </div>
          <div className={styles.tags}>
            {tags &&
              tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
