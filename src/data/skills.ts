export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; iconName?: string; highlight?: boolean }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    description: 'Core languages for algorithmic reasoning, application logic, and data manipulation.',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'Java' },
      { name: 'JavaScript', highlight: true },
      { name: 'SQL', highlight: true },
      { name: 'HTML' },
      { name: 'CSS' }
    ]
  },
  {
    title: 'Frontend',
    description: 'Modern frameworks and design systems for interactive, responsive web user interfaces.',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Vite', highlight: true },
      { name: 'Responsive Web Design' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'Three.js / R3F' }
    ]
  },
  {
    title: 'Backend / APIs',
    description: 'High-performance microservices, RESTful routing, and backend server architecture.',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'REST APIs' },
      { name: 'Node.js' }
    ]
  },
  {
    title: 'Artificial Intelligence',
    description: 'Local LLM orchestration, multimodal vision analysis, and voice synthesis pipelines.',
    skills: [
      { name: 'Local LLMs', highlight: true },
      { name: 'Ollama', highlight: true },
      { name: 'Llama 3' },
      { name: 'LLaVA Multimodal', highlight: true },
      { name: 'AI Assistants' },
      { name: 'Speech Recognition' },
      { name: 'Edge TTS' }
    ]
  },
  {
    title: 'Databases',
    description: 'Relational data modeling, query optimization, and structured database storage.',
    skills: [
      { name: 'MySQL', highlight: true },
      { name: 'SQL' },
      { name: 'SQLite' }
    ]
  },
  {
    title: 'Tools & Ecosystem',
    description: 'Developer utilities, version control, build tools, and cloud deployment platforms.',
    skills: [
      { name: 'Git', highlight: true },
      { name: 'GitHub', highlight: true },
      { name: 'VS Code' },
      { name: 'npm' },
      { name: 'Vercel' }
    ]
  }
];
