import React from "react";
import headerStyles from "./Header.module.css";
import "../../../index.css";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Header = () => {
  const [setTheme] = useTheme();

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.text_container}>
        <div className={`${headerStyles.logo} logo`}>
          <a href="#home">Home</a>
        </div>
        <div className={headerStyles.image_container}>
          <div className={headerStyles.logo_img}></div>
        </div>
      </div>
      <nav className={`${headerStyles.navbar} navbar`}>
        <ul>
          <li>
            <a href="#aboutMe">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#hireMe">Hire me</a>
          </li>
          <li>
            <ThemeToggle setTheme={setTheme} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
