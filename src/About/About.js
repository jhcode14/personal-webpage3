import { forwardRef } from "react";
import styles from "./About.module.scss";

const About = forwardRef((props, ref) => {
  return (
    <div className={styles.About_container} ref={ref}>
      <p>
        Greetings! I'm a passionate Software Engineer, with a Machine Learning
        background to build impactful software. I'm proficient in Python,
        React.JS, Next.JS, and Kubernetes, and thrive in collaborative
        environments. When I'm not coding, I enjoy exploring the world of
        bouldering, photography, and running and a cat lover. If you share
        similar interest, let's connect!
      </p>
    </div>
  );
});

export default About;
