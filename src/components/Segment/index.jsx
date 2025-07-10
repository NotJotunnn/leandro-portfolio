import { useDispatch, useSelector } from "react-redux";
import styles from "./Segment.module.scss";
import { useCallback } from "react";
import { changePosition } from "../../store/reducers/position";

const Segment = () => {
  const position = useSelector(state => state.position)
  const dispatch = useDispatch()

  const handleChangePosition = useCallback((num) => {
    dispatch(changePosition(num))
  }, [dispatch])

  return (
    <div
      style={{
        "--position": position,
      }}
      className={styles.buttonGroup}
    >
      <button onClick={() => handleChangePosition(0)}>Experiências</button>
      <button onClick={() => handleChangePosition(1)}>Certificados</button>
      <button onClick={() => handleChangePosition(2)}>Estudos</button>
      <button onClick={() => handleChangePosition(3)}>Depoimentos</button>
    </div>
  );
};

export default Segment;
