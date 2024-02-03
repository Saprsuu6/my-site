import React from "react";
import homeStyles from "./Home.module.css";
import logo from "../../assets/logo.png";
import arrowDown from "../../assets/arrow_down.png";
import "../../../index.css";

const Home = () => {
  const h1 = {
    marginBottom: "15px",
  };

  const h3 = {
    marginBottom: "10px",
  };

  const p = {
    marginBottom: "20px",
  };

  return (
    <div className={`${homeStyles.grid_container} grid_container`}>
      <div className={homeStyles.grid_item}>
        <ul>
          <li>
            <div className={`${homeStyles.linkedIn} linkedIn`}></div>
          </li>
          <li>
            <div className={`${homeStyles.gitHub} github`}></div>
          </li>
          <li>
            <div className={`${homeStyles.instagram} instagram`}></div>
          </li>
          <li>
            <div className={`${homeStyles.telegram} telegram`}></div>
          </li>
          <li>
            <div className={`${homeStyles.gmail} gmail`}></div>
          </li>
        </ul>
      </div>
      <div className={homeStyles.grid_item}>
        <div className={homeStyles.blob_item}>
          <svg
            className={homeStyles.blob}
            viewBox="0 0 210 187"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
              <image
                className={homeStyles.blob_img}
                x="-15"
                y="-5"
                href={logo}
              />
            </g>
          </svg>
        </div>
        <a href="#about" className={homeStyles.home_scroll_button_down}>
          <img src={arrowDown} alt="arrow down" />
          <span>Scroll down</span>
        </a>
      </div>
      <div className={homeStyles.grid_item}>
        <h1 style={h1}>Hi, I am Andry Sapyhin</h1>
        <h3 style={h3}>Frontedn & Backend Developer</h3>
        <p style={p}>
          Passionate frontend and bacend developer specializing in
          pixel-architecture-perfect design.
        </p>
        <button>Contact Me</button>
      </div>
    </div>
  );
};

export default Home;
