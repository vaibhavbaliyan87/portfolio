"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md bg-black/50 border-b border-white/5"
    >
      <a href="#" className="text-xl font-bold tracking-tighter text-white">
        Vaibhav Kumar Baliyan<span className="text-purple-500">.</span>
      </a>

      <a
        href="#contact"
        className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-zinc-200 transition-colors"
      >
        Hire Me
      </a>
    </motion.nav>
  );
}