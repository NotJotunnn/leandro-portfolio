import { Link } from "react-router-dom";
import styles from "./Header.module.scss"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <Link to={"/"}><img src="/assets/Logo.svg" /></Link>
        <nav className={styles.navigation}>
          <ul>
            <li><Link to={"/#about"}>Sobre mim</Link></li>
            <li><Link to={"/#project"}>Projetos</Link></li>
            <li><Link to={"/#contact"}>Contato</Link></li>
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
}
 
export default Header;