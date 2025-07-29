import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.scss";
import TechIcon from "../TechIcon";
import { useSelector } from "react-redux";

const ProjectCard = (props) => {
  const { id } = props;
  const { summary, page, tech } = useSelector((state) => {
    const project = state.projects.find((project) => project.summary.id === id);

    let tech;

    if ([...project.summary.tech].length > 10)
      tech = [...project.summary.tech].splice(0, 9);
    else tech = [...project.summary.tech].splice(0, 10);

    return {
      summary: project.summary,
      page: project.page,
      tech,
    };
  });

  return (
    <div className={`${styles.projectCard} hidden`}>
      <div className={styles.col1}>
        <Link
          target="_blank"
          to={
            summary.links.external ||
            summary.links.github ||
            summary.links.figma
          }
          aria-label="Ir para referência"
          rel="external"
        >
          <img loading="lazy" src={summary.thumb} alt={summary.name} />
        </Link>
      </div>
      <div className={styles.col2}>
        <h3>{summary.name}</h3>

        <h4>{`${page.jobs[0]}${page.jobs[1] ? ", " + page.jobs[1] : ""}`}</h4>

        <div id={styles.mobile}>
          <p dangerouslySetInnerHTML={{ __html: summary.description }}></p>

          <ul className={styles.tools} id={styles.mobile}>
            {tech?.map((tool, index) => (
              <li key={index}>
                <TechIcon name={tool} />
              </li>
            ))}
            {summary.tech.length > 10 && <li>+{summary.tech.length - 9}</li>}
          </ul>

          <div className={styles.sources}>
            <Link to={`/projects/${id}`} aria-label="Ir para documentação">
              <button>Leia mais</button>
            </Link>
            <ul className={styles.externalLinks}>
              {summary.links?.github && (
                <Link
                  target="_blank"
                  to={summary.links.github}
                  aria-label="Ir para github"
                  rel="external"
                >
                  <li>
                    <TechIcon hasLink={true} name={"github"} />
                  </li>
                </Link>
              )}
              {summary.links?.figma && (
                <Link
                  target="_blank"
                  to={summary.links.figma}
                  aria-label="Ir para figma"
                  rel="external"
                >
                  <li>
                    <TechIcon hasLink={true} name={"figma"} />
                  </li>
                </Link>
              )}
              {summary.links?.external && (
                <Link
                  target="_blank"
                  to={summary.links.external}
                  aria-label="Ir para projeto"
                  rel="external"
                >
                  <li>
                    <TechIcon hasLink={true} name={"external"} />
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
        <div className={styles.description} id={styles.desktop}>
          <p dangerouslySetInnerHTML={{ __html: summary.description }}></p>
          <div className={styles.sources}>
            <Link to={`/projects/${id}`} aria-label="Ir para documentação">
              <button>Leia mais</button>
            </Link>
            <ul className={styles.externalLinks}>
              {summary.links?.github && (
                <Link
                  target="_blank"
                  to={summary.links.github}
                  aria-label="Ir para github"
                  rel="external"
                >
                  <li>
                    <TechIcon hasLink={true} name={"github"} />
                  </li>
                </Link>
              )}
              {summary.links?.figma && (
                <Link
                  target="_blank"
                  to={summary.links.figma}
                  aria-label="Ir para figma"
                  rel="external"
                >
                  <li>
                    <TechIcon hasLink={true} name={"figma"} />
                  </li>
                </Link>
              )}
              {summary.links?.external && (
                <Link
                  target="_blank"
                  to={summary.links.external}
                  aria-label="Ir para projeto"
                  rel="external"
                >
                  <li>
                    <TechIcon hasLink={true} name={"external"} />
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>

        <ul className={styles.tools} id={styles.desktop}>
          {tech?.map((tool, index) => (
            <li key={index}>
              <TechIcon name={tool} />
            </li>
          ))}
          {summary.tech.length > 10 && <li>+{summary.tech.length - 9}</li>}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
