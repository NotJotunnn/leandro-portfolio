// import styles from "./Home.module.scss";

import About from "../../components/About";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";

const Home = () => {
  // TODO add consistent padding block to every section
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
