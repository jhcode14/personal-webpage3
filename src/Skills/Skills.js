import { forwardRef } from "react";
import styles from "./Skills.module.scss";
const lang = ["Python", "JavaScript", "HTML", "CSS"];
const tech = ["Docker", "Kubernetes", "React.JS", "Next.JS", "Linux", "Git"];
const meth = ["Agile", "Scrum"];

const Skills = forwardRef((props, ref) => {
  return (
    <div className={styles.Skills_container} ref={ref}>
      <h1>Skills</h1>
      <h2>Languages</h2>
      <div className={styles.Skills_list}>
        {lang.map((item) => (
          <div className={styles.Skills_box}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
      <h2>Technologies</h2>
      <div className={styles.Skills_list}>
        {tech.map((item) => (
          <div className={styles.Skills_box}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
      <h2>Methodologies</h2>
      <div className={styles.Skills_list}>
        {meth.map((item) => (
          <div className={styles.Skills_box}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
      <div className={styles.Resume_box}>
        <a href="/Jason-Resume-May-2024.pdf" download>
          Download Resume
        </a>
      </div>
    </div>
  );
});
export default Skills;
