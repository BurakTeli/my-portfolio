import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data/projectsData";
import "./Projects.css";

type Category = "all" | "freelance" | "frontend" | "backend" | "ai";

interface ProjectsProps {
  selectedCategory: Category;
}

/**
 * Projects component filters and renders the project list
 * based on the selected category passed from the parent.
 */
const Projects: React.FC<ProjectsProps> = ({ selectedCategory }) => {
  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="projects-container">
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default Projects;
