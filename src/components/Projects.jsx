import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS, RESUME_DATA } from '../data/constants.js';

const Projects = () => {
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
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-surface border border-border p-6 hover:border-primary/50 transition-all rounded-xl flex flex-col gap-4"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-16 h-16 rounded-xl border border-border bg-background p-2 shrink-0">
                  <img
                    src={project.iconUrl}
                    alt={`${project.title} icon`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white break-words">{project.title}</h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-secondary">
                    #{tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono px-3 py-2 rounded-md border border-border text-slate-300 hover:text-white hover:border-primary/50 transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-mono px-3 py-2 rounded-md border border-border text-slate-300 hover:text-white hover:border-primary/50 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
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
