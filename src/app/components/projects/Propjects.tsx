import React from "react";
import RegionHeader from "../regionHeader/RegionHeader";
import projectStyles from "./Projects.module.css";
import PortfolioItem from "./portfolioItem/PortfolioItem";
import calculatorOfCalories from "../../assets/portfolio/calculator_of_calories.jpg";
import gallow from "../../assets/portfolio/gallow.png";
import instagram from "../../assets/portfolio/instagram.jpg";
import monopoly from "../../assets/portfolio/monopoly.png";
import wallets from "../../assets/portfolio/wallets.jpg";
import "../../../index.css";

const Propjects = () => {
  const portfolio = [
    {
      img: calculatorOfCalories,
      header: "Calculator of calories",
      text: "This is a convenient mobile application designed for those who strive for a healthy lifestyle and want to control their diet. It is a solar tool for counting calories, substances, proteins and substances in your daily diet to help you maintain your ideal weight.",
    },
    {
      img: gallow,
      header: "Gallow",
      text: "This is a classic word puzzle game where players have to guess the words to save a little man from virtual execution. The goal of the game is simple, but it requires players to have logic, intuition and a good vocabulary.",
    },
    {
      img: instagram,
      header: "Instagram",
      text: "This is a world famous photo and video sharing app that allows users to share their life moments with friends, family and the world.",
    },
    {
      img: monopoly,
      header: "Monopoly",
      text: "This is a famous board game invented in the early 20th century that has become one of the most popular and best-selling family entertainment in the world. The game simulates economic activity, where players move around the playing field, buying, selling and renting real estate, aiming to monopolize the market and bankrupt their rivals.",
    },
    {
      img: wallets,
      header: "Wallets",
      text: "This is a universal financial tool designed for convenient management of personal finances directly from your smartphone. This powerful app allows users to not only track their expenses and income, but also plan a budget, create financial goals, and analyze their financial habits with in-depth analysis and intuitive charts.",
    },
  ];

  const slide = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? portfolio.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === portfolio.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToCurrent = (index?: number) => {
    if (index !== undefined) setCurrentIndex(index);
  };

  const toggleSlide = (callback: (index?: number) => void, index?: number) => {
    if (slide.current?.classList.contains("fade-in"))
      slide.current?.classList.remove("fade-in");
    slide.current?.classList.add("fade-out");

    setTimeout(() => {
      callback(index);

      slide.current?.classList.remove("fade-out");
      slide.current?.classList.add("fade-in");
    }, 1000);
  };

  return (
    <div>
      <RegionHeader title="Services" subTitle="What I offer" />
      <div className={projectStyles.carousel}>
        <div className={projectStyles.slides}>
          <div ref={slide} className={projectStyles.slide}>
            <PortfolioItem
              backImg={portfolio[currentIndex].img}
              header={portfolio[currentIndex].header}
              text={portfolio[currentIndex].text}
            />
          </div>
        </div>

        <div className={projectStyles.navigation}>
          <input
            type="radio"
            checked={currentIndex === 0}
            onChange={() => toggleSlide(goToCurrent, 0)}
            name="slides"
          />
          <input
            type="radio"
            checked={currentIndex === 1}
            onChange={() => toggleSlide(goToCurrent, 1)}
            name="slides"
          />
          <input
            type="radio"
            checked={currentIndex === 2}
            onChange={() => toggleSlide(goToCurrent, 2)}
            name="slides"
          />
          <input
            type="radio"
            checked={currentIndex === 3}
            onChange={() => toggleSlide(goToCurrent, 3)}
            name="slides"
          />
          <input
            type="radio"
            checked={currentIndex === 4}
            onChange={() => toggleSlide(goToCurrent, 4)}
            name="slides"
          />
        </div>

        <button
          onClick={() => toggleSlide(goToPrevious)}
          className={projectStyles.prev}
        >
          &#10094;
        </button>
        <button
          onClick={() => toggleSlide(goToNext)}
          className={projectStyles.next}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Propjects;
