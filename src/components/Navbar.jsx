import React from "react";
import { FiMail } from "react-icons/fi";

export default function Navbar({ dark, setDark }) {
  return (
    <header className="fixed w-full z-40">
      <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur sticky top-0">
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
            <a href="#home" className="hover:text-accent transition">
              Home
            </a>
            <a href="#about" className="hover:text-accent transition">
              About
            </a>
            <a href="#experience" className="hover:text-accent transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-accent transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-accent transition">
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-accent transition flex items-center gap-2"
            >
              <FiMail /> Contact
            </a>
            <button
              onClick={() => setDark(!dark)}
              className="ml-2 p-2 rounded-md bg-white/30 dark:bg-slate-800/30"
            >
              {dark ? "☀️" : "🌙"}
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-md bg-white/30 dark:bg-slate-800/30"
            >
              {dark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
