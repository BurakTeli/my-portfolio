import React from "react";
import "./Navbar.css";

// Navbar component with scroll navigation
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Burak</div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Anasayfa</a>
        </li>
        <li>
          <a href="#internships">Stajlarım</a>
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
