import React from "react";
import skillsStyles from "./Skills.module.css";
import "../../../index.css";

const Skills = () => {
  const hexOpacity80Percent = "80";
  const getRandomColor = () => {
    const randonHexColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randonHexColor + hexOpacity80Percent;
  };

  const [style, setStyle] = React.useState(getRandomColor());

  const items = [
    "JavaScript",
    "React JS",
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Angular",
    "HTML",
    "CSS",
    "Java",
    "Kotlin",
    "Android",
    "MySQL",
    "PostrgeSQL",
    "MongoDB",
    "C#",
    ".NET/.NET Framework",
    "ASP.NET/ASP.NET Framework",
    "NodeJS",
    "JQuery",
    "Redux",
    "JSON",
    "XML",
    "Linux",
  ];

  const marginBottom = {
    marginBottom: "30px",
  };

  return (
    <div style={marginBottom}>
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
