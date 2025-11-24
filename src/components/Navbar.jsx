import React from 'react';
import { Home, User, Cpu, Folder, GraduationCap, Mail, Terminal } from 'lucide-react';
import { NAV_ITEMS } from '../data/constants.js';

const Navbar = () => {
  const icons = {
    'About': <User size={20} />,
    'Skills': <Cpu size={20} />,
    'Projects': <Folder size={20} />,
    'Education': <GraduationCap size={20} />,
    'Contact': <Mail size={20} />
  };

  const handleScroll = (e, href) => {
    e.preventDefault();

    try {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);

      if (element) {
        const windowHeight = window.innerHeight;
        const elementHeight = element.getBoundingClientRect().height;

        // JS version (no TS type)
        const blockPosition = elementHeight < windowHeight ? 'center' : 'start';

        element.scrollIntoView({ behavior: 'smooth', block: blockPosition });

        try {
          window.history.pushState(null, '', href);
        } catch (err) {
          console.warn('History pushState failed:', err);
        }
      }
    } catch (error) {
      console.error('Scroll handler error:', error);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col w-64 fixed top-0 left-0 h-full bg-surface border-r border-border z-50 overflow-y-auto custom-scrollbar">
        <div className="p-8">
          <div
            className="flex items-center gap-3 mb-8 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/30 transition-colors">
              <Terminal size={24} />
            </div>
            <div className="overflow-hidden">
              <h1 className="font-bold text-white tracking-tight font-mono truncate">DEV.PORTFOLIO</h1>
              <p className="text-xs text-secondary font-mono">v2.0.25</p>
            </div>
          </div>

          <div className="space-y-2">
            {/* HOME */}
            <a
              href="#home"
              onClick={(e) => handleScroll(e, '#home')}
              className="flex items-center gap-4 px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group cursor-pointer"
            >
              <Home size={20} className="group-hover:text-primary transition-colors shrink-0" />
              <span>Home</span>
            </a>

            {/* Dynamic Nav Items */}
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="flex items-center gap-4 px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group cursor-pointer"
              >
                <span className="group-hover:text-primary transition-colors shrink-0">
                  {icons[item.label]}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* STATUS */}
        <div className="mt-auto p-8 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="text-xs font-mono text-primary">System Online</span>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/95 backdrop-blur-md border-t border-border z-50 pb-safe supports-backdrop-filter:bg-surface/80">
        <div className="grid grid-cols-6 h-16 max-w-lg mx-auto">

          {/* Home */}
          <a
            href="#home"
            onClick={(e) => handleScroll(e, '#home')}
            className="flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-primary active:text-primary transition-colors cursor-pointer"
          >
            <Home size={20} />
            <span className="text-[9px] mt-1 font-mono hidden sm:block">Home</span>
          </a>

          {/* Dynamic Mobile Items */}
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-primary active:text-primary transition-colors cursor-pointer"
            >
              {icons[item.label]}
              <span className="text-[9px] mt-1 font-mono hidden sm:block">{item.label}</span>
            </a>
          ))}

        </div>
      </nav>
    </>
  );
};

export default Navbar;
