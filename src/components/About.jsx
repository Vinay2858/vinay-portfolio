import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-accent mb-4">About Me</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed glass p-6">
          Motivated and detail-oriented Software Engineer with a solid
          foundation in Java. Currently working as an Assistant System Engineer
          at Tata Consultancy Services (TCS), supporting and developing
          applications, including dynamic footer generation for Mars
          applications (expert & standard modes). Experienced in end-to-end
          application support, incident tracking using ServiceNow, and
          collaborating with cross-functional teams.
        </p>
      </div>
    </motion.section>
  );
}
