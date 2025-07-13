import { Link } from "react-router-dom";
import Button from "../Button";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section id="Home" className={styles.hero}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroWrapper}>
        <Link to="https://unsplash.com/photos/monitor-showing-java-programming-OqtafYT5kTw" rel="external" target="_blank">
          <div className={styles.backgroundChecker} id={styles.desktop}>
            <p>?</p>
            <p>Imagem por Ilya Pavlov</p>
          </div>
        </Link>
        <div className={styles.col1}>
          <h1 className="hidden">
            Olá! me chamo:<span className={styles.name}>Leandro Ferreira</span>E
            sou um Desenvolvedor Frontend!
          </h1>
          <div className="buttonGroup hidden">
            <Link to={{hash: "#Contact"}}><Button>Entrar em contato</Button></Link>
            <a rel="canonical" aria-label="Veja mais sobre meu currículo" download href={"assets/Leandro-Ferreira-250627.pdf"}><Button>Baixar currículo</Button></a>
          </div>
        </div>
        <div className={styles.col2} id={styles.desktop}>
          <img src="/assets/graduacao2.jpeg" alt="Foto minha" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
