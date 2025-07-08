import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.scss"

const PageNotFound = () => {
  return (
    <div className={styles.background}>
      <div className={styles.backgroundWrapper}>
        <h1 className={styles.error}>404</h1>
        <h1>página não encontrada!</h1>
        <h2>Gostaria de voltar para <Link to={"/"}>página home</Link>?</h2>
      </div>
    </div>
  );
}
 
export default PageNotFound;