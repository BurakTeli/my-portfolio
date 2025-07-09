import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <div id="home" style={{ height: "100vh" }}></div>
      <div id="internships" style={{ height: "100vh" }}></div>
      <div id="projects" style={{ height: "100vh" }}></div>
      <div id="references" style={{ height: "100vh" }}></div>
      <div id="contact" style={{ height: "100vh" }}></div>
    </>
  );
}

export default App;
