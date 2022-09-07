import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.Footer_container}>
      <div className={styles.icons}>
        <a
          href="https://www.instagram.com/jhsu_14/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={process.env.PUBLIC_URL + "instagram.svg"} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/jason-hsu-ucsd/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={process.env.PUBLIC_URL + "linkedin.svg"} alt="linkedin" />
        </a>
        <a href="https://github.com/jhcode14" rel="noreferrer" target="_blank">
          <img src={process.env.PUBLIC_URL + "github.svg"} alt="github" />
        </a>
      </div>
    </div>
  );
}
