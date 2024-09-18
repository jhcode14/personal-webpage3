import { forwardRef } from "react";
import styles from "./Experience.module.scss";
import Box from "../Box/Box";

const all_data = [
  {
    title: "Full Stack Software Engineer",
    title_description: "Viasat Inc.",
    time_period: "July 2023 - Present",
    context: "Beep Boop",
  },
  {
    title: "Software Engineering Intern",
    title_description: "Viasat Inc.",
    time_period: "June 2022 - September 2022",
    context:
      "Docker, Kubernetes, ArgoCD, Github Actions, and CI/CD",
  },
  {
    title: "Software Developer",
    title_description: "Diabetes Design Initiative | UCSD Design Lab",
    time_period: "September 2021 - March 2022",
    context:
      "React.JS, Figma",
  },
  {
    title: "B.S. Cognitive Science - Machine Learning and Neuro Computation",
    title_description: "University of California, San Diego",
    time_period: "January 2021 - March 2023",
    context:
      "ML + Minor in CS",
  },
];

const Experience = forwardRef((props, ref) => {
  return (
    <div className={styles.Experience_container} ref={ref}>
      <div className={styles.Experience_grid}>
        <h1>Experiences</h1>
        <div className={styles.Boxes}>
          {all_data.map((obj) => {
            return(<Box
              data={obj}
              link={"https://www.linkedin.com/in/jason-hsu-ucsd/"}/>)
          })}
        </div>
      </div>
    </div>
  );
});

export default Experience;
