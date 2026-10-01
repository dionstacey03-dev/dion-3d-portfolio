export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'AI' | 'Web' | 'Full Stack' | 'Management Systems' | 'In Development';
  technologies: string[];
  status: 'Active Development' | 'In Development' | 'Completed';
  github?: string;
  demo?: string;
  featured: boolean;
  isFlagship?: boolean;
  features: string[];
  architecture?: string[];
  highlights?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'jarvis-ai',
    title: 'JARVIS — Desktop AI Assistant',
    tagline: 'Locally powered desktop AI assistant combining voice interaction, persistent memory, and multimodal LLM reasoning.',
    description: 'A locally powered desktop AI assistant built with Python that combines voice interaction, command execution, persistent memory, local LLM reasoning, and multimodal capabilities. Operates entirely locally using Ollama and Llama models for high-privacy, latency-efficient desktop automation.',
    category: 'AI',
    technologies: [
      'Python',
      'FastAPI',
      'Ollama',
      'Llama 3',
      'LLaVA',
      'SpeechRecognition',
      'Edge TTS',
      'React',
      'Vite'
    ],
    status: 'Active Development',
    github: 'https://github.com/dionstacey03-dev',
    featured: true,
    isFlagship: true,
    features: [
      'Wake-word activation & offline speech parsing',
      'Natural voice responses with Edge TTS synthesis',
      'System-level desktop commands & window automation',
      'Persistent JSON memory store for contextual awareness',
      'Local LLM reasoning via Ollama & Llama',
      'Real-time screen capture & multimodal vision analysis via LLaVA',
      'FastAPI REST backend with async WebSocket event streaming',
      'Liquid Glass React dashboard for real-time memory & status inspection',
      'Local-first privacy architecture without external API lock-in'
    ],
    architecture: [
      'Local LLM Execution: Ollama / Llama 3',
      'Vision Model: LLaVA Multimodal engine',
      'Voice Pipeline: SpeechRecognition -> Edge TTS',
      'Backend Gateway: Python / FastAPI',
      'Frontend Dashboard: React / Vite'
    ],
    highlights: 'Flagship Ongoing AI Project'
  },
  {
    id: 'campus-ai',
    title: 'CampusAI',
    tagline: 'Intelligent student productivity platform combining academic management and AI-powered study assistance.',
    description: 'An intelligent student productivity platform designed to combine academic management and AI-powered study assistance inside one unified, modern dashboard. Streamlines course organizing, exam tracking, and automated note summaries.',
    category: 'Full Stack',
    technologies: ['React', 'Vite', 'JavaScript', 'AI Integrations', 'Modern CSS'],
    status: 'In Development',
    github: 'https://github.com/dionstacey03-dev',
    featured: true,
    features: [
      'Interactive Student Dashboard with grade & deadline analytics',
      'AI Assistant for course Q&A and assignment guidance',
      'Subjects & Course Module Management',
      'Automated Study Planner with adaptive schedule generation',
      'Assignments & Exam Calendar with reminder triggers',
      'StudyLens visual notes inspector',
      'Academic Organization & task priority matrix'
    ]
  },
  {
    id: 'ai-smart-tourism',
    title: 'AI Smart Tourism Planner — Sri Lanka',
    tagline: 'AI-assisted travel planning platform generating adaptive Sri Lankan travel itineraries.',
    description: 'An AI-assisted travel planning concept designed to generate adaptive Sri Lankan travel itineraries while dynamically considering live weather patterns, road conditions, traveler preferences, regional attractions, and budget targets.',
    category: 'AI',
    technologies: ['Python', 'React', 'FastAPI', 'AI Algorithms', 'Maps API'],
    status: 'In Development',
    github: 'https://github.com/dionstacey03-dev',
    featured: true,
    features: [
      'Dynamic Sri Lankan itinerary adaptation based on weather & monsoon seasons',
      'Route optimization taking road topography and travel times into account',
      'Budget-tailored attraction and hotel recommendation scoring',
      'Interactive map visualization with custom Sri Lanka waypoints',
      'Cultural & heritage site exploration guides'
    ],
    highlights: 'Dynamic Itinerary Adaptation Engine'
  },
  {
    id: 'salespilot-ai',
    title: 'SalesPilot AI',
    tagline: 'AI-focused sales productivity application for lead tracking and sales analytics.',
    description: 'An AI-focused sales productivity application designed around lead management, automated follow-up drafting, reusable communication templates, and interactive sales pipeline analytics.',
    category: 'Full Stack',
    technologies: ['React', 'Vite', 'JavaScript', 'API Architecture', 'Recharts'],
    status: 'In Development',
    github: 'https://github.com/dionstacey03-dev',
    featured: true,
    features: [
      'Lead management pipeline with drag-and-drop status stages',
      'AI-generated follow-up email & messaging templates',
      'Interactive revenue & deal analytics using Recharts',
      'Client activity timeline tracking',
      'REST API architecture with mock data generator'
    ]
  },
  {
    id: 'interactive-story',
    title: 'Interactive Story Website',
    tagline: 'Creative React storytelling experience showcasing dynamic UI and multimedia integration.',
    description: 'A creative React-based interactive storytelling experience demonstrating responsive design, multimedia integration, image galleries, Liquid Glass interfaces, custom scroll audio, and animated user experiences.',
    category: 'Web',
    technologies: ['React', 'Vite', 'CSS', 'Responsive Design', 'Audio Integration'],
    status: 'Completed',
    github: 'https://github.com/dionstacey03-dev',
    demo: 'https://dion-portfolio-sigma.vercel.app',
    featured: true,
    features: [
      'Non-linear narrative progression with branch choices',
      'Responsive Liquid Glass photo and memory galleries',
      'Spatial ambient background audio sync',
      'Framer Motion smooth scroll transitions'
    ]
  }
];
