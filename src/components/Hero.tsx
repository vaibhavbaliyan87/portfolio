"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Building Scalable{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            SaaS MVPs
          </span>{" "}
          for Startups.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto"
        >
          I turn complex ideas into shipped products. Developer of{" "}
          <span className="text-zinc-100 font-semibold">StudyShare</span> &{" "}
          <span className="text-zinc-100 font-semibold">Adventure PeerFinder</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#work"
            className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-all active:scale-95"
          >
            View My Work
          </a>
          <a
            href="mailto:your-email@example.com"
            className="px-8 py-4 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-900 transition-all active:scale-95"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}