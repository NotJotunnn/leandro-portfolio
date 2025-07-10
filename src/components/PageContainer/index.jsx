import { useSelector } from "react-redux";
import styles from "./PageContainer.module.scss";
import ExperiencePage from "../ExperiencePage";
import CertificatePage from "../CertificatePage";
import StudyPage from "../StudyPage";
import TestimonialPage from "../TestimonialPage";

// ? Arrumar o scroll dentro das páginas (TEST)
// TODO add popup component for viewing images
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
        <ExperiencePage />
        <CertificatePage />
        <StudyPage />
        <TestimonialPage />
      </div>
    </div>
  );
};

export default PageContainer;
