import React, { useState } from "react";
import skillsStyles from "./Skills.module.css";
import "../../../index.css";

const Skills = () => {
  const [style, setStyle] = useState("");

  const hexOpacity80Percent = "80";

  const items = [
    "JavaScript",
    "React JS",
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "HTML",
    "CSS",
  ];

  const getRandomColor = () => {
    const randonHexColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randonHexColor + hexOpacity80Percent;
  };

  return (
    <div>
      <h2>Skills</h2>
      <h4>My Technical Skills</h4>
      <div className={`${skillsStyles.skills} skills`}>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              style={{ backgroundColor: style }}
              onMouseEnter={() => setStyle(getRandomColor())}
              onMouseLeave={() => setStyle(getRandomColor())}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
