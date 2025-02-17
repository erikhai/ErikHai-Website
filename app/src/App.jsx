import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer"; // Import Footer

function App() {
  return (
    <>
      <div>
        Nav Bar
        Some fancy intro
        intro section (about me)
        experiences
        projects
        contact details (footer)
      </div>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default App;
