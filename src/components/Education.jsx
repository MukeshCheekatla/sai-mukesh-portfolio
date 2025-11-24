import React from 'react';
import { EDUCATION } from '../data/constants.js';

const Education = () => {
  return (
    <section id="education" className="scroll-mt-0">
      <div className="border-t border-border pt-8">
        
        <span className="text-primary font-mono text-sm tracking-widest uppercase">
          04. // Background
        </span>
        
        <h2 className="text-3xl font-bold text-white mt-2 mb-12">
          Education
        </h2>

        <div className="space-y-6">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-border bg-surface/30 hover:bg-surface transition-colors"
            >
              <div>
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <div className="text-slate-400 mt-1">
                  {edu.institution}, {edu.location}
                </div>
              </div>

              <div className="mt-4 md:mt-0 text-right">
                <div className="font-mono text-primary">{edu.duration}</div>
                <div className="text-sm text-secondary mt-1 font-mono">
                  GPA: {edu.gpa}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
