import { useSelector } from "react-redux";
import styles from "./PageContainer.module.scss";
import ExperienceCard from "../ExperienceCard";

// ? Arrumar o scroll dentro das páginas (TEST)
const PageContainer = () => {
  const position = useSelector((state) => state.position);

  return (
    <div className={styles.container}>
      <div
        style={{
          "--position": position,
        }}
        className={styles.containerWrapper}
      >
        <div className={styles.experiencePage}>
          <div className={styles.pageWrapper}>
            <h4>Experiências</h4>
            <div className={styles.cardGroup}>
              <ExperienceCard />
            </div>
          </div>
        </div>
        <div className={styles.certificatesPage}></div>
        <div className={styles.studyPage}></div>
        <div className={styles.testimonialsPage}></div>
      </div>
    </div>
  );
};

export default PageContainer;
