import { useEffect } from "react";
import About from "../../components/About";
import Experiences from "../../components/Experiences";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import runObserver from "../../utils/HiddenElementsObserver";

const Home = () => {
  useEffect(() => {
    runObserver();
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Experiences />
    </div>
  );
};

export default Home;
