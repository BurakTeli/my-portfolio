import React from "react";
import "./HeroText.css";

// Right side text content of the hero section
const HeroText: React.FC = () => {
  return (
    <div className="hero-text-container">
      <h1 className="hero-title">Merhaba, ben Burak Telli 👋</h1>
      <p className="hero-description">
        Bilgi güvenliği teknolojileri mezunu, yazılım tutkunu bir
        geliştiriciyim. Yapay zeka, web teknolojileri ve freelance projelerde
        aktif olarak çalışıyorum. Deneyimlerimi ve projelerimi bu sayfa
        üzerinden keşfedebilirsin.
      </p>
    </div>
  );
};

export default HeroText;
