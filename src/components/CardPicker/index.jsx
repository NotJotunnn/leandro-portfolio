import { IoCheckmarkDoneSharp } from "react-icons/io5";
import styles from "./CardPicker.module.scss";

const CardPicker = ({ name, children, time }) => {
  if (name === "network")
    return (
      <p className={styles.networkMessage}>
        {children} <span className={styles.hour}>{time}</span>
      </p>
    );
  else if (name === "local")
    return (
      <p className={styles.localMessage}>
        {children}
        <span className={styles.hour}>
          {time} <IoCheckmarkDoneSharp style={{ color: "blue" }} />
        </span>
      </p>
    );
  else if (name === "tip")
    return <p className={styles.tipMessage}>{children}</p>;
  return (
    <p
      className={styles.downloadMessage}
      dangerouslySetInnerHTML={{__html: children}}
    ></p>
  );
};

export default CardPicker;
