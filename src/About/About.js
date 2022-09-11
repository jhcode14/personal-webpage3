import { forwardRef } from "react";
import styles from "./About.module.scss";

const About = forwardRef((props, ref) => {
  return (
    <div className={styles.About_container} ref={ref}>
      <h1>I&apos;m</h1>
      <p>
        A Software Developer located in the United States. Currently studying
        Machine Learning and Computer Science at UC San Diego. I have a great
        passion for Software Development and would love to learn and broaden my
        knowledge.
        <br />
        <br />
        A detail-oriented, result-driven person who loves feedback and
        criticism. I also am not afraid of failing. I believe acknowledging
        downfalls and learning from mistakes is essential as a team player.
        Outside of the professional scene, I enjoyed Kendo, photography, and
        running (looking forward to running a half-marathon soon). I am also a
        cat lover and would love to adopt a cat soon.
        <br />
        <br />
        Interested in working on ambitious and meaningful projects. My expertise
        are in Python, React.JS, Next.JS, and Kubernetes. I love meeting new
        people. Feel free to reach out!
      </p>
    </div>
  );
});

export default About;
