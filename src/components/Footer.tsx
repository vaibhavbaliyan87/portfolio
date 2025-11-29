export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-900 bg-black text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-6 text-zinc-400">
          <a 
            href="https://github.com/vaibhavbaliyan87" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/vaibhav-kumar-baliyan-495b7635a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Vaibhav Baliyan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}