import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.scss";
import TechIcon from "../TechIcon";
import { useSelector } from "react-redux";

const ProjectCard = (props) => {
  const { id } = props;
  const { summary, page } = useSelector(state => state.projects.find(project => project.summary.id === id))

  return (
    <div className={styles.projectCard}>
      <div className={styles.col1}>
        <Link target="_blank" to={summary.links.externalLink || summary.links.github || summary.links.figma}><img src={summary.thumb} alt={summary.name} /></Link>
      </div>
      <div className={styles.col2}>
        <h3>{summary.name}</h3>

        <h4>{`${page.jobs[0]}${page.jobs[1] ? ", " + page.jobs[1] : ""}`}</h4>

        <div className={styles.description}>
          <p dangerouslySetInnerHTML={{ __html: summary.description }}></p>

          <div className={styles.sources}>
            <Link to={`/projects/${id}`}>
              <button>Leia mais</button>
            </Link>
            <ul className={styles.externalLinks}>
              {summary.links?.github && (
                <Link target="_blank" to={summary.links.github}>
                  <li>
                    <TechIcon hasLink={true} name={"github"} />
                  </li>
                </Link>
              )}
              {summary.links?.figma && (
                <Link target="_blank" to={summary.links.figma}>
                  <li>
                    <TechIcon hasLink={true} name={"figma"} />
                  </li>
                </Link>
              )}
              {summary.links?.externalLink && (
                <Link target="_blank" to={summary.links.externalLink}>
                  <li>
                    <TechIcon hasLink={true} name={"external"} />
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>

        <ul className={styles.tools}>
          {summary.tech?.map((tool, index) => (
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
