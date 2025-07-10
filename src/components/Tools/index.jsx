import { useState } from "react";
import styles from "./Tools.module.scss";

const Tools = () => {
  const [ tools ] = useState([
    "HTML",
    "CSS",
    "Javascript",
    "ReactJS",
    "NextJS",
    "TailwindCSS",
    "Typescript",
    "REST API",
    "UI/UX",
    "Figma",
    "Git/Github",
    "VSCode",
  ])

  return (
    <div className={styles.tools}>
      {tools?.map((tool, index) => <button disabled key={index + tool}>{tool}</button>)}
    </div>
  );
};

export default Tools;
