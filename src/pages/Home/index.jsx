// import styles from "./Home.module.scss";

import About from "../../components/About";
import Experiences from "../../components/Experiences";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";

const Home = () => {
  // TODO add consistent padding block to every section
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
