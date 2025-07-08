import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.scss";
import TechIcon from "../TechIcon";
import projects from "../../store/Projects";
import { useEffect, useState } from "react";

const ProjectCard = (props) => {
  const { description, tech, thumb, name, links, id } = props;
  const [ currentProject, setCurrentProject ] = useState()

  useEffect(() => {
    setCurrentProject(projects.find(project => project.summary.id === id))
  }, [id])

  return (
    <div className={styles.projectCard}>
      <div className={styles.col1}>
        <Link target="_blank" to={links.externalLink || links.github || links.figma}><img src={thumb} alt={name} /></Link>
      </div>
      <div className={styles.col2}>
        <h3>{name}</h3>

        <h4>{`${currentProject?.page?.jobs[0]}${currentProject?.page?.jobs[1] ? ", " + currentProject?.page?.jobs[1] : ""}`}</h4>

        <div className={styles.description}>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>

          <div className={styles.sources}>
            <Link to={`/projects/${id}`}>
              <button>Leia mais</button>
            </Link>
            <ul className={styles.externalLinks}>
              {links?.github && (
                <Link target="_blank" to={links.github}>
                  <li>
                    <TechIcon name={"github"} />
                  </li>
                </Link>
              )}
              {links?.figma && (
                <Link target="_blank" to={links.figma}>
                  <li>
                    <TechIcon name={"figma"} />
                  </li>
                </Link>
              )}
              {links?.externalLink && (
                <Link target="_blank" to={links.externalLink}>
                  <li>
                    <TechIcon name={"external"} />
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>

        <ul className={styles.tools}>
          {tech?.map((tool, index) => (
            <li key={index}>
              <TechIcon name={tool} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
