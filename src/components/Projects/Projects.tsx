import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data/projectsData";
import "./Projects.css";

/**
 * Projects component maps over all project data
 * and displays each one using the ProjectCard component.
 * This is the unfiltered version; filtering will be added later.
 */
const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      {projectsData.map((project) => (
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
