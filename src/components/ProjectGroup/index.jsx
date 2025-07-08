import { useState } from "react";
import ProjectCard from "../ProjectCard";
import styles from "./ProjectGroup.module.scss";
import projects from "../../store/Projects";
import Button from "../Button"
import { Link } from "react-router-dom";

const ProjectGroup = () => {
  const [projectCards] = useState(projects);

  return (
    <div className={styles.projectGroup}>
      {projectCards?.map((project, index) => (
        <ProjectCard key={project.summary.name + index} {...project.summary} />
      ))}
      <Link target="_blank" to={"https://github.com/NotJotunnn?tab=repositories"}><Button darkMode={true}>Ver mais</Button></Link>
    </div>
  );
};

export default ProjectGroup;
