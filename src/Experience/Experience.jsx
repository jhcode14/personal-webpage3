import { forwardRef } from "react";
import styles from "./Experience.module.scss";
import Box from "../Box/Box";

const all_data = [
  {
    title: "Full Stack Software Engineer",
    title_description: "Viasat Inc.",
    time_period: "July 2023 - Present",
    context:
      "Java Spring, React, Python, Elasticsearch, Redis, RabbitMQ, and more",
  },
  {
    title: "Software Engineering Intern",
    title_description: "Viasat Inc.",
    time_period: "June 2022 - September 2022",
    context: "Docker, Kubernetes, ArgoCD, Github Actions, and CI/CD",
  },
  {
    title: "Student Software Developer",
    title_description: "Diabetes Design Initiative | UCSD Design Lab",
    time_period: "September 2021 - March 2022",
    context: "React, Figma",
  },
  {
    title: "B.S. Cognitive Science - ML",
    title_description: "UC San Diego",
    time_period: "January 2021 - March 2023",
    context: "ML + Minor in CS",
  },
];

const Experience = forwardRef((props, ref) => {
  return (
    <div className={styles.Experience_container} ref={ref}>
      <div className={styles.Experience_grid}>
        <h1>Experiences</h1>
        <div className={styles.Boxes}>
          {all_data.map((obj, i) => {
            return (
              <Box
                data={obj}
                link={"https://www.linkedin.com/in/jason-hsu-ucsd/"}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Experience;
