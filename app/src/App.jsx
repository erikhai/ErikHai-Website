import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer"; 
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
    <Navbar/>
      <div>
        Some fancy intro<br/>
        intro section (about me)<br/>
        experiences<br/>
        projects<br/>
      </div>

      <Footer />
    </>
  );
}

export default App;
