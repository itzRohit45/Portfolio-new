"use client";

import { motion } from "framer-motion";
import { FaCheck, FaStar } from "react-icons/fa";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Landing Page",
      price: "$100-250",
      duration: "1-2 weeks",
      description: "Perfect for personal brands and simple business presence",
      features: [
        "Responsive Design",
        "Up to 5 Sections",
        "Contact Form",
        "SEO Optimization",
        "2 Revisions",
        "Mobile Optimization",
      ],
      popular: false,
    },
    {
      name: "Business Website",
      price: "$120-300",
      duration: "2-3 weeks",
      description: "Ideal for small to medium businesses",
      features: [
        "Everything in Landing Page",
        "Up to 10 Pages",
        "CMS Integration",
        "Blog Setup",
        "Advanced SEO",
        "Analytics Integration",
        "5 Revisions",
        "3 Months Support",
      ],
      popular: true,
    },
    {
      name: "E-Commerce",
      price: "$300-400",
      duration: "4-6 weeks",
      description: "Complete online store solution",
      features: [
        "Everything in Business",
        "Product Management",
        "Shopping Cart",
        "Payment Gateway",
        "Order Management",
        "Inventory System",
        "Customer Accounts",
        "Unlimited Revisions",
        "6 Months Support",
      ],
      popular: false,
    },
    {
      name: "Custom Solution",
      price: "Custom",
      duration: "Varies",
      description: "Tailored to your specific needs",
      features: [
        "Custom Features",
        "Advanced Functionality",
        "Third-party Integrations",
        "API Development",
        "Database Design",
        "Scalable Architecture",
        "Dedicated Support",
        "Maintenance Package",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Pricing Plans</h2>
          <p className={styles.subtitle}>
            Choose the perfect plan for your project
          </p>
        </motion.div>

        <div className={styles.grid}>
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className={styles.badge}>
                  <FaStar /> Most Popular
                </div>
              )}
              
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.price}>{plan.price}</span>
                {plan.price !== "Custom" && <span className={styles.currency}></span>}
              </div>
              <p className={styles.duration}>Timeline: {plan.duration}</p>
              <p className={styles.description}>{plan.description}</p>

              <ul className={styles.features}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheck className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={styles.btn}>Get Started</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
