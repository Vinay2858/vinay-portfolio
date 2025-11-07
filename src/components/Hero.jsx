import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import useParallax from "../hooks/useParallax";
const roles = [
  "Frontend Developer",
  "React.js Enthusiast",
  "Java Developer",
  "Problem Solver",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [cursor, setCursor] = useState(true);
  const blobRef = useRef(null);

  useParallax(blobRef, 22);

  // Robust typing (single timer pattern)
  useEffect(() => {
    let mounted = true;
    let i = 0;
    let forward = true;
    function run() {
      if (!mounted) return;
      const word = roles[index];
      if (forward) {
        if (i <= word.length) {
          setSub(word.slice(0, i));
          i++;
          setTimeout(run, 140);
        } else {
          forward = false;
          setTimeout(run, 1000);
        }
      } else {
        if (i >= 0) {
          setSub(word.slice(0, i));
          i--;
          setTimeout(run, 70);
        } else {
          forward = true;
          setIndex((v) => (v + 1) % roles.length);
          setTimeout(run, 300);
        }
      }
    }
    run();
    const blink = setInterval(() => setCursor((c) => !c), 600);
    return () => {
      mounted = false;
      clearInterval(blink);
    };
  }, [index]);

  // split-word helper
  const heading = "Designing delightful web experiences";
  const words = heading.split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          ref={blobRef}
          className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-accent to-accentDark opacity-28 filter blur-3xl left-[-8%] top-[-12%] transform transition-transform will-change-transform pointer-events-none"
        />
        <div className="absolute right-[-6%] bottom-[-6%] w-[340px] h-[340px] rounded-full bg-gradient-to-br from-purple-300 to-pink-300 opacity-18 blur-2xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="text-sm uppercase tracking-wide text-slate-500">
              Hello — I’m Vinay
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-xl">
              {words.map((w, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block mr-2 overflow-hidden"
                >
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.6, delay: idx * 0.06 }}
                    className="block"
                  >
                    {w}
                  </motion.span>
                </motion.span>
              ))}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              Software Engineer at TCS. I build reliable front-ends & delightful
              interactions — with a focus on performance and accessibility.
            </p>

            <div className="mt-3 text-2xl font-semibold text-gray-800 dark:text-gray-200">
              I am a{" "}
              <span className="text-accent">
                {sub}
                <span>{cursor ? "|" : " "}</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-64 md:w-72 rounded-xl overflow-hidden shadow-2xl ring-4 ring-accent/20 transform transition-transform hover:scale-105">
              <img
                src="/vinay-portfolio/profile.jpg"
                alt="Vinay Maidham"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Quick Links card overlay (small screens: stacked) */}
            <div className="ml-6 hidden md:flex flex-col items-start gap-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md p-6 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                Quick Links
              </h3>
              <a
                href="/vinay-portfolio/Maidham_Vinay_Resume.pdf"
                download
                className="btn-primary interactive w-48 text-center"
              >
                📄 Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/vinaymaidham/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline interactive w-48 text-center"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/Vinay207/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline interactive w-48 text-center"
              >
                🧩 LeetCode
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/maidhamtv59/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline interactive w-48 text-center"
              >
                💚 GfG
              </a>
            </div>
          </motion.div>

          {/* mobile quicklinks below hero (visible on small screens) */}
          <div className="md:hidden mt-6 flex gap-3 justify-center w-full">
            <a
              href="/vinay-portfolio/Maidham_Vinay_Resume.pdf"
              download
              className="btn-primary interactive px-4 py-2 rounded-md"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/vinaymaidham/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline interactive px-4 py-2 rounded-md"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
