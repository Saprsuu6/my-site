import React from "react";
import footerStyles from "./Footer.module.css";
import "../../../index.css";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.tooltip}>
        &copy; 2024 Моя Компания. Все права защищены.
        <p className={footerStyles.tooltiptext}>
          Включая право на шутку. Если вы найдете где-то наш копирайт без шутки,
          значит, он потерялся по пути. Пожалуйста, верните его нам, мы обещаем
          быть смешнее!
          <br />
          <strong>
            Oh yes, if you are an English speaker translate in a translator
            please.
          </strong>
        </p>
      </div>
      <ul>
        <li>Skills</li>
        <li>Qualification</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contacts</li>
      </ul>
      <div className={footerStyles.text_container}>
        <p>By Andry Sapryhin - React</p>
        <div className={`${footerStyles.image_container} image_container`}>
          <div className={`${footerStyles.logo_img} logo_img`}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;