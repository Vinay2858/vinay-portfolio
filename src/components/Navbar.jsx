import React, { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / (total || 1)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-40 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-white/60 dark:bg-slate-900/60 shadow-sm"
          : "bg-white/40 dark:bg-transparent"
      }`}
    >
      <div
        style={{ height: 3, width: `${progress}%` }}
        className="bg-accent h-0.5 fixed top-0 left-0 z-50 transition-width"
      />
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/vinay-portfolio/profile.jpg"
            alt="logo"
            className="w-10 h-10 rounded-full ring-2 ring-accent"
          />
          <div>
            <div className="font-semibold text-lg text-accent">
              Vinay Maidham
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-300">
              Assistant System Engineer • TCS
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-accent transition interactive">
            Home
          </a>
          <a href="#about" className="hover:text-accent transition interactive">
            About
          </a>
          <a
            href="#experience"
            className="hover:text-accent transition interactive"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-accent transition interactive"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-accent transition interactive"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-accent transition flex items-center gap-2 interactive"
          >
            <FiMail /> Contact
          </a>
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 p-2 rounded-md bg-white/30 dark:bg-slate-800/30 interactive"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-md bg-white/30 dark:bg-slate-800/30 interactive"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}
