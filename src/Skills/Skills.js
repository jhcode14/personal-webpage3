import { forwardRef } from "react";
import styles from "./Skills.module.scss";
const lang = ["Python", "Java", "JavaScript", "TypeScript"];
const tech = [
  "React.JS",
  "Next.JS",
  "PostgreSQL",
  "Flask",
  "Spring",
  "Docker",
  "K8s",
  "RabbitMQ",
];
const meth = ["Agile", "Scrum"];

const Skills = forwardRef((props, ref) => {
  return (
    <div className={styles.Skills_container} ref={ref}>
      <h1>Skills</h1>
      <h2>Languages</h2>
      <div className={styles.Skills_list}>
        {lang.map((item, i) => (
          <div className={styles.Skills_box} key={i}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
      <h2>Technologies</h2>
      <div className={styles.Skills_list}>
        {tech.map((item, i) => (
          <div className={styles.Skills_box} key={i}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
      <h2>Methodologies</h2>
      <div className={styles.Skills_list}>
        {meth.map((item, i) => (
          <div className={styles.Skills_box} key={i}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
      <div className={styles.Resume_box}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/Jason-Hsu-Resume.pdf"
        >
          View Resume
        </a>
      </div>
    </div>
  );
});
export default Skills;
