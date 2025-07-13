import styles from "./Segment.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { changePosition } from "../../store/reducers/position";

const Segment = () => {
  const position = useSelector((state) => state.position);
  const dispatch = useDispatch();

  const handleChangePosition = useCallback(
    (num) => {
      dispatch(changePosition(num));
    },
    [dispatch]
  );

  return (
    <div
      id={styles.desktop}
      style={{
        "--position": position,
      }}
      className={styles.buttonGroup}
    >
      <button onClick={() => handleChangePosition(0)}>Experiências</button>
      <button onClick={() => handleChangePosition(1)}>Depoimentos</button>
      <button onClick={() => handleChangePosition(2)}>Estudos</button>
      <button onClick={() => handleChangePosition(3)}>Certificados</button>
    </div>
  );
};

export default Segment;
