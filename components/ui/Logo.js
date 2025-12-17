"use client";

import { motion } from "framer-motion";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <motion.div 
      className={styles.logo}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className={styles.iconWrapper}>
        <svg
          className={styles.icon}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Film reel design */}
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="25" cy="25" r="12" fill="url(#gradient)" opacity="0.3" />
          
          {/* Film strip holes */}
          <circle cx="25" cy="10" r="2" fill="url(#gradient)" />
          <circle cx="40" cy="25" r="2" fill="url(#gradient)" />
          <circle cx="25" cy="40" r="2" fill="url(#gradient)" />
          <circle cx="10" cy="25" r="2" fill="url(#gradient)" />
          
          {/* Play button */}
          <path
            d="M22 18 L32 25 L22 32 Z"
            fill="url(#gradient)"
          />
          
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.text}>cinevibe</span>
        <span className={styles.domain}>.web</span>
      </div>
    </motion.div>
  );
}
