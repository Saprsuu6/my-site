import React from "react";
import newProjectStyle from "./NewProjectStyle.module.css";
import "../../../index.css";
import socialLinks from "../../assets/socialLinks.json";

const NewPropject = () => {
  return (
    <div id="hireMe" className={newProjectStyle.container}>
      <div>
        <h3>Do you have a new project?</h3>
        <p>Contact me, let's conquer the world with a project.</p>
        <a
          href={socialLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Contact Me</button>
        </a>
      </div>
      <div className="hireMe" />
    </div>
  );
};

export default NewPropject;
