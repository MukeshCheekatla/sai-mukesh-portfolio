import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS, RESUME_DATA } from '../data/constants.js';

const Projects = () => {
  // Track image load errors by project index (JS version)
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="projects" className="scroll-mt-0">
      <div className="border-t border-border pt-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <span className="text-primary font-mono text-sm tracking-widest uppercase">
              03. // Work
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">Featured Projects</h2>
          </div>

          <a
            href={RESUME_DATA.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center text-sm font-mono text-secondary hover:text-white transition-colors"
          >
            View all repositories <ExternalLink size={14} className="ml-2" />
          </a>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-surface border border-border p-6 hover:border-primary/50 transition-all group relative overflow-hidden flex flex-col"
            >
              {/* Decorative Background Code */}
              <div className="hidden lg:block absolute top-0 right-0 p-4 opacity-5 font-mono text-[10px] text-right pointer-events-none select-none z-0">
                import &#123; {project.techStack[0]} &#125; from 'lib';
                <br />
                export default function App() &#123;
                <br />
                &nbsp;&nbsp;return &lt;div&gt;Hello&lt;/div&gt;
                <br />
                &#125;
              </div>

              {/* Project Image */}
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded border border-border/50 group-hover:border-primary/30 transition-colors z-10 bg-background shrink-0">

                {project.imageUrl && !imageErrors[index] ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    onError={() => handleImageError(index)}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <span className="font-mono text-xs text-slate-500">
                      NO_PREVIEW_AVAILABLE
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-60 pointer-events-none"></div>
              </div>

              {/* Title + Links */}
              <div className="flex justify-between items-start mb-2 z-10 relative">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="flex gap-4 bg-surface/80 backdrop-blur-sm p-1 rounded-lg">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white p-1"
                    aria-label="GitHub Repo"
                  >
                    <Github size={20} />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white p-1"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 mb-4 text-sm leading-relaxed z-10 relative flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 z-10 relative mt-auto">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-secondary">
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile GitHub link */}
        <a
          href={RESUME_DATA.githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="flex md:hidden items-center text-sm font-mono text-secondary hover:text-white transition-colors mt-8"
        >
          View all repositories <ExternalLink size={14} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
