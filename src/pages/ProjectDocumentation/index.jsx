import styles from "./ProjectDocumentation.module.scss";

import { Link, useParams } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TechIcon from "../../components/TechIcon";
import Button from "../../components/Button";
import { useSelector } from "react-redux";

const ProjectDocumentation = () => {
  const { id } = useParams();

  const { projects, currentProject } = useSelector((state) => {
    const projects = state.projects;
    const currentProject = state.projects.find(
      (project) => project.summary.id === id
    );

    return {
      projects,
      currentProject,
    };
  });

  if (!projects.some((project) => project.summary.id === id))
    return <PageNotFound />;

  return (
    <div className={styles.projectDocumentation}>
      <div className={styles.projectDocumentationWrapper}>
        <div className={styles.thumbnail}>
          <img loading="lazy" src={currentProject.summary.thumb} alt="Thumbnail do projeto" />
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col">
                Cliente <br /> (Social)
              </th>
              <th scope="col">Stack</th>
              <th scope="col">Status do Github</th>
              <th scope="col">Trabalho</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                {currentProject?.page?.client ? (
                  <Link
                    target="_blank"
                    to={currentProject.page.clientSocial}
                    aria-label="Ir para rede social do cliente"
                    rel="external"
                  >
                    {currentProject.page.client}
                  </Link>
                ) : (
                  "Fictício"
                )}
              </th>
              <td>
                {currentProject?.summary?.tech
                  ? currentProject?.summary?.tech.map((tech, index) => (
                      <TechIcon key={tech + index} name={tech} />
                    ))
                  : "Não incluso"}
              </td>
              <td>
                {currentProject?.page?.githubRepoStatus
                  ? currentProject?.page?.githubRepoStatus
                  : "Não incluso (privado)"}
              </td>
              <td>
                {currentProject?.page?.jobs.length > 0
                  ? currentProject?.page?.jobs.join(", ")
                  : "Não incluso"}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th scope="col" rowSpan={2}>
                Link externos
              </th>
              <th scope="col" colSpan={3}>
                Duração
              </th>
            </tr>
            <tr>
              <th scope="col">Iniciado</th>
              <th scope="col">Terminado</th>
              <th scope="col">Tempo total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {currentProject?.summary?.links?.github && (
                  <Link
                    target="_blank"
                    aria-label="Ir para repositório"
                    rel="external"
                    to={currentProject?.summary?.links?.github}
                  >
                    <TechIcon hasLink={true} name={"github"} />
                  </Link>
                )}
                {currentProject?.summary?.links?.figma && (
                  <Link
                    target="_blank"
                    aria-label="Ir para arquivo Figma"
                    rel="external"
                    to={currentProject?.summary?.links?.figma}
                  >
                    <TechIcon hasLink={true} name={"figma"} />
                  </Link>
                )}
                {currentProject?.summary?.links?.external && (
                  <Link
                    target="_blank"
                    aria-label="Ir para site"
                    rel="external"
                    to={currentProject?.summary?.links?.external}
                  >
                    <TechIcon hasLink={true} name={"external"} />
                  </Link>
                )}
              </td>
              <td>
                {currentProject?.page?.startDate
                  ? currentProject?.page?.startDate
                  : "Não informado"}
              </td>
              <td>
                {currentProject?.page?.endDate
                  ? currentProject?.page?.endDate
                  : "Não informado"}
              </td>
              <td>
                {currentProject?.page?.duration
                  ? `${currentProject?.page?.duration} ${currentProject?.page?.durationMetric}`
                  : "Não informado"}
              </td>
            </tr>
          </tbody>
        </table>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: currentProject.page.content }}
        ></div>
        <Link to={"/"} aria-label="Ir para Home">
          <Button darkMode={true}>Voltar para Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDocumentation;
