import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Logo</h1>
        
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
