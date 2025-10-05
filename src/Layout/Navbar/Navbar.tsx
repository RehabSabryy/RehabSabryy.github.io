import { Link } from "react-scroll";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="./images/website_logo.png" alt="logo" width="150" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                className="nav-link link-hover"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link 
                to="projects" 
                smooth={true} 
                duration={500} 
                className="nav-link link-hover cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="btn yellow-btn"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
