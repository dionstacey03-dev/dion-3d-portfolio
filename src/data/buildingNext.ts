export interface PlannedProject {
  id: string;
  number: string;
  title: string;
  category: string;
  status: 'Planned' | 'In Development';
  concept: string;
  techStack: string[];
}

export const BUILDING_NEXT_PROJECTS: PlannedProject[] = [
  {
    id: 'p01',
    number: '01',
    title: 'Student Management System',
    category: 'Management Systems',
    status: 'In Development',
    concept: 'Centralized academic portal for student enrollment, attendance tracking, module results, and transcript management.',
    techStack: ['Python', 'FastAPI', 'MySQL', 'React']
  },
  {
    id: 'p02',
    number: '02',
    title: 'Parking Management System',
    category: 'Smart Systems',
    status: 'Planned',
    concept: 'Real-time vehicle spot allocation, automated ticket generation, license plate recognition, and billing dashboard.',
    techStack: ['Python', 'OpenCV', 'React', 'SQLite']
  },
  {
    id: 'p03',
    number: '03',
    title: 'Hotel Management System',
    category: 'Management Systems',
    status: 'Planned',
    concept: 'Comprehensive hotel booking, room availability calendar, housekeeping workflows, and guest billing system.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'React']
  },
  {
    id: 'p04',
    number: '04',
    title: 'Smart Multimodal Transport System',
    category: 'AI & Smart Systems',
    status: 'Planned',
    concept: 'Integrated urban transit planner unifying bus schedules, rail updates, and micro-mobility routing with live ETA.',
    techStack: ['Python', 'FastAPI', 'React', 'Leaflet']
  },
  {
    id: 'p05',
    number: '05',
    title: 'Canteen Management System',
    category: 'Management Systems',
    status: 'Planned',
    concept: 'Digital cafeteria pre-ordering, inventory deduction, queue management, and RFID payment integration.',
    techStack: ['JavaScript', 'Node.js', 'React', 'MongoDB']
  },
  {
    id: 'p06',
    number: '06',
    title: 'Employee Management System',
    category: 'Management Systems',
    status: 'In Development',
    concept: 'HR portal handling staff directories, payroll processing, leave requests, and performance appraisal reports.',
    techStack: ['Python', 'Django', 'PostgreSQL', 'React']
  },
  {
    id: 'p07',
    number: '07',
    title: 'Online Learning Platform',
    category: 'Web Platforms',
    status: 'Planned',
    concept: 'Interactive e-learning portal with video lectures, quiz engines, automated grading, and student progress certificates.',
    techStack: ['React', 'Vite', 'Node.js', 'Express']
  },
  {
    id: 'p08',
    number: '08',
    title: 'Inventory Management System',
    category: 'Management Systems',
    status: 'Planned',
    concept: 'Stock level monitoring, automated reorder alerts, supplier tracking, and barcode scanning support.',
    techStack: ['Python', 'PyQt', 'SQL', 'FastAPI']
  },
  {
    id: 'p09',
    number: '09',
    title: 'QR Generator & Scanner',
    category: 'Utility Tools',
    status: 'In Development',
    concept: 'High-speed browser and desktop utility for generating custom styled QR codes and instant camera scanning.',
    techStack: ['React', 'TypeScript', 'Web API']
  },
  {
    id: 'p10',
    number: '10',
    title: 'Personal Budget Management System',
    category: 'FinTech',
    status: 'Planned',
    concept: 'Expense tracking app with budget categorizations, recurring subscription alerts, and financial goal analytics.',
    techStack: ['React', 'Chart.js', 'FastAPI', 'SQLite']
  },
  {
    id: 'p11',
    number: '11',
    title: 'Hospital Management System',
    category: 'Management Systems',
    status: 'Planned',
    concept: 'Healthcare management suite for patient admissions, doctor appointment scheduling, pharmacy inventory, and electronic medical records.',
    techStack: ['Java', 'MySQL', 'React', 'REST API']
  },
  {
    id: 'p12',
    number: '12',
    title: 'E-Commerce Platform',
    category: 'Web Platforms',
    status: 'Planned',
    concept: 'Full-featured online store with product filtering, shopping cart, checkout integration, and order management.',
    techStack: ['React', 'Vite', 'Node.js', 'Stripe API']
  },
  {
    id: 'p13',
    number: '13',
    title: 'Bank Management System',
    category: 'FinTech',
    status: 'Planned',
    concept: 'Secure banking simulation platform for account creation, fund transfers, transaction history, and loan calculation.',
    techStack: ['Java', 'SQL', 'React', 'Encryption']
  },
  {
    id: 'p14',
    number: '14',
    title: 'Face Detection System',
    category: 'AI & Computer Vision',
    status: 'In Development',
    concept: 'Real-time computer vision camera application for facial detection, landmark tracking, and biometric verification.',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'FastAPI']
  },
  {
    id: 'p15',
    number: '15',
    title: 'Universal Job Portal',
    category: 'Web Platforms',
    status: 'Planned',
    concept: 'Job matching platform connecting software engineering applicants with recruiters, featuring AI resume parsing.',
    techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL']
  }
];
