"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveLink: string;
  repoLink?: string;
  color: string;
}

interface ProjectModalProps {
  selectedProject: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ selectedProject, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {selectedProject && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-[#171717] border border-zinc-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8 pointer-events-auto shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors text-white"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <span className={`text-sm font-medium ${selectedProject.color} bg-clip-text text-transparent`}>
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-bold text-white mt-2">{selectedProject.title}</h2>
              </div>

              <div className="space-y-6 text-zinc-300">
                <p className="text-lg leading-relaxed">{selectedProject.description}</p>
                
                <div>
                  <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-full text-sm text-zinc-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-zinc-800">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  {selectedProject.repoLink && (
                    <a
                      href={selectedProject.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}