import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./styles/global.css";
import "./App.css"; // Import new app-level styles
import Internships from "./components/Internships/Internships";
import Bootcamps from "./components/Bootcamps/Bootcamps";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Internships />
      <Bootcamps />
      <Contact />
      <div id="internships"></div>
      <div id="projects"></div>
      <div id="references"></div>
      <div id="contact"></div>
    </>
  );
}

export default App;
