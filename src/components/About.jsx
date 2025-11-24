import React from 'react';
import { RESUME_DATA } from '../data/constants.js';

const About = () => {
  return (
    <section id="about" className="scroll-mt-0">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-border pt-8">
        
        <div>
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            01. // Who am I?
          </span>
          <h2 className="text-3xl font-bold text-white mt-2">About Me</h2>
        </div>
        
        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
          {RESUME_DATA.about.split('\n\n').map((paragraph, index) => (
            <p
              key={index}
              className="first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:float-left first-letter:mr-3 first-letter:-mt-2.5"
            >
              {paragraph}
            </p>
          ))}

          <div className="grid grid-cols-2 gap-4 mt-8 font-mono text-sm">
            <div className="p-4 border border-border bg-surface/50">
              <span className="block text-secondary mb-1">Location</span>
              <span className="text-white">India</span>
            </div>

            <div className="p-4 border border-border bg-surface/50">
              <span className="block text-secondary mb-1">Experience</span>
              <span className="text-white">Junior Level</span>
            </div>

            <div className="p-4 border border-border bg-surface/50">
              <span className="block text-secondary mb-1">Degree</span>
              <span className="text-white">MCA</span>
            </div>

            <div className="p-4 border border-border bg-surface/50">
              <span className="block text-secondary mb-1">Status</span>
              <span className="text-primary animate-pulse">Online</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
