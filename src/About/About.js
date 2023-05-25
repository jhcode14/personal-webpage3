import { forwardRef } from "react";
import styles from "./About.module.scss";

const About = forwardRef((props, ref) => {
  return (
    <div className={styles.About_container} ref={ref}>
      <p>
        Greetings! I&apos;m a passionate Software Developer based in the United States.
        I recently graduated from UC San Diego with a bachelor&apos;s degree in Machine
        Learning, complemented by a minor in Computer Science. With an insatiable
        curiosity for Software Development, I strive to continuously expand my
        knowledge and stay at the forefront of industry advancements.
        <br />
        <br />
        As a detail-oriented and result-driven individual, I highly value constructive
        feedback and welcome criticism as catalysts for personal and professional
        growth. Embracing failure as an opportunity to learn and improve, I believe
        in the power of acknowledging shortcomings and using them as stepping stones
        towards success. Beyond my dedication to my craft, I find interest in the
        world of Kendo, the art of photography, and the thrill of running. Additionally,
        I am an ardent cat lover.
        <br />
        <br />
        I am particularly drawn to ambitious and meaningful projects that push boundaries
        and make a positive impact. Proficient in Python, React.JS, Next.JS, and Kubernetes,
        I bring a fresh perspective to the table. Collaboration and networking energize me,
        so I'm always thrilled to meet new individuals. Don't hesitate to get in touch—I'm
        here and excited to connect!
      </p>

    </div>
  );
});

export default About;
