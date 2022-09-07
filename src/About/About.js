import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.About_container}>
      <h1>I&apos;m</h1>
      <p>
        A Software Developer located in the United States. Currently studying
        Machine Learning and Computer Science at UC San Diego. I have a great
        passion for Software Development and would love to learn and broaden my
        knowledge.
        <br />
        <br />
        A detail-oriented, result-driven problem solver who loves constructive
        feedback and failures where I can learn from my mistakes. Outside of the
        professional scene, I enjoyed Kendo, photography, and running (looking
        forward to running a half-marathon soon). I am also a cat lover, and
        would love to adopt a cat in a near future.
        <br />
        <br />
        Interested in working on ambitious and meaningful projects. My expertise
        are in Python, React.JS, Next.JS, and Kubernetes. I love meeting new
        people. Feel free to reach out!
      </p>
    </div>
  );
}
