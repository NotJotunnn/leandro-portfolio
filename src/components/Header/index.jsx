import styles from "./Header.module.scss";

import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/reducers/sidebar";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sidebarInvisible = useSelector((state) => state.sidebar);

  const handleClick = () => {
    if (!(window.innerWidth > 600)) dispatch(toggleSidebar());
  };

  const handleNavigateClick = (headHome) => {
    if (headHome)
      navigate({
        pathname: "/",
        hash: "#Home",
      });

    if (!(sidebarInvisible) && !(window.innerWidth > 600))
      dispatch(toggleSidebar());
  };

  return (
    <header
      className={
        sidebarInvisible ? `${styles.sidebarInvisible} sidebarInvisible` : ""
      }
    >
      <div className={styles.headerWrapper}>
        <img onClick={() => handleNavigateClick(true)} src="/assets/Logo.svg" />
        <nav className={styles.navigation} id={styles.desktop}>
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

        <button onClick={handleClick} id={styles.mobile}>
          <MdOutlineMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
