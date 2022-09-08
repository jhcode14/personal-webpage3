import styles from "./Experience.module.css";
import Box from "../Box/Box";
import Footer from "../Footer/Footer";

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

export default function Experience() {
  return (
    <div className={styles.Experience_container}>
      <div className={styles.Boxes}>
        <h1>Experiences</h1>
        <Box data={all_data[0]} />
        <Box data={all_data[1]} />
      </div>
      <div className={styles.Text_container}>
        <h1>Skills</h1>
        <p>
          Proficient Languages: Python, JavaScript/HTML/CSS
          <br />
          Technologies: Docker, Kubernetes, React.JS, Next.JS, Linux, Git
          <br />
          Methodologies: Agile, Scrum
        </p>
        <h1>Resume</h1>
        <a
          className={styles.download_button}
          href="/Jason-Resume-September-2022.pdf"
          download
        >
          View Resume
        </a>
      </div>
    </div>
  );
}
