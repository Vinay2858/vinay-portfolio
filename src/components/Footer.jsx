import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-slate-600 dark:text-slate-300">
      © {new Date().getFullYear()} Vinay Maidham — Built with React + Tailwind +
      Framer Motion
    </footer>
  );
}
