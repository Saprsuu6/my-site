import React from "react";
import newProjectStyle from "./NewProjectStyle.module.css";
import "../../../index.css";

const NewPropject = () => {
  return (
    <div id="hireMe" className={newProjectStyle.container}>
      <div>
        <h3>Do you have a new project?</h3>
        <p>Contact me, let's conquer the world with a project.</p>
        <button>Contact Me</button>
      </div>
      <div className="hireMe" />
    </div>
  );
};

export default NewPropject;
