import styles from "./Experiences.module.scss";

import Segment from "../Segment";
import PageContainer from "../PageContainer";
import MobileSegment from "../MobileSegment";

const Experiences = () => {
  return (
    <section className={styles.experiences}>
      <div className={styles.experiencesWrapper}>
        <h2>Conhecimentos</h2>

        <h3>Alguns de meus conhecimentos!</h3>

        <Segment />

        <PageContainer />
        <MobileSegment />
      </div>
    </section>
  );
};

export default Experiences;
