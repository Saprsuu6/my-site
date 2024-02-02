import React from "react";
import headerStyles from "./Header.module.css";
import logo from "../../assets/logo.png";
import "../../../index.css";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <div className={headerStyles.image_container}>
          <img src={logo} alt="Описание картинки"></img>
        </div>
        <div className={headerStyles.text_container}>
          <div className={`${headerStyles.logo} logo`}>Home</div>
        </div>
      </div>
      <nav className={`${headerStyles.navbar} navbar`}>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
