import { forwardRef } from "react";
import styles from "./About.module.scss";

const About = forwardRef((props, ref) => {
  return (
    <div className={styles.About_container} ref={ref}>
      <p>
        Hi! I’m a Software Engineer based in SF. I enjoy learning and building
        things that matter. Outside of coding, I’m passionate about staying
        active and creating ceramics. Feel free to reach out!
      </p>
    </div>
  );
});

export default About;
