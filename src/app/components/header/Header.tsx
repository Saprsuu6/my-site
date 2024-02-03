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
        <div className={`${headerStyles.logo} logo`}>Home</div>
        <div className={headerStyles.image_container}>
          <div className={headerStyles.logo_img}></div>
        </div>
      </div>
      <nav className={`${headerStyles.navbar} navbar`}>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contacts</li>
          <li>
            <ThemeToggle setTheme={setTheme} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
