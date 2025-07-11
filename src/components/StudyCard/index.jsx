import styles from "./StudyCard.module.scss";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiExternalLinkLine } from "react-icons/ri";

const StudyCard = ({ index }) => {
  const study = useSelector((state) => state.studies[index]);
  return (
    <div className={styles.card}>
      <div className={styles.metaData}>
        <h5>{study.title}</h5>
        <p>Descrição: {study.description}</p>
      </div>
      <Link
        target="_blank"
        to={study.url}
        aria-label="Ir para repositório"
        rel="external"
      >
        <RiExternalLinkLine />
      </Link>
    </div>
  );
};

export default StudyCard;
