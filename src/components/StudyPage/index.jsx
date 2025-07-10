import styles from "./StudyPage.module.scss";
import StudyCard from "../StudyCard";
import { useSelector } from "react-redux";

const StudyPage = () => {
  const studies = useSelector(state => state.studies)
  return (
    <div className={styles.studyPage}>
      <div className={styles.pageWrapper}>
        <h4>Estudos</h4>

        <div className={styles.cardGroup}>
          {studies.length > 0 && studies.map((study, index) => <StudyCard key={study.title + index} index={index} />)}
        </div>
      </div>
    </div>
  );
}
 
export default StudyPage;