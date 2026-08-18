export type NavSection = 'hero' | 'about' | 'projects' | 'experience' | 'education' | 'tech' | 'ai' | 'contact';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl?: string;
  bgImageUrl?: string;
  iconName?: string;
  colSpanDesktop: number;
  heightDesktop: string;
  layout?: 'split' | 'vertical' | 'split-reversed' | 'compact' | 'featured-large' | 'featured-alt' | 'small';
  demoUrl?: string;
  githubUrl?: string;
  metrics?: ProjectMetric[];
  keyFeatures?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  status: 'Present' | 'Past';
  bullets: string[];
  technologies?: string[];
  liveUrl?: string;
  location?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  highlights?: string[];
}

export interface TechCategory {
  id?: string;
  title: string;
  skills: string[];
}

export interface AIPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  glowColor: 'cyan' | 'indigo';
  details?: string[];
}

export interface ContactTransmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp?: string;
}
