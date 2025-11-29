"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setFormStatus("success");
    }
  }

  if (formStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-green-500 mb-4">
          <CheckCircle size={64} />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-zinc-400">I will get back to you within 2 hours.</p>
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 px-4 bg-background border-t border-zinc-900">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Let's build something great</h2>
          <p className="text-zinc-400">Tell me about your project.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Name</label>
              <input name="name" required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Email</label>
              <input name="email" type="email" required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="you@example.com" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Project Budget</label>
            <select name="budget" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors">
              <option value="< $500">&lt; $500 (Small Fixes)</option>
              <option value="$500 - $1k">$500 - $1k (MVP)</option>
              <option value="$1k - $5k">$1k - $5k (Full App)</option>
              <option value="> $5k">&gt; $5k (Enterprise)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Message</label>
            <textarea name="message" required rows={4} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="I need a Next.js dashboard..." />
          </div>

          <button
            disabled={formStatus === "submitting"}
            type="submit"
            className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            {formStatus === "submitting" ? (
              <>
                <Loader2 className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send size={20} /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}