import styles from "./PageContainer.module.scss";

import { useSelector } from "react-redux";
import ExperiencePage from "../ExperiencePage";
import CertificatePage from "../CertificatePage";
import StudyPage from "../StudyPage";
import TestimonialPage from "../TestimonialPage";

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
        <TestimonialPage />
        <StudyPage />
        <CertificatePage />
      </div>
    </div>
  );
};

export default PageContainer;
