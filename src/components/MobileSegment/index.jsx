import styles from "./MobileSegment.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { changePosition } from "../../store/reducers/position";
import classNames from "classnames";
import { FaHandPointer } from "react-icons/fa";

const MobileSegment = () => {
  const position = useSelector((state) => state.position);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [time, setTime] = useState("");

  const handleChangePosition = useCallback(
    (num) => {
      if (time !== "") clearTimeout(time);
      setTime(
        setTimeout(() => {
          setActive(false);
          setTime("");
        }, 10000)
      );

      setActive(true);
      dispatch(changePosition(num));
    },
    [dispatch, time]
  );

  return (
    <div className={styles.mobileSegment} id={styles.mobile}>
      <div
        onClick={() => handleChangePosition(0)}
        className={classNames(styles.node, position === 0 ? styles.active : "")}
      ></div>
      <div
        onClick={() => handleChangePosition(1)}
        className={classNames(styles.node, position === 1 ? styles.active : "")}
      ></div>
      <div
        onClick={() => handleChangePosition(2)}
        className={classNames(styles.node, position === 2 ? styles.active : "")}
      ></div>
      <div
        onClick={() => handleChangePosition(3)}
        className={classNames(styles.node, position === 3 ? styles.active : "")}
      ></div>
      <FaHandPointer
        className={classNames(
          styles.onboardingHand,
          active ? styles.invisible : ""
        )}
      />
    </div>
  );
};

export default MobileSegment;
