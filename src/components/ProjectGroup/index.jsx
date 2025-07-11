import styles from "./ProjectGroup.module.scss";

import ProjectCard from "../ProjectCard";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaGithub } from "react-icons/fa";

const ProjectGroup = () => {
  const projectCards = useSelector((state) =>
    state.projects.map((project) => ({
      id: project.summary.id,
      name: project.summary.name,
    }))
  );

  return (
    <div className={styles.projectGroup}>
      {projectCards?.map((project, index) => (
        <ProjectCard key={project.name + index} id={project.id} />
      ))}
      <Link
        target="_blank"
        to={"https://github.com/NotJotunnn?tab=repositories"}
        aria-label="Ir para github"
        rel="external"
      >
        <Button darkMode={true}>
          <FaGithub />
          Ver mais
        </Button>
      </Link>
    </div>
  );
};

export default ProjectGroup;
