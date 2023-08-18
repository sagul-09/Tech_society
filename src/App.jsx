import React, { useCallback } from "react";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Particles from "react-tsparticles";
import { Particle } from "./configs/partical.config";
import { loadFull } from "tsparticles";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <>
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Particle}
      />
      <Nav />
      <Home />
      <About />
      <Footer />
    </>
  );
};

export default App;
