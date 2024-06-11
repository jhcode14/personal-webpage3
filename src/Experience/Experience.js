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
      "During the 12 weeks internship, I worked with other engineers to deploy High Availability Multi-Node Kubernetes Cluster.",
  },
  {
    title: "B.S. Cognitive Science - Machine Learning and Neuro Computation",
    title_description: "University of California, San Diego",
    time_period: "January 2021 - March 2023",
    context:
      "Minoring in Computer Science with relevant coursework in Machine Learning, Modeling and Data Analysis, Advanced Data Structures, and Computer Organization & System Programming.",
  },
];

const Experience = forwardRef((props, ref) => {
  return (
    <div className={styles.Experience_container} ref={ref}>
      <div className={styles.Experience_grid}>
        <h1>Experiences</h1>
        <div className={styles.Boxes}>
          <Box
            data={all_data[0]}
            link={"https://www.linkedin.com/in/jason-hsu-ucsd/"}
          />
          <Box
            data={all_data[1]}
            link={"https://www.linkedin.com/in/jason-hsu-ucsd/"}
          />
          <Box
            data={all_data[2]}
            link={"https://www.linkedin.com/in/jason-hsu-ucsd/"}
          />
        </div>
      </div>
    </div>
  );
});

export default Experience;
