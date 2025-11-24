import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { RESUME_DATA } from '../data/constants.js';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border mt-20 font-mono text-center">
      
      <div className="flex justify-center items-center gap-6 mb-8">
        
        <a
          href={RESUME_DATA.githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-border bg-surface text-slate-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all rounded-lg group"
          aria-label="GitHub"
        >
          <Github size={24} className="group-hover:scale-110 transition-transform" />
        </a>

        <a
          href={RESUME_DATA.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-border bg-surface text-slate-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all rounded-lg group"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
        </a>

      </div>

      <p className="text-xs text-secondary">
        &copy; {new Date().getFullYear()} Sai Mukesh Cheekatla.{' '}
        <span className="text-primary">System All Green.</span>
      </p>

    </footer>
  );
};

export default Footer;
