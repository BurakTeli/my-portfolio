import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./styles/global.css";
import "./App.css"; // Import new app-level styles

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="internships"></div>
      <div id="projects"></div>
      <div id="references"></div>
      <div id="contact"></div>
    </>
  );
}

export default App;
