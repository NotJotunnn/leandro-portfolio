import styles from "./ProjectDocumentation.module.scss";

import { Link, useParams } from "react-router-dom";
import projects from "../../store/Projects";
import PageNotFound from "../PageNotFound";
import { useState } from "react";
import TechIcon from "../../components/TechIcon";
import Button from "../../components/Button";

const ProjectDocumentation = () => {
  const { id } = useParams();
  const [currentProject] = useState(
    projects.find((project) => project.summary.id === id)
  );

  console.log(currentProject.summary.thumb)

  if (!projects.some((project) => project.summary.id === id))
    return <PageNotFound />;

  return (
    <div className={styles.projectDocumentation}>
      <div className={styles.projectDocumentationWrapper}>
        <div className={styles.thumbnail}>
          <img src={currentProject.summary.thumb} alt="Thumbnail do projeto" />
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col">
                Cliente <br /> (Social)
              </th>
              <th scope="col">
                Stack
              </th>
              <th scope="col">
                Status do Github
              </th>
              <th scope="col">
                Trabalho
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                {currentProject?.page?.client ? (
                  <Link target="_blank" to={currentProject.page.clientSocial}>
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
                    to={currentProject?.summary?.links?.github}
                  >
                    <TechIcon name={"github"} />
                  </Link>
                )}
                {currentProject?.summary?.links?.figma && (
                  <Link
                    target="_blank"
                    to={currentProject?.summary?.links?.figma}
                  >
                    <TechIcon name={"figma"} />
                  </Link>
                )}
                {currentProject?.summary?.links?.external && (
                  <Link
                    target="_blank"
                    to={currentProject?.summary?.links?.external}
                  >
                    <TechIcon name={"external"} />
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
        <Link to={"/"}><Button darkMode={true}>Voltar para Home</Button></Link>
      </div>
    </div>
  );
};

export default ProjectDocumentation;
