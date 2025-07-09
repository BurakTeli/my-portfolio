import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Internships from "./components/Internships/Internships";
import Bootcamps from "./components/Bootcamps/Bootcamps";

import Contact from "./components/Contact/Contact";

import "./styles/global.css";
import "./App.css";
import ProjectsSection from "./components/Projects/ProjectSection";

/**
 * App component represents the main layout of the portfolio.
 * Each section is imported as a standalone component.
 */
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Internships />
      <Bootcamps />
      {/* Projects section with anchor */}
      <div id="projects">
        <ProjectsSection />
      </div>
      <Contact />
      {/* Anchors for scroll linking */}
      <div id="internships"></div>
      <div id="references"></div>
      <div id="contact"></div>
    </>
  );
}

export default App;
