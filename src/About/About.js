import { forwardRef } from "react";
import styles from "./About.module.scss";

const About = forwardRef((props, ref) => {
  return (
    <div className={styles.About_container} ref={ref}>
      <p>
      Greetings! I am a Software Engineer who thrives in dynamic and 
      collaborative environments. I am highly motivated to learn and 
      contribute to innovative projects that create a positive impact. 
      With a strong work ethic and a passion for continuous improvement, 
      I strive to deliver high-quality results. Outside of coding, I enjoy 
      staying active, photography, and sake tasting. If you share similar 
      interests, let’s connect!
      </p>
    </div>
  );
});

export default About;
