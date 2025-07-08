import classNames from "classnames";
import styles from "./Button.module.scss";

const Button = ({ children, darkMode, ...otherParams }) => {
  return <button {...otherParams} className={classNames(styles.button, darkMode ? styles.dark : "")}>{children}</button>;
};

export default Button;
