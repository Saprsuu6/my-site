import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import appStyles from "./App.module.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Propjects from "./components/projects/Propjects";
import NewPropject from "./components/newProject/NewPropject";

function App() {
  return (
    <div className="App">
      <Header />
      <main className={appStyles.main}>
        <Home />
        <AboutMe />
        <Skills />
        <Services />
        <Propjects />
        <NewPropject />
      </main>
      <Footer />
    </div>
  );
}

export default App;
