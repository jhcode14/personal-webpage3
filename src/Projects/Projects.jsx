import { forwardRef } from "react";
import styles from "./Projects.module.scss";

const all_data = [
  {
    title: "Manga Image Translator",
    link: "https://github.com/zyddnys/manga-image-translator",
    skills: "Open Source Contribution, React, Python",
    context: "Manga translation software with OCR + LLM!",
  },
  {
    title: "Tamago",
    link: "https://github.com/jhcode14/tamago",
    skills: "Python, React+Vite, PostgreSQL, Docker",
    context: "Self-hosted manga tracker with a web interface!",
  },
  {
    title: "This Website",
    link: "https://github.com/jhcode14/personal-webpage3",
    skills: "React",
    context: "You are looking at it right now! Hosted on Vercel.",
  },
  {
    title: "Heart Disease Detection",
    link: "https://github.com/jhcode14/Heart_Disease_ML_Detection",
    skills: "Python, Pandas, Numpy, Sklearn",
    context:
      "Part of the UCSD Supervised Machine Learning Course. We evaluated a patient's risk of getting heart disease through multiple ML models.",
  },
];

const Projects = forwardRef((props, ref) => {
  return (
    <div className={styles.Projects_container} ref={ref}>
      <h1>Project Highlights</h1>
      <div className={styles.Project_display}>
        {all_data.map((proj) => (
          <div
            className={styles.Project_box}
            onClick={() => {
              window.open(proj.link);
            }}
          >
            <div className={styles.Project_title}>{proj.title}</div>
            <div className={styles.Project_skills}>
              {proj.skills}
              <br />
              <br />
              {proj.context}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
