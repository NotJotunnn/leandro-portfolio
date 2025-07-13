import styles from "./Sidebar.module.scss";

import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { toggleSidebar } from "../../store/reducers/sidebar";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isInvisible = useSelector((state) => !state.sidebar);

  const handleNavigateClick = (hash) => {
    navigate({
      pathname: "/",
      hash: `#${hash}`,
    });

    dispatch(toggleSidebar());
  };

  return (
    <section
      className={classNames(
        styles.sidebar,
        isInvisible ? styles.invisible : ""
      )}
      id={styles.mobile}
    >
      <div className={styles.sidebarWrapper}>
        <ul>
          <li onClick={() => handleNavigateClick("About")}>Sobre mim</li>
          <li onClick={() => handleNavigateClick("Project")}>Projetos</li>
          <li onClick={() => handleNavigateClick("Contact")}>Contato</li>
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
      </div>
    </section>
  );
};

export default Sidebar;
