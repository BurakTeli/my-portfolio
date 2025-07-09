import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import "./Hero.css";

// Full hero section with image and text side by side
const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <HeroImage />
      <HeroText />
    </section>
  );
};

export default Hero;
