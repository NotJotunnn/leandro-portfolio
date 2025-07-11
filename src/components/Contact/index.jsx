import styles from "./Contact.module.scss";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <footer id="Contact">
      <div className={styles.contactWrapper}>
        <h2>
          Gostou do que viu?
          <br />
          Entre em contato!
        </h2>
        <p>
          <Link
            aria-label="Me envie um e-mail"
            rel="external"
            to="mailto:leandro.fcode@gmail.com"
            target="_blank"
          >
            <MdEmail /> leandro.fcode@gmail.com
          </Link>
        </p>
        <div className={styles.socials}>
          <Link
            aria-label="Entre em contato pelo Linkedin"
            rel="external"
            to="https://github.com/NotJotunnn"
            target="_blank"
          >
            <button>
              <FaGithub />
            </button>
          </Link>
          <Link
            aria-label="Entre em contato pelo Linkedin"
            rel="external"
            to="https://www.linkedin.com/in/leandro-ferreira-l1/"
            target="_blank"
          >
            <button>
              <FaLinkedinIn />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
