import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <Link
          to={{
            pathname: "/",
            hash: "#Home",
          }}
          aria-label="Ir para Hero"
        >
          <img src="/assets/Logo.svg" />
        </Link>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link
                to={{
                  pathname: "/",
                  hash: "#About",
                }}
                aria-label="Ir para Sobre mim"
              >
                Sobre mim
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/",
                  hash: "#Project",
                }}
                aria-label="Ir para Projetos"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/",
                  hash: "#Contact",
                }}
                aria-label="Ir para contato"
              >
                Contato
              </Link>
            </li>
          </ul>
          <ul className={styles.socials}>
            <li>
              <Link
                to="https://www.linkedin.com/in/leandro-ferreira-l1/"
                aria-label="Entre em contato pelo Linkedin"
                rel="external"
                target="_blank"
              >
                <button>
                  <FaLinkedinIn />
                </button>
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/NotJotunnn"
                aria-label="Entre em contato pelo Github"
                rel="external"
                target="_blank"
              >
                <button>
                  <FaGithub />
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
