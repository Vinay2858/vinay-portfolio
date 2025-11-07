import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(() => onFinish?.(), 900);
    return () => clearTimeout(t);
  }, [onFinish]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };
  const item = { hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 } };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.45 } }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-white dark:bg-slate-900"
        aria-hidden
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex gap-3"
        >
          <motion.div
            variants={item}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accentDark shadow-xl"
          />
          <motion.div
            variants={item}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accentDark/80 shadow-lg"
          />
          <motion.div
            variants={item}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/80 to-accentDark/60 shadow-md"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
