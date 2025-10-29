import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Frontend Developer",
  "Java Developer",
  "Problem Solver",
  "React.js Enthusiast",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [cursor, setCursor] = useState(true);

  // Typing effect – slowed down
  useEffect(() => {
    let i = 0;
    let forward = true;
    const type = () => {
      const word = roles[index];
      if (forward) {
        if (i <= word.length) {
          setSub(word.slice(0, i));
          i++;
          setTimeout(type, 180); // slower typing
        } else {
          forward = false;
          setTimeout(type, 1300);
        }
      } else {
        if (i >= 0) {
          setSub(word.slice(0, i));
          i--;
          setTimeout(type, 90); // slower erase
        } else {
          forward = true;
          setIndex((v) => (v + 1) % roles.length);
          setTimeout(type, 300);
        }
      }
    };
    type();
    const blink = setInterval(() => setCursor((c) => !c), 600);
    return () => clearInterval(blink);
  }, [index]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex justify-center items-center overflow-hidden bg-gradient-to-b from-blue-100 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-1000"
    >
      {/* Floating pastel blobs for light mode */}
      <div className="absolute w-[500px] h-[500px] bg-blue-300/40 blur-3xl rounded-full -top-40 -left-20 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-300/30 blur-3xl rounded-full bottom-0 right-0 animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 p-6 md:p-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <img
            src="/vinay-portfolio/profile.jpg"
            alt="Vinay Maidham"
            className="w-56 h-56 rounded-full shadow-2xl ring-4 ring-blue-400 object-cover"
          />

          <h1 className="text-5xl font-bold mt-6 text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-300">
              Vinay Maidham
            </span>
          </h1>

          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Software Engineer @ <b>TCS</b>
          </p>

          <div className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
            I am a{" "}
            <span className="text-accent">
              {sub}
              <span>{cursor ? "|" : " "}</span>
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/vinay-portfolio/Maidham_Vinay_Resume.pdf"
              download
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/vinaymaidham/"
              target="_blank"
              className="border border-blue-500 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/Vinay207/"
              target="_blank"
              className="border border-orange-400 text-orange-500 px-5 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
            >
              LeetCode
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/maidhamtv59/"
              target="_blank"
              className="border border-green-500 text-green-600 px-5 py-2 rounded-lg hover:bg-green-500 hover:text-white transition"
            >
              GFG
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
