import React from "react";

import aboutMeStyles from "./AboutMe.module.css";
import "../../../index.css";

const AboutMe = () => {
  return (
    <div className={`${aboutMeStyles.grid_container} grid_container`}>
      <div className={aboutMeStyles.grid_item}>
        <h2>About Me</h2>
        <h4>My Introduction</h4>
      </div>
      <div className={aboutMeStyles.grid_item}></div>
      <div className={aboutMeStyles.grid_item}>
        <p>
          An accomplished Frontend Developer with a passion for creating
          seamless user experiences. With a solid foundation in HTML, CSS, and
          JavaScript, I specialize in crafting visually captivating and
          intuitively navigable websites. Leveraging my expertise in responsive
          design and UI/UX principles, I bring concepts to life, ensuring each
          project is a masterpiece of precision and functionality.
        </p>

        <div className={aboutMeStyles.number_info}>
          <div className={aboutMeStyles.info}>
            <p>02+</p>
            <span>Years experience</span>
          </div>
          <div className={aboutMeStyles.info}>
            <p>10+</p>
            <span>Completed projects</span>
          </div>
          <div className={aboutMeStyles.info}>
            <p>03+</p>
            <span>Companies worked</span>
          </div>
        </div>
        <ul className={aboutMeStyles.cvs}>
          <li>
            <a href="#">Android Developer CV</a>
          </li>
          <li>
            <a href="#">.NET Developer CV</a>
          </li>
          <li>
            <a href="#">NodeJs Developer CV</a>
          </li>
          <li>
            <a href="#">FrontEnd Developer CV</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
