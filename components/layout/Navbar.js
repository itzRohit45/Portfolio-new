"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/utils/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import Logo from "@/components/ui/Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation items
  const navItems = useMemo(
    () => [
      { name: "Home", link: "#home" },
      { name: "About", link: "#about" },
      { name: "Projects", link: "#projects" },
      { name: "Pricing", link: "#pricing" },
      { name: "Contact", link: "#contact" },
    ],
    []
  );

  // Handle scroll event for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Determine active section based on scroll position
    const handleActiveSection = () => {
      const sections = navItems.map((item) => item.name.toLowerCase());

      const scrollPositions = sections.map((section) => {
        const element = document.getElementById(section);
        if (!element) return { section, top: 0 };
        return {
          section,
          top: element.offsetTop - 100, // Offset for navbar height
        };
      });

      const currentPosition = window.scrollY;

      for (let i = scrollPositions.length - 1; i >= 0; i--) {
        if (currentPosition >= scrollPositions[i].top) {
          setActiveSection(scrollPositions[i].section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveSection);
    };

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, [navItems]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo}>
          <Logo />
        </Link>

        <div className={styles.menuToggle} onClick={toggleMenu}>
          <div
            className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ""}`}>
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              className={styles.navItem}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.link}
                className={`${styles.navLink} ${
                  activeSection === item.name.toLowerCase() ? styles.active : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
          <motion.li
            className={styles.navItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
}
