import Button from "../Button";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroWrapper}>
        <div className={styles.col1}>
          <h1>
            Olá! me chamo:<span className={styles.name}>Leandro Ferreira</span>E sou um Desenvolvedor Frontend!
          </h1>
          <div className="buttonGroup">
            <Button>Entrar em contato</Button>
            <Button>Baixar currículo</Button>
          </div>
        </div>
        <div className={styles.col2}>
          <img src="/assets/graduacao2.jpeg"/>
        </div>
      </div>
    </section>
  );
}
 
export default Hero;