import { forwardRef } from "react";
import styles from "./About.module.scss";

const About = forwardRef((props, ref) => {
  return (
    <div className={styles.About_container} ref={ref}>
      <p>
        Hi! I’m a Software Engineer based in SF. I enjoy tackling challenges and
        contributing to innovative, impactful projects in collaborative
        settings. Outside of coding, I’m passionate about staying active,
        exploring local restaurants, and making ceramics. Feel free to reach
        out!
      </p>
    </div>
  );
});

export default About;
