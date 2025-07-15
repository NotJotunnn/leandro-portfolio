import classNames from "classnames";
import Button from "../Button";
import Tools from "../Tools";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="About" className={styles.about}>
      <div className={styles.aboutWrapper}>
        <div className={styles.col1}>
          <div className={styles.imageBackground} id={styles.desktop}>
            <img loading="lazy" src="assets/graduacao3.png" alt="Foto minha" />
          </div>
        </div>
        <div className={styles.col2}>
          <img loading="lazy" src="assets/graduacao2.png" alt="Foto minha" className="hidden" id={styles.mobile} />

          <h2>Sobre mim</h2>

          <hr />

          <div className="salute hidden">
            <h3 className="emoji">👋</h3>
            <h3>Olá! Me chamo Leandro!</h3>
          </div>

          <p>
            Desde meu <span className="highlight">ensino médio</span>, sempre
            tive muita conexão com a área de programação, e o desejo de
            explorá-la melhor e hoje eu estou o tornando{" "}
            <span className="highlight">realidade</span>.
          </p>

          <p>
            Sou <span className="highlight">graduado</span> na área de{" "}
            <span className="highlight">ciências da computação</span> e me
            especializo em{" "}
            <span className="highlight">Frontend development</span>.
          </p>

          <p>
            Algumas das <span className="highlight">ferramentas</span> que tenho{" "}
            <span className="highlight">familiaridade</span>:
          </p>

          <Tools />

          <p>
            Além de linguagens de programação também sou fluente em Inglês!
            (rsrsrs)
          </p>

          <div className={classNames("buttonGroup", styles.aboutButtonGroup)}>
            <a aria-label="Entre em contato" rel="canonical" href="#contact">
              <Button>Entrar em contato</Button>
            </a>
            <a
              aria-label="Veja meu currículo"
              rel="canonical"
              target="_blank"
              href="assets/Leandro-Ferreira-250714.pdf"
            >
              <Button>Baixar currículo</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
