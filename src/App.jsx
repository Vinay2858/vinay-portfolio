import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css"; // ensure tailwind directives are present here

gsap.registerPlugin(ScrollTrigger);

const siteData = {
  name: "Vinay Maidham",
  location: "Telangana, India",
  phone: "+91 9963470058",
  email: "maidhamvinay@gmail.com",
  linkedIn: "https://www.linkedin.com/in/vinaymaidham/",
  resume: "/Maidham_Vinay_Resume.pdf",
  summary: `Motivated and detail-oriented Software Engineer with a solid foundation in Java. Currently
working as an Assistant System Engineer at Tata Consultancy Services (TCS), where I
support and develop applications, including handling dynamic footer generation for Mars
applications in both expert and standard modes. Experienced in end-to-end application
support, resolving critical issues, and collaborating with cross-functional teams to deliver
high-quality solutions. Proficient in ServiceNow for incident tracking and monitoring.
Passionate about continuous learning, problem-solving, and contributing to impactful
software development projects. Currently enhancing Data Structures & Algorithms (DSA)
skills, having solved 250+ coding problems.`,
};

const projects = [
  {
    id: 1,
    title: "Banking Management System",
    tags: ["Java", "JSP", "Servlets", "JDBC"],
    desc: "Full-stack banking application with role-based auth, CRUD operations for customers & accounts, responsive frontend and secure backend.",
  },
  {
    id: 2,
    title: "Footer Application (Mars Client)",
    tags: ["React", ".NET", "UI/UX"],
    desc: "Dynamic footer generation tool to create standardized footers for Mars applications in Standard & Expert modes.",
  },
];

const skills = [
  "React.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "Java",
  "Spring (basic)",
  "JSP & Servlets",
  "JDBC & MySQL",
  "Git",
  "ServiceNow",
  "Problem Solving (DSA)",
];

function usePageAnimations() {
  useEffect(() => {
    gsap.from(".animate-up", {
      y: 30,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".animate-up",
        start: "top 90%",
      },
    });

    // floating blobs
    gsap.to(".blob", {
      y: "+=20",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 3,
    });
  }, []);
}

function Navbar({ toggleTheme, isDark }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const closeOnRoute = () => setOpen(false);
    window.addEventListener("hashchange", closeOnRoute);
    return () => window.removeEventListener("hashchange", closeOnRoute);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md dark:bg-slate-900/70 shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-indigo-600">
          {siteData.name}
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <NavLinks />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-slate-100 dark:bg-slate-800"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-slate-100 dark:bg-slate-800"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md bg-indigo-600 text-white"
          >
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white/90 dark:bg-slate-900/90 py-4">
          <div className="flex flex-col items-center gap-3">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks() {
  return (
    <>
      <Link
        to="/"
        className="text-slate-700 dark:text-slate-200 hover:underline"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-slate-700 dark:text-slate-200 hover:underline"
      >
        About
      </Link>
      <Link
        to="/experience"
        className="text-slate-700 dark:text-slate-200 hover:underline"
      >
        Experience
      </Link>
      <Link
        to="/projects"
        className="text-slate-700 dark:text-slate-200 hover:underline"
      >
        Projects
      </Link>
      <Link
        to="/skills"
        className="text-slate-700 dark:text-slate-200 hover:underline"
      >
        Skills
      </Link>
      <Link
        to="/contact"
        className="text-slate-700 dark:text-slate-200 hover:underline"
      >
        Contact
      </Link>
    </>
  );
}

function PageWrapper({ children }) {
  const loc = useLocation();
  usePageAnimations();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={loc.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.45 }}
        className="pt-20 pb-24"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function Home() {
  useEffect(() => {
    // small hero parallax
    gsap.to(".hero-bg", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: { scrub: 0.6 },
    });
  }, []);

  return (
    <section className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left: hero text */}
        <div className="md:col-span-7 animate-up">
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Hi, I'm <span className="text-indigo-600">{siteData.name}</span>
          </motion.h1>
          <HeroRole />
          <p className="mt-6 text-slate-700 dark:text-slate-200 max-w-2xl">
            {siteData.summary.split("\n").slice(0, 2).join(" ")}
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <a href={siteData.resume} className="btn-primary">
              Download Resume
            </a>
            <a
              href={siteData.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              LinkedIn
            </a>
            <a href={`mailto:${siteData.email}`} className="btn-outline">
              Email Me
            </a>
          </div>

          <div className="mt-8 flex gap-6">
            <Metric label="Experience" value="1+ yrs" />
            <Metric label="DSA Problems" value="250+" />
            <Metric label="Projects" value="5+" />
          </div>
        </div>

        {/* Right: animated portrait + blobs */}
        <div className="md:col-span-5 flex justify-center relative animate-up">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl shadow-2xl overflow-hidden">
            <div className="hero-bg absolute inset-0 bg-gradient-to-br from-indigo-100 to-white dark:from-indigo-900 dark:to-slate-800" />
            <img
              src="/profile.svg"
              alt="Vinay"
              className="relative w-full h-full object-cover"
            />

            {/* floating blobs */}
            <div className="blob absolute -left-10 -top-8 w-28 h-28 rounded-full bg-indigo-300 opacity-40 mix-blend-multiply" />
            <div className="blob absolute -right-8 bottom-0 w-20 h-20 rounded-full bg-amber-300 opacity-30 mix-blend-multiply" />
          </div>
        </div>
      </div>

      {/* subtle wave divider */}
      <div className="w-full mt-12">
        <svg
          viewBox="0 0 1200 60"
          className="w-full h-14 fill-current text-white dark:text-slate-900"
          preserveAspectRatio="none"
        >
          <path d="M0 0 C300 100 900 -40 1200 40 L1200 60 L0 60 Z" />
        </svg>
      </div>
    </section>
  );
}

function HeroRole() {
  const roles = ["Frontend Developer", "Java Developer", "Problem Solver"];
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-4 text-xl md:text-2xl font-medium"
    >
      <span className="inline-block bg-gradient-to-r from-indigo-500 to-rose-500 bg-clip-text text-transparent">
        {roles[i]}
      </span>
    </motion.div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="bg-white/60 dark:bg-slate-800/60 px-4 py-3 rounded-lg shadow-sm">
      <div className="text-xl font-bold text-indigo-600">{value}</div>
      <div className="text-sm text-slate-600 dark:text-slate-300">{label}</div>
    </div>
  );
}

function About() {
  return (
    <section className="container mx-auto px-6 animate-up">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-slate-700 dark:text-slate-200 whitespace-pre-line">
            {siteData.summary}
          </p>
        </div>
        <div className="p-6 rounded-xl bg-white/60 dark:bg-slate-800/60 shadow-lg">
          <h3 className="font-semibold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <strong>Location:</strong> {siteData.location}
            </li>
            <li>
              <strong>Phone:</strong> {siteData.phone}
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${siteData.email}`} className="text-indigo-600">
                {siteData.email}
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href={siteData.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600"
              >
                Profile
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a href={siteData.resume} className="btn-primary">
              Resume
            </a>
            <a href={siteData.linkedIn} className="btn-outline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="container mx-auto px-6 animate-up">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <ExperienceCard />
      </div>
    </section>
  );
}

function ExperienceCard() {
  return (
    <div className="card">
      <h3 className="font-semibold">
        Tata Consultancy Services (TCS) — Assistant System Engineer
      </h3>
      <p className="text-sm text-slate-500">Oct 2024 – Present</p>
      <ul className="mt-3 list-disc ml-5">
        <li>
          Managing Footer Applications for Mars projects, enabling seamless
          generation of dynamic footers in both expert and standard modes.
        </li>
        <li>
          Providing end-to-end application support and resolving user-reported
          tickets within SLAs.
        </li>
        <li>
          Monitoring ServiceNow dashboards and performing server recycle
          activities for stability.
        </li>
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <section className="container mx-auto px-6 animate-up">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            key={p.id}
            className="card"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-200">{p.desc}</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="container mx-auto px-6 animate-up">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((s) => (
          <motion.div
            key={s}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-white/60 dark:bg-slate-800/60 rounded-lg shadow-sm"
          >
            <div className="font-medium text-indigo-600">{s}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then((r) => (r.ok ? setStatus("SUCCESS") : setStatus("ERROR")))
      .catch(() => setStatus("ERROR"));
    form.reset();
  };

  return (
    <section className="container mx-auto px-6 animate-up">
      <h2 className="text-3xl font-bold">Contact</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-white/60 dark:bg-slate-800/60 shadow-lg">
          <h3 className="font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            I’m open to opportunities — feel free to message me.
          </p>

          <ul className="mt-4 text-sm space-y-2">
            <li>
              <strong>Phone:</strong> {siteData.phone}
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${siteData.email}`} className="text-indigo-600">
                {siteData.email}
              </a>
            </li>
          </ul>
        </div>

        <form
          action="https://formspree.io/f/movknleo"
          method="POST"
          onSubmit={onSubmit}
          className="flex flex-col gap-3"
        >
          <input
            name="name"
            required
            placeholder="Your Name"
            className="input"
          />
          <input
            name="_replyto"
            type="email"
            required
            placeholder="Your Email"
            className="input"
          />
          <textarea
            name="message"
            rows="6"
            required
            placeholder="Your Message"
            className="input"
          />
          <button type="submit" className="btn-primary">
            Send Message
          </button>
          {status === "SUCCESS" && (
            <div className="text-green-600">Message sent ✅</div>
          )}
          {status === "ERROR" && (
            <div className="text-red-600">Error sending message ❌</div>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 py-8 bg-gradient-to-r from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          © {new Date().getFullYear()} {siteData.name} • Built with React +
          Tailwind
        </p>
        <div className="mt-4 text-xs text-slate-500">
          Designed for animation & performance • Reach out:{" "}
          <a href={`mailto:${siteData.email}`} className="text-indigo-600">
            {siteData.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 transition-colors">
        <Navbar toggleTheme={() => setIsDark((v) => !v)} isDark={isDark} />

        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageWrapper>

        <Footer />

        {/* floating quick contact */}
        <a
          href={`mailto:${siteData.email}`}
          className="fixed right-6 bottom-6 bg-indigo-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transform transition"
        >
          ✉️
        </a>
      </div>
    </Router>
  );
}
