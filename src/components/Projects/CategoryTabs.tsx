import React from "react";
import "./CategoryTabs.css";

type Category = "all" | "freelance" | "frontend" | "backend" | "ai";

interface CategoryTabsProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

/**
 * CategoryTabs displays clickable category options to filter projects.
 * When a tab is selected, it notifies the parent component.
 */
const CategoryTabs: React.FC<CategoryTabsProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const categories: Category[] = [
    "all",
    "freelance",
    "frontend",
    "backend",
    "ai",
  ];

  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={`tab-button ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
