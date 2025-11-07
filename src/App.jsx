import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

export default function App() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Simple preloader delay (simulates load animation)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="font-sans antialiased min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      {/* Preloader */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* Navbar with dark/light toggle and scroll progress */}
      <Navbar dark={dark} setDark={setDark} />

      {/* Main content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Email Button */}
      <a
        href="mailto:maidhamvinay@gmail.com"
        className="fixed right-6 bottom-6 bg-accent text-white p-3 rounded-full shadow-xl 
                   hover:scale-105 transition transform"
        aria-label="Quick contact"
      >
        ✉️
      </a>
    </div>
  );
}
