import React from "react";
import "./ProjectCard.css";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

/**
 * ProjectCard displays a single project with its image,
 * title, and short description. It also includes
 * three colored circles on the top-left to mimic macOS window style.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="project-card">
      {/* Header with colored circles */}
      <div className="card-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
      </div>

      {/* Project preview image */}
      <img src={image} alt={title} className="project-image" />

      {/* Project title and description */}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
