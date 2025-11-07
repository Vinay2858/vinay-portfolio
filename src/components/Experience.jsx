import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services (TCS)",
    period: "Oct 2024 – Present",
    desc: [
      "Managing Footer Applications for Mars projects (Expert & Standard).",
      "Providing end-to-end application support and resolving tickets.",
      "Monitoring ServiceNow dashboards and performing maintenance.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-accent mb-6">Experience</h2>
        <div className="space-y-6">
          {items.map((it, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="glass p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">
                    {it.role} —{" "}
                    <span className="text-slate-500 text-sm">{it.company}</span>
                  </h3>
                  <p className="text-sm text-slate-400">{it.period}</p>
                </div>
              </div>
              <ul className="mt-3 list-disc ml-6 space-y-1">
                {it.desc.map((d, i) => (
                  <li key={i} className="text-slate-700 dark:text-slate-300">
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
