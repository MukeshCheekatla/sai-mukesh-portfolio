import React from 'react';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';
import { RESUME_DATA } from '../data/constants.js';

const Hero = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    try {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);

      if (element) {
        const windowHeight = window.innerHeight;
        const elementHeight = element.getBoundingClientRect().height;

        // JS version of blockPosition
        const blockPosition = elementHeight < windowHeight ? 'center' : 'start';

        element.scrollIntoView({ behavior: 'smooth', block: blockPosition });
      }
    } catch (error) {
      console.error("Scroll error:", error);
    }
  };

  const handleDownload = (e) => {
    if (RESUME_DATA.resumeLink === '#') {
      e.preventDefault();
      alert("Resume file is currently being updated. Please check back later.");
    }
  };

  return (
    <section
      id="home"
      className="min-h-[90vh] md:min-h-screen flex items-center justify-center md:justify-start relative overflow-hidden bg-grid-slate-900/[0.04] pt-10 md:pt-0"
    >
      {/* Background noise */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-primary text-xs font-mono uppercase tracking-widest">Available for hire</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-mono tracking-tighter leading-tight">
            HELLO_WORLD
            <br />
            <span className="text-secondary">I AM </span>
            <span className="text-primary">
              {RESUME_DATA.name.split(' ').slice(0, 2).join(' ').toUpperCase()}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mb-10 font-mono border-l-2 border-primary/50 pl-6">
            {'>'} {RESUME_DATA.role}
            <br />
            {'>'} {RESUME_DATA.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold hover:bg-slate-200 transition-all group font-mono text-sm w-full sm:w-auto cursor-pointer"
            >
              VIEW_WORK
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={RESUME_DATA.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-white hover:bg-white/5 transition-all font-mono text-sm w-full sm:w-auto cursor-pointer"
            >
              DOWNLOAD_CV
              <Download className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-slate-500">
            <a
              href={RESUME_DATA.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors p-2 -ml-2"
            >
              <Github size={24} />
            </a>

            <a
              href={RESUME_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors p-2"
            >
              <Linkedin size={24} />
            </a>

            <div className="h-px flex-1 bg-border max-w-[100px] sm:max-w-[200px]"></div>

            <span className="font-mono text-[10px] sm:text-xs whitespace-nowrap">
              BASED IN INDIA
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
