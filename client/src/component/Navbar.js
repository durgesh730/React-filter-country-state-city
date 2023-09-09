import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <div className="logo">Durgesh</div>
        <div className="menu-toggle" onClick={toggleNavbar}>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
        </div>
        <ul className="nav-links">
          <li><a href="#">Login</a></li>
          <li><a href="#">SignUp</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
