export interface Project {
  id: string;
  name: string;
  tag: string;
  problem: string;
  journey?: { title: string; subtitle: string };
  mission?: string;
  vision?: string;
  story?: string;
  image: string;
  blurhash: string;
  images: string[];
  imageHashes: string[];
  desktopImages?: string[];
  description: string;
  colors: { primary: string; secondary: string };
  links?: { appStore?: string; googlePlay?: string; website?: string };
  features: string[];
  variant: "featured" | "regular";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string }[];
}
