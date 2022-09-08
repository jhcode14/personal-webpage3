import styles from "./Projects.module.css";
import Box from "../Box/Box";

const all_data = [
  {
    title: "Rocket Tracker (In Progress)",
    link: "",
    skills: "Next.JS, MongoDB, JS/HTML/CSS, Docker, Kubernetes",
    context:
      "This is intended to be a self hosted project on the home network. Users will be able to track specific stocks and be notified through an interactive website and Sonos Home Speaker system. I am excited to show you this when it is ready!",
  },
  {
    title: "This Website!",
    link: "",
    skills: "React.JS, JS/HTML/CSS",
    context:
      "This project is the website you are viewing right now. This is the third and latest version of my website, intended to feature myself and some of my proud works. Hope you liked it.",
  },
  {
    title: "Heart Disease Detection with Machine Learning",
    link: "https://github.com/jhcode14/Heart_Disease_ML_Detection",
    skills: "Python, Pandas, Numpy, Sklearn",
    context:
      "This is the final project of UCSD's COGS 118A Supervised Machine Learning Course. We intend to evaluate the risk of a patient getting a heart disease through multiple Machine Learning modles.",
  },
  {
    title: "Type 1 Diabetes Care Directive",
    link: "https://github.com/jhcode14/t1d-fall2021",
    skills: "React.JS, JS/HTML/CSS",
    context:
      "As a member of the UC San Diego Diabetes Design Initiative, I worked with teammates to create this React.JS app to create a safer and mroe effecient communication between doctors and Type1 Diabetes patients in an emergency situation.",
  },
];

export default function Projects() {
  return (
    <div className={styles.Projects_container}>
      <h1>Project Highlights</h1>
      <div className={styles.Project_row}>
        <div className={styles.Project_box}>
          <h3>{all_data[0].title}</h3>
          <p>
            {all_data[0].skills}
            <br />
            <br />
            {all_data[0].context}
          </p>
        </div>
        <div className={styles.Project_box}>
          <h3>{all_data[1].title}</h3>
          <p>
            {all_data[1].skills}
            <br />
            <br />
            {all_data[1].context}
          </p>
        </div>
      </div>
      <div className={styles.Project_row}>
        <div className={styles.Project_box}>
          <h3>{all_data[2].title}</h3>
          <p>
            {all_data[2].skills}
            <br />
            <br />
            {all_data[2].context}
          </p>
        </div>
        <div className={styles.Project_box}>
          <h3>{all_data[3].title}</h3>
          <p>
            {all_data[3].skills}
            <br />
            <br />
            {all_data[3].context}
          </p>
        </div>
      </div>
    </div>
  );
}
