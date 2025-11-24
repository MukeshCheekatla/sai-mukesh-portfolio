import React from 'react';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AIChat from './components/AIChat.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-background text-slate-200 selection:bg-primary/30 selection:text-primary-100 flex flex-col md:flex-row overflow-x-hidden">
      
      <Navbar />

      <main className="flex-1 md:ml-64 flex flex-col min-h-screen w-full relative z-0">
        <Hero />

        <div className="px-6 sm:px-8 md:px-12 lg:px-20 space-y-24 pb-32 md:pb-24">
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </div>
      </main>

      <AIChat />
    </div>
  );
};

export default App;
