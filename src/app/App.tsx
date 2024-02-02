import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import appStyles from "./App.module.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <main className={appStyles.main}>
        <Home />
        <AboutMe />
        <Skills />
      </main>
    </div>
  );
}

export default App;
