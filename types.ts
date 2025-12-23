
export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string;
  tags: string[];
  image: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: {
    institution: string;
    degree: string;
    duration: string;
    details?: string;
  }[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
