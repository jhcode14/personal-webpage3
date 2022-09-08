import styles from "./Footer.module.css";
import Instagram from "../Img/instagram.svg";
import Linkedin from "../Img/linkedin.svg";
import Github from "../Img/github.svg";

export default function Footer() {
  return (
    <div className={styles.Footer_container}>
      <div className={styles.icons}>
        <a
          href="https://www.instagram.com/jhsu_14/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={Instagram} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/jason-hsu-ucsd/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={Linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/jhcode14" rel="noreferrer" target="_blank">
          <img src={Github} alt="github" />
        </a>
      </div>
    </div>
  );
}
