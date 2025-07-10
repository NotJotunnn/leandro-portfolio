import { useSelector } from "react-redux";
import styles from "./ExperienceCard.module.scss";
import { FaFileDownload } from "react-icons/fa";

const ExperienceCard = ({ index }) => {
  const { title, field, date, description, filesLocation } = useSelector(
    (state) => state.experiences[index]
  );
  return (
    <div className={styles.card}>
      <div className={styles.col1}>
        <h5>{title}</h5>
        <h6>{field}</h6>
        <p>{date}</p>
      </div>
      <div className={styles.col2}>
        <p dangerouslySetInnerHTML={{__html: description}}></p>
        {filesLocation.length > 0 && (
          <ul>
            {filesLocation.map((file, index) => (
              <li key={index}>
                <a download href={file.location}>
                  {file.name} <FaFileDownload />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
