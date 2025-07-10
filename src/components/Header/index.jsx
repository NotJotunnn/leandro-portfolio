import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavHashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <NavHashLink
          scroll={(el) => {
            const yCoordinate =
              el.getBoundingClientRect().top + window.pageYOffset;
            const yOffset = -70;
            window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
          }}
          to={"/#Home"}
          activeClassName={styles.active}
        >
          <img src="/assets/Logo.svg" />
        </NavHashLink>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavHashLink
                scroll={(el) => {
                  const yCoordinate =
                    el.getBoundingClientRect().top + window.pageYOffset;
                  const yOffset = -70;
                  window.scrollTo({
                    top: yCoordinate + yOffset,
                    behavior: "smooth",
                  });
                }}
                to={"/#About"}
                activeClassName={styles.active}
              >
                Sobre mim
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                scroll={(el) => {
                  const yCoordinate =
                    el.getBoundingClientRect().top + window.pageYOffset;
                  const yOffset = -70;
                  window.scrollTo({
                    top: yCoordinate + yOffset,
                    behavior: "smooth",
                  });
                }}
                to={"/#Project"}
                activeClassName={styles.active}
              >
                Projetos
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                scroll={(el) => {
                  const yCoordinate =
                    el.getBoundingClientRect().top + window.pageYOffset;
                  const yOffset = -70;
                  window.scrollTo({
                    top: yCoordinate + yOffset,
                    behavior: "smooth",
                  });
                }}
                to={"/#Contact"}
                activeClassName={styles.active}
              >
                Contato
              </NavHashLink>
            </li>
          </ul>
          <ul className={styles.socials}>
            <li>
              <button>
                <FaLinkedinIn />
              </button>
            </li>
            <li>
              <button>
                <FaGithub />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
