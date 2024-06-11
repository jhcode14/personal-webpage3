import { forwardRef } from "react";
import styles from "./Projects.module.scss";

const all_data = [
  {
    title: "Rocket Tracker (In Progress)",
    link: "",
    skills: "Next.JS, MongoDB, JS/HTML/CSS, Docker, Kubernetes",
    context:
      "This is a project for the home network. Users will self-host the application locally to track specific stocks and interact with the app through its website and Sonos Home Speaker system.",
  },
  {
    title: "Jason Hsu's Website",
    link: "https://github.com/jhcode14/personal-webpage3",
    skills: "React.JS, JS/HTML/CSS",
    context:
      "This project is the website you are viewing right now. This website is the third and latest version, intended to feature some of my proud works.",
  },
  {
    title: "Heart Disease Detection",
    link: "https://github.com/jhcode14/Heart_Disease_ML_Detection",
    skills: "Python, Pandas, Numpy, Sklearn",
    context:
      "This is the final project of UCSD's COGS 118A Supervised Machine Learning Course. We evaluated a patient's risk of getting heart disease through multiple ML models.",
  },
  {
    title: "Type 1 Diabetes Care Directive",
    link: "https://github.com/jhcode14/t1d-fall2021",
    skills: "React.JS, JS/HTML/CSS",
    context:
      "As a developer of the UC San Diego Diabetes Design Initiative, I co-developed React.js app with UCSD Design Lab to streamline critical information sharing for Type 1 diabetics, leading to more informed and safer decisions in urgent situations.",
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
            <h3>{proj.title}</h3>
            <p>
              {proj.skills}
              <br />
              <br />
              {proj.context}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
