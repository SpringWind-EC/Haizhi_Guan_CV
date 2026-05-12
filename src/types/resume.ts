export type Honor = {
  honor: string;
  date: string;
};

export type ExperienceItem = {
  position: string;
  date: string;
  link?: string;
};

export type Project = {
  title: string;
  image: string;
  descr: string[];
  role?: string;
  date?: string;
  github?: string;
};

export type Education = {
  school: string;
  location: string;
  gpa: string;
  degree: string;
  graduation_date: string;
  coursework: string[];
};

export type Contact = {
  address: string;
  phone: string;
  email: string;
  linkedin: string;
  github_link: string;
};

export type Skills = {
  programming: string[];
  web_frameworks: string[];
  databases: string[];
  tools_concepts: string[];
  languages: string[];
};

export type Resume = {
  name: string;
  tagline: string;
  summary: string;
  headshot: string;
  contact: Contact;
  education: Education;
  honors_and_awards: Honor[];
  skills: Skills;
  leadership_and_experience: ExperienceItem[];
  projects: Project[];
};