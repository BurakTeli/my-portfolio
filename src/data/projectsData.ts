// This file contains all project data and categories
// Each project will be rendered dynamically using this source

export type ProjectCategory = "freelance" | "frontend" | "backend" | "ai";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Monix Dashboard",
    description: "A secure panel that manages Virtual Machines",
    image: "/assets/projects/monix.png",
    category: "frontend",
  },
  {
    id: 2,
    title: "PasswdG",
    description: "A password generator that generates secure passwords",
    image: "/assets/projects/passwdg.png",
    category: "backend",
  },
  {
    id: 3,
    title: "Air-Connect",
    description: "Terminal-based tool to display and connect to WiFi networks",
    image: "/assets/projects/airconnect.png",
    category: "ai",
  },
  // Add more projects below
];
