"use client";

import { motion } from "framer-motion";
import { Rocket, Database, Layout, Code2, Server, Globe, Lock, Cpu } from "lucide-react";

const stack = [
  { name: "Next.js 14", icon: <Code2 size={20} /> },
  { name: "React", icon: <Globe size={20} /> },
  { name: "TypeScript", icon: <Code2 size={20} /> },
  { name: "PostgreSQL", icon: <Database size={20} /> },
  { name: "Tailwind CSS", icon: <Layout size={20} /> },
  { name: "Clerk Auth", icon: <Lock size={20} /> },
  { name: "Prisma ORM", icon: <Server size={20} /> },
  { name: "Node.js", icon: <Cpu size={20} /> },
];

const services = [
  {
    title: "Rapid MVP Development",
    description: "I take your startup idea and deploy a fully functional Minimum Viable Product in 7 days. No bloat, just the core features you need to launch.",
    icon: <Rocket className="text-purple-400" size={32} />,
  },
  {
    title: "Scalable Backend Systems",
    description: "Secure authentication, complex database schema design, and API optimization. I build backends that can handle growth without breaking.",
    icon: <Database className="text-blue-400" size={32} />,
  },
  {
    title: "Pixel-Perfect Implementation",
    description: "I convert Figma designs into responsive, interactive code. Using Tailwind and Framer Motion, I ensure your app feels expensive and smooth.",
    icon: <Layout className="text-pink-400" size={32} />,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-background border-t border-zinc-900 overflow-hidden">
      <div className="mb-24 relative">
        <div className="text-center mb-8">
          <p className="text-zinc-500 text-sm uppercase tracking-widest">Powering apps with modern tech</p>
        </div>
        
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 px-12 whitespace-nowrap"
          >
            {[...stack, ...stack].map((tech, index) => (
              <div key={index} className="flex items-center gap-2 text-zinc-400 font-medium text-lg">
                {tech.icon}
                {tech.name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-900/50 hover:border-zinc-700 transition-all group"
            >
              <div className="mb-6 p-4 bg-zinc-950 rounded-full w-fit border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}