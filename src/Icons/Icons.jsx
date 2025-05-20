import styles from "./Icons.module.scss";
import Instagram from "../Img/instagram.svg";
import Linkedin from "../Img/linkedin.svg";
import Github from "../Img/github.svg";

export default function Icons() {
  return (
    <div className={styles.icons}>
      <a
        href="https://www.linkedin.com/in/jasonhsu14"
        rel="noreferrer"
        target="_blank"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a href="https://github.com/jhcode14" rel="noreferrer" target="_blank">
        <img src={Github} alt="github" />
      </a>
    </div>
  );
}
