"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal, { Project } from "./ProjectModal";
import { ArrowUpRight } from "lucide-react";

const projects: Project[] = [
  {
    id: "studyshare",
    title: "StudyShare",
    category: "Academic Social Platform",
    description: "Built a distraction-free, academic-only environment for college students. The core challenge was implementing strict tenant isolation—ensuring students can only interact within their specific Verified College domain. I architected a Role-Based Access Control (RBAC) system using Clerk and Prisma, and solved the 'spam' problem by restricting all solutions to image-only uploads via Cloudinary, eliminating toxic text threads.",
    techStack: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Cloudinary"],
    liveLink: "https://studyshare-theta.vercel.app/",
    repoLink: "https://github.com/vaibhavbaliyan87/StudyShare", 
    color: "bg-gradient-to-r from-blue-400 to-cyan-400",
  },
  {
    id: "peerfinder",
    title: "Adventure PeerFinder",
    category: "Real-time Geolocation App",
    description: "A location-based social discovery tool for travelers and adventurers. I engineered a geospatial querying engine that filters users based on precise radius (e.g., 'Find hikers within 5km'). The app features real-time status updates and a dynamic map interface, solving the problem of finding reliable travel companions safely without using dating-app algorithms.",
    techStack: ["Next.js", "Tailwind CSS", "Railway", "PostgreSQL (PostGIS)", "Leaflet Maps"],
    liveLink: "https://adventure-peer-finder.up.railway.app/",
    repoLink: "https://github.com/vaibhavbaliyan87/Adventure-Peer-Finder",
    color: "bg-gradient-to-r from-orange-400 to-red-500",
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Selected Work</h2>
          <p className="text-zinc-400">Real-world applications, shipped to production.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          <motion.div
            layoutId="studyshare"
            onClick={() => setSelectedProject(projects[0])}
            className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 cursor-pointer hover:border-zinc-700 transition-colors"
          >
            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/30 transition-colors" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full z-10 bg-gradient-to-t from-black/90 to-transparent">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-blue-400 font-medium mb-2 block">Academic Platform</span>
                  <h3 className="text-3xl font-bold text-white">StudyShare</h3>
                </div>
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            layoutId="peerfinder"
            onClick={() => setSelectedProject(projects[1])}
            className="md:col-span-1 relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 cursor-pointer hover:border-zinc-700 transition-colors"
          >
            <div className="absolute inset-0 bg-orange-900/20 group-hover:bg-orange-900/30 transition-colors" />

            <div className="absolute bottom-0 left-0 p-8 w-full z-10 bg-gradient-to-t from-black/90 to-transparent">
              <span className="text-orange-400 font-medium mb-2 block">Geolocation</span>
              <h3 className="text-2xl font-bold text-white">PeerFinder</h3>
            </div>
          </motion.div>

        </div>
      </div>

      <ProjectModal selectedProject={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}