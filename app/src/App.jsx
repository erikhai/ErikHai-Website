import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer"; 
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
    <Navbar/>
      <div>
        Nav Bar
        Some fancy intro
        intro section (about me)
        experiences
        projects
      </div>

      <Footer />
    </>
  );
}

export default App;
