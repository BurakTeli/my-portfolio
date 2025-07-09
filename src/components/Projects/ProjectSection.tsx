import React, { useState } from "react";
import CategoryTabs from "./CategoryTabs";
import Projects from "./Projects";

type Category = "all" | "freelance" | "frontend" | "backend" | "ai";

/**
 * ProjectsSection wraps the project area with both
 * category filters and the project listing.
 * It manages the selected category state and passes it down.
 */
const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  return (
    <section className="projects-section-wrapper">
      <h2 className="section-title">Projects</h2>

      <CategoryTabs
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => setSelectedCategory(category)}
      />

      <Projects selectedCategory={selectedCategory} />
    </section>
  );
};

export default ProjectsSection;
