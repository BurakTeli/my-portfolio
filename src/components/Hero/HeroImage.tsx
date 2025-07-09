import React from "react";
import "./HeroImage.css";

// Left side image component in the hero section
const HeroImage: React.FC = () => {
  return (
    <div className="hero-image-container">
      <img
        src="/assets/images/Burak.jpeg"
        alt="Burak Telli"
        className="hero-image"
      />
    </div>
  );
};

export default HeroImage;
