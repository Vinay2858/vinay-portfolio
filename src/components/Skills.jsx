import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "HTML5",
  "CSS3",
  "Tailwind",
  "JavaScript",
  "Java",
  "Spring",
  "JSP",
  "Servlets",
  "JDBC",
  "MySQL",
  "Git",
  "ServiceNow",
  "DSA",
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-accent mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((s) => (
            <motion.div
              key={s}
              whileHover={{ scale: 1.08 }}
              className="p-4 bg-white/70 dark:bg-slate-700 rounded-md text-center shadow-sm"
            >
              <div className="font-medium text-slate-900 dark:text-white">
                {s}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
