import React from "react";
import "./Navbar.css";

// Navbar component with scroll navigation and logo-scroll to top
const Navbar: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={scrollToTop}>
        Burak Telli
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#internships">Stajlarım</a>
        </li>
        <li>
          <a href="#bootcamps">Bootcamplerim</a>
        </li>
        <li>
          <a href="#projects">Projelerim</a>
        </li>
        <li>
          <a href="#references">Referanslar</a>
        </li>
        <li>
          <a href="#contact">İletişim</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
