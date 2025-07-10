import styles from "./TestimonialPage.module.scss";
import Chat from "../Chat";
import PhoneMainPage from "../PhoneMainPage";

const TestimonialPage = () => {

  return (
    <div className={styles.testimonialsPage}>
      <div className={styles.pageWrapper}>
        <h4>Depoimentos</h4>

        <div className={styles.cellphone}>
          <PhoneMainPage />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
