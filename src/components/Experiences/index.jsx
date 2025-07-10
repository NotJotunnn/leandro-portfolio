import Segment from "../Segment";
import styles from "./Experiences.module.scss";
import PageContainer from "../PageContainer";

const Experiences = () => {
  return (
    <section className={styles.experiences}>
      <div className={styles.experiencesWrapper}>
        <h2>Conhecimentos</h2>

        <h3>Alguns de meus conhecimentos!</h3>

        <Segment />

        <PageContainer />
      </div>
    </section>
  );
};

export default Experiences;
