import React from "react";
import skillsStyles from "./Skills.module.css";
import "../../../index.css";

const Skills = () => {
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
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div>
      <h2>Skills</h2>
      <h4>My Technical Skills</h4>
      <div className={`${skillsStyles.skills} skills`}>
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{ backgroundColor: getRandomColor() }}>
              {item}
            </li>
          ))}
          {/* TODO add, and different colors */}
        </ul>
      </div>
    </div>
  );
};

export default Skills;

// Чтобы изменить цвет текста в зависимости от тёмности фона в React (или в любом другом JavaScript-приложении), вам нужно будет сначала определить, насколько тёмным или светлым является фон, а затем изменить цвет текста соответственно. Это можно сделать, вычислив яркость (или "освещённость") фона по формуле, учитывающей вклад каждого из красного, зелёного и синего компонентов в общую яркость.

// Одним из подходов является использование формулы для перевода цвета из формата RGB в значение яркости. Вот пример функции на JavaScript, которая делает это и возвращает `true`, если фон считается тёмным, и `false`, если светлым:

// ```javascript
// function isDark(color) {
//   const rgb = parseInt(color.substring(1), 16); // Конвертируем hex в RGB
//   const r = (rgb >> 16) & 0xff; // Извлекаем красный компонент
//   const g = (rgb >>  8) & 0xff; // Извлекаем зелёный компонент
//   const b = (rgb >>  0) & 0xff; // Извлекаем синий компонент

//   // Формула расчёта яркости
//   const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
//   return brightness < 128;
// }
// ```

// Используя эту функцию, вы можете определить, следует ли использовать светлый или тёмный цвет для текста в зависимости от яркости фона:

// ```jsx
// import React from 'react';

// const MyComponent = () => {
//   const backgroundColor = '#123456'; // Пример фонового цвета
//   const textColor = isDark(backgroundColor) ? '#ffffff' : '#000000'; // Белый для тёмного фона, чёрный для светлого

//   return (
//     <div style={{ backgroundColor, color: textColor, padding: '20px' }}>
//       Этот текст изменяет свой цвет в зависимости от тёмности фона.
//     </div>
//   );
// };

// export default MyComponent;
// ```

// Таким образом, вы можете автоматически адаптировать цвет текста под фон, обеспечивая хорошую видимость и контрастность текста на любом фоне.
