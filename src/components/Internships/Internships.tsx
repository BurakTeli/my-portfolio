import React from "react";
import "./Internships.css";

// Internship section with all six companies
const Internships: React.FC = () => {
  return (
    <section id="internships" className="internships-section">
      <h2 className="internships-title">Staj Deneyimlerim</h2>
      <div className="internship-list">
        {/* 1. Ventura Yazılım */}
        <div className="internship-card">
          <img
            src="/assets/images/internship/ventura.jpeg"
            alt="Ventora Yazılım"
            className="internship-logo"
          />
          <h1 className="internship-company">Ventora Yazılım</h1>
          <p className="internship-duration">Aralık 2024 – Mayıs 2025 (6 Ay)</p>
          <button className="internship-button">Detaylı</button>
        </div>

        {/* 2. Ordulu Teknoloji */}
        <div className="internship-card">
          <img
            src="/assets/images/internship/ordulu.jpeg"
            alt="Ordulu Teknoloji"
            className="internship-logo"
          />
          <h1 className="internship-company">Ordulu Teknoloji</h1>
          <p className="internship-duration">Eylül 2024 – Aralık 2024 (4 Ay)</p>
          <button className="internship-button">Detaylı</button>
        </div>

        {/* 3. Badi Etkinlik */}
        <div className="internship-card">
          <img
            src="/assets/images/internship/badi.png"
            alt="Badi Etkinlik"
            className="internship-logo"
          />
          <h1 className="internship-company">Badi Etkinlik</h1>
          <p className="internship-duration">
            Temuzz 2024 – Temmuz 2024 (1 Sene)
          </p>
          <button className="internship-button">Detaylı</button>
        </div>

        {/* 4. OTTO Games */}
        <div className="internship-card">
          <img
            src="/assets/images/internship/otto.jpg"
            alt="OTTO Games"
            className="internship-logo"
          />
          <h1 className="internship-company">OTTO Games</h1>
          <p className="internship-duration">Temuzz 2024 – Ekim 2024 (4 Ay)</p>
          <button className="internship-button">Detaylı</button>
        </div>

        {/* 5. ON7 Yazılım */}
        <div className="internship-card">
          <img
            src="/assets/images/internship/on7.jpeg"
            alt="ON7 Yazılım"
            className="internship-logo"
          />
          <h1 className="internship-company">ON7 Yazılım</h1>
          <p className="internship-duration">Haziran 2024 – Ekim 2024(5 Ay)</p>
          <button className="internship-button">Detaylı</button>
        </div>

        {/* 6. Atlaspad */}
        <div className="internship-card">
          <img
            src="/assets/images/internship/atlaspad.jpg"
            alt="Atlaspad"
            className="internship-logo"
          />
          <h1 className="internship-company">Atlaspad</h1>
          <p className="internship-duration">Mart 2024 - Haziran 2024(4 Ay)</p>
          <button className="internship-button">Detaylı</button>
        </div>
      </div>
    </section>
  );
};

export default Internships;
