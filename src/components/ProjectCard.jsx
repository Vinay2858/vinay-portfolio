import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onOpen }) {
  const root = useRef(null);

  const handleMove = (e) => {
    const el = root.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(
      2
    )}deg) rotateY(${(x * 8).toFixed(2)}deg) translateZ(0)`;
  };
  const handleLeave = () => (root.current.style.transform = "none");

  return (
    <motion.article
      ref={root}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(2,6,23,0.12)" }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className="glass p-6 rounded-xl cursor-pointer"
    >
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {project.desc}
      </p>
      <div className="mt-4 flex gap-2 flex-wrap">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
