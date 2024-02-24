import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import appStyles from "./App.module.scss";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Propjects from "./components/projects/Propjects";
import NewPropject from "./components/newProject/NewPropject";
import CryptosInfo from "./components/cryptosInfo/CryptosInfo";

function App() {
  React.useEffect(() => {
    document.title = "SaprLand";
  }, []);

  return (
    <div>
      <Header />
      <CryptosInfo />
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
