import styles from "./ExperienceCard.module.scss";

const ExperienceCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.col1}>
        <h5>Graduação</h5>
        <h6>Uniceub</h6>
        <p>11/02/2020 - 03/07/2024</p>
      </div>
      <div className={styles.col2}>
        <p>
          Fiz minha <span class="highlight">graduação</span> no modelo{" "}
          <span class="highlight">bacharelado</span>, onde{" "}
          <span class="highlight">estudei</span> e{" "}
          <span class="highlight">pratiquei</span> habilidades e conhecimentos
          importantes para minha <span class="highlight">área de atuação</span>{" "}
          com <span class="highlight">especialização</span> em desenvolvimento{" "}
          <span class="highlight">frontend</span>.
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
