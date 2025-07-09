import React from "react";
import "./Bootcamps.css";

// Bootcamp experience cards
const Bootcamps: React.FC = () => {
  const bootcamps = [
    {
      title: "Patika+ Full Stack Developer Bootcamp",
      duration: "2025 - 8 AY",
      image: "/assets/images/Bootcamp/Patika.png",
    },
    {
      title: "Global AI Hub – AI Bootcamp",
      duration: "2024 - 8 Hafta",
      image: "/assets/images/Bootcamp/Aygaz.jpeg",
    },
    {
      title: "Publicca – AI with Python",
      duration: "2024 - 6 Hafta",
      image: "/assets/images/Bootcamp/pupilica.png",
    },
    {
      title: "Akbank Makine Ögrenmesine Giris Bootcamp",
      duration: "2024 - 4 Hafta",
      image: "/assets/images/Bootcamp/Akbank.jpg",
    },
  ];

  return (
    <section id="bootcamps" className="bootcamps-section">
      <h2 className="bootcamps-title">Bootcamplerim</h2>
      <div className="bootcamp-grid">
        {bootcamps.map((item, index) => (
          <div className="bootcamp-card" key={index}>
            <img src={item.image} alt={item.title} className="bootcamp-image" />
            <h3 className="bootcamp-name">{item.title}</h3>
            <p className="bootcamp-duration">{item.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bootcamps;
