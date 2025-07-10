import CertificateCard from "../CertificateCard";
import styles from "./CertificatePage.module.scss";

import { useSelector } from "react-redux";

const CertificatePage = () => {
  const certificates = useSelector((state) => state.certificates);

  return (
    <div className={styles.certificatesPage}>
      <div className={styles.pageWrapper}>
        <h4>Certificados</h4>

        <div className={styles.cardGroup}>
          {certificates.length > 0 &&
            certificates.map((certificate, index) => (
              <CertificateCard key={certificate.title + index} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
