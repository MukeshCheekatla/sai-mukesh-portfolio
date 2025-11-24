import React from 'react';
import { SKILLS } from '../data/constants.js';

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-0">
      <div className="border-t border-border pt-8">
        
        <span className="text-primary font-mono text-sm tracking-widest uppercase">
          02. // Stack
        </span>
        
        <h2 className="text-3xl font-bold text-white mt-2 mb-12">Technologies</h2>

        <div className="grid gap-8">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="group relative">

              {/* Left Bar Indicator */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

              {/* Category Title */}
              <h3 className="text-xl font-mono text-white mb-4 flex items-center">
                <span className="text-primary mr-2">const</span>
                {category.category.replace(/ & /g, '_').replace(/ /g, '')}
                <span className="text-primary ml-2">=</span>
                <span className="text-secondary ml-2">['...']</span>
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-surface border border-border text-slate-300 font-mono text-sm hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    "{skill}"
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
