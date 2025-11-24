import { RESUME_DATA, SKILLS, PROJECTS, EDUCATION } from '../data/constants.js';

// Simple local heuristic bot to replace API
export async function getChatbotResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  // Simulated processing delay (for terminal effect)
  await new Promise(resolve => setTimeout(resolve, 600));

  // Greetings
  if (
    msg.includes('hello') ||
    msg.includes('hi') ||
    msg.includes('hey') ||
    msg.includes('start')
  ) {
    return `System Online. I am the automated portfolio assistant.
    
You can query me about:
> Skills
> Projects
> Education
> Contact Info
> About Sai`;
  }

  // Skills Query
  if (
    msg.includes('skill') ||
    msg.includes('stack') ||
    msg.includes('tech') ||
    msg.includes('language')
  ) {
    const categories = SKILLS.map(cat =>
      `[${cat.category.toUpperCase()}]\n${cat.skills.map(s => `  > ${s}`).join('\n')}`
    ).join('\n\n');

    return `Retrieving technical competence registry...\n\n${categories}`;
  }

  // Projects Query
  if (
    msg.includes('project') ||
    msg.includes('app') ||
    msg.includes('work') ||
    msg.includes('portfolio')
  ) {
    const projList = PROJECTS.map(p =>
      `NAME: ${p.title}\nSTATUS: Deployed\nSTACK: [${p.techStack.join(', ')}]\nDESC: ${p.description}`
    ).join('\n\n-------------------\n\n');

    return `Accessing project database...\n\n${projList}`;
  }

  // Education Query
  if (
    msg.includes('education') ||
    msg.includes('degree') ||
    msg.includes('study') ||
    msg.includes('college') ||
    msg.includes('university')
  ) {
    const eduList = EDUCATION.map(e =>
      `DEGREE: ${e.degree}\nINSTITUTION: ${e.institution}\nYEAR: ${e.duration}\nGPA: ${e.gpa}`
    ).join('\n\n');

    return `Fetching academic records...\n\n${eduList}`;
  }

  // Contact Info Query
  if (
    msg.includes('contact') ||
    msg.includes('mail') ||
    msg.includes('email') ||
    msg.includes('reach')
  ) {
    return `Communication protocols:

Email: ${RESUME_DATA.email}
Form: Available in 'Contact' section.
Status: Open to opportunities.`;
  }

  // About Query
  if (
    msg.includes('about') ||
    msg.includes('who') ||
    msg.includes('bio')
  ) {
    return `IDENTITY: ${RESUME_DATA.name}
ROLE: ${RESUME_DATA.role}

SUMMARY:
${RESUME_DATA.about}`;
  }

  // Help Command
  if (msg.includes('help')) {
    return `Available Commands:
- "show skills"
- "list projects"
- "education history"
- "contact info"
- "who is sai?"`;
  }

  // Unknown Command
  return `Command not recognized.
Try keywords: 'skills', 'projects', 'education', 'contact', or type 'help'.`;
}
