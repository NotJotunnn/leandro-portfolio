import styles from "./TestimonialPage.module.scss";
import Chat from "../Chat";
import PhoneMainPage from "../PhoneMainPage";
import { FaHandPointer } from "react-icons/fa";
import classNames from "classnames";
import { useSelector } from "react-redux";

const TestimonialPage = () => {
  const isOnMainPage = useSelector(state => state.testimonials.currentChatName === "")
  return (
    <div className={styles.testimonialsPage}>
      <div className={styles.pageWrapper}>
        <h4>Depoimentos</h4>

        <div className={styles.cellphone}>
          <FaHandPointer className={classNames(styles.onboardingHand, isOnMainPage ? "" : styles.invisible)} />
          <PhoneMainPage />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
