// src/components/Header.jsx

import React from "react";

const Header = () => {
  return (
    <header className="nav-bar">
      <div className="logo">
        <a href="#hero">{""}</a>
      </div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a
          href="https://drive.google.com/file/d/1jk92_hnoYrAJDh00SC_g2ersfKhN6AoX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume"
        >
          Resume
        </a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
