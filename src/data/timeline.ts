export interface EducationItem {
  degree: string;
  institution: string;
  deliveryPartner: string;
  period: string;
  status: string;
  location: string;
  modules: string[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  tag: string;
  iconName?: string;
}

export const EDUCATION_DATA: EducationItem = {
  degree: 'BSc (Hons) Software Engineering',
  institution: 'University of Plymouth',
  deliveryPartner: 'NSBM Green University',
  period: '2026 – 2029',
  status: 'In Progress (Undergraduate)',
  location: 'Plymouth, UK / Pitipana, Sri Lanka',
  modules: [
    'Programming & Software Development (Python, Java)',
    'Computer Science Foundations & Data Structures',
    'Artificial Intelligence & Intelligent Systems',
    'Database Systems & Relational Data Architecture',
    'Software Engineering Principles & System Architecture',
    'Mathematics for Computing & Algorithmic Analysis'
  ]
};

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: '2026',
    title: 'Began BSc (Hons) Software Engineering',
    description: 'Enrolled in the University of Plymouth Software Engineering degree program delivered via NSBM Green University, establishing strong computer science foundations.',
    tag: 'Academic Foundation'
  },
  {
    year: '2026',
    title: 'Architected 3D Liquid Glass Portfolio',
    description: 'Engineered a production-ready, futuristic 3D Liquid Glass web portfolio demonstrating modern React, Three.js, R3F, Framer Motion, and UI/UX engineering capabilities.',
    tag: 'Frontend Engineering'
  },
  {
    year: '2026',
    title: 'Commenced AI Application Engineering',
    description: 'Pivoted toward intelligent software development, exploring local Large Language Models, prompt pipelines, and autonomous AI agent architectures.',
    tag: 'AI Exploration'
  },
  {
    year: '2026',
    title: 'Architected CampusAI Platform',
    description: 'Designed CampusAI—an intelligent student productivity dashboard unifying course tracking, automated study planning, and AI academic assistance.',
    tag: 'Product Engineering'
  },
  {
    year: '2026',
    title: 'Initiated JARVIS Desktop AI Assistant',
    description: 'Began building JARVIS—a local-first desktop AI assistant combining offline speech recognition, Edge TTS voice synthesis, LLaVA vision analysis, and Ollama Llama 3 reasoning.',
    tag: 'Flagship AI Project'
  },
  {
    year: '2026',
    title: 'Multimodal AI & Local LLM Systems Research',
    description: 'Expanded technical scope to multimodal screen capture interpretation, real-time audio streams, and FastAPI microservice design for AI applications.',
    tag: 'Deep Tech & AI'
  },
  {
    year: '2026+',
    title: 'Continuous Full-Stack & AI Systems Scaling',
    description: 'Actively engineering practical full-stack projects, expanding open-source repositories on GitHub, and preparing for software engineering industry opportunities.',
    tag: 'Future Horizon'
  }
];

export const LANGUAGES_SPOKEN = [
  { name: 'English', level: 'Professional / Fluent' },
  { name: 'Tamil', level: 'Native / Fluent' },
  { name: 'Sinhala', level: 'Native / Fluent' },
  { name: 'Portuguese', level: 'Conversational' }
];
