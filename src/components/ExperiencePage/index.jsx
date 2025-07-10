import styles from "./ExperiencePage.module.scss";

import { useSelector } from "react-redux";
import ExperienceCard from "../ExperienceCard";

const ExperiencePage = () => {
  const experiences = useSelector((state) => state.experiences);
  return (
    <div className={styles.experiencePage}>
      <div className={styles.pageWrapper}>
        <h4>Experiências</h4>
        <div className={styles.cardGroup}>
          {experiences.length > 0 &&
            experiences.map((experience, index) => (
              <ExperienceCard key={index + experience.title} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
