import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Banking Management System",
    tags: ["Java", "JSP", "Servlets", "JDBC"],
    desc: "Full-stack banking application with secure login and CRUD features.",
  },
  {
    title: "Footer Application (Mars Client)",
    tags: ["React", ".NET", "UI"],
    desc: "Dynamic footer generator used across Mars apps (Standard & Expert).",
  },
];

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-accent mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} onOpen={(proj) => setOpen(proj)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex items-center justify-center p-6 bg-black/50"
          >
            <motion.div
              layoutId={open.title}
              className="bg-white dark:bg-slate-900 rounded-xl max-w-3xl w-full p-6 glass"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">{open.title}</h3>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {open.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  className="text-slate-600 dark:text-slate-300"
                >
                  Close
                </button>
              </div>
              <p className="mt-4 text-slate-700 dark:text-slate-300">
                {open.desc}
              </p>
              {/* Add images or detailed content here */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
