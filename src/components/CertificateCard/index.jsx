import { useSelector } from "react-redux";
import styles from "./CertificateCard.module.scss";
import { Link } from "react-router-dom";

const CertificateCard = ({ index }) => {
  const certificate = useSelector(state => state.certificates[index])

  return (
    <Link target="_blank" to={certificate.credential.url}>
      <div className={styles.card}>
        <div className={styles.col1}>
          <img src={certificate.thumb} alt={certificate.title} />
        </div>
        <div className={styles.col2}>
          <h5>{certificate.title}</h5>
          <p>{certificate.company}</p>
          <p>{certificate.issuedDate}</p>
          {certificate.skills.length > 0 && (
            <p>Habilidades: {certificate.skills?.join(", ")}</p>
          )}
          <p>Credenciais: {certificate.credential.id}</p>
        </div>
      </div>
    </Link>
  );
};

export default CertificateCard;
