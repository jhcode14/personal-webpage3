import { forwardRef } from "react";
import styles from "./Experience.module.scss";
import Box from "../Box/Box";

const all_data = [
  {
    title: "Software Engineering Intern",
    title_description: "Viasat Inc.",
    time_period: "June 2022 - September 2022",
    context:
      "During the 12 weeks internship, I worked with other engineers to deployed High Availability Multi-Node Kubernetes Cluster.",
  },
  {
    title: "B.S. Machine Learning and Neuro Computation Canadate",
    title_description: "University of California, San Diego",
    time_period: "January 2021 - September 2023",
    context:
      "Course work: Machine Learning, Modeling and Data Analysis, Advanced Data Structures, and Computer Organization & System Programming.",
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
        </div>
      </div>
    </div>
  );
});

export default Experience;
