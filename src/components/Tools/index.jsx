import { useState } from "react";
import styles from "./Tools.module.scss";

const Tools = () => {
  const [ tools ] = useState([
    "HTML/CSS",
    "Javascript",
    "ReactJS",
    "NextJS",
    "TailwindCSS",
    "Typescript",
    "REST API",
    "UI/UX",
    "Figma",
    "Git/Github",
    "Redux Toolkit",
    "Vite",
    "Sass",
    "React Router",
    "Styled Components",
    "Knex",
    "Eslint",
    "Postgres",
    "Nodejs",
    "JWT",
    "Jest",
    "Docker",
    "Expressjs",
    "Axios"
  ])

  return (
    <div className={styles.tools}>
      {tools?.map((tool, index) => <button className="hidden" disabled key={index + tool}>{tool}</button>)}
    </div>
  );
};

export default Tools;
