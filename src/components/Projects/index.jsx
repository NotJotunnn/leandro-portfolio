import ProjectGroup from "../ProjectGroup";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.project}>
      <div className={styles.projectWrapper}>
        <h2>Projetos</h2>
        <h3>Alguns destaques!</h3>

        <hr />

        <ProjectGroup />
      </div>
    </section>
  );
};

export default Projects;
