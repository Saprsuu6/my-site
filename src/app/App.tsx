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
import HALO from "vanta/dist/vanta.halo.min";
import { useTheme } from "./components/hooks/useTheme";

function App() {
  const [vantaEffect, setVantaEffect] = React.useState(null);
  const myRef = React.useRef(null);

  const [theme, toggleTheme] = useTheme();

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0xff0000,
          backgroundColor: 0x2d2020,
          size: 0.5,
        })
      );
    }
    return () => {
      if (vantaEffect) setVantaEffect(null);
    };
  }, [vantaEffect]);

  React.useEffect(() => {
    document.title = "SaprLand";
  }, []);

  return (
    <div ref={myRef}>
      <Header toggleTheme={toggleTheme} />
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
