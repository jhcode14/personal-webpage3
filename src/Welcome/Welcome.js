import styles from "./Welcome.module.scss";

import Kendo from "../Img/kendo_profile.png";
import Icons from "../Icons/Icons";

export default function Welcome() {
  return (
    <div className={styles.Intro_container}>
      <div className={styles.Intro}>
        <h2>Hi, I am</h2>
        <h1>Jason Hsu</h1>
        <h3>Software Developer / Student</h3>
        <h4>Glad you could stop by.</h4>
        <Icons />
      </div>
      <div className={styles.Profile_pic}>
        <img src={Kendo} alt="" />
      </div>
    </div>
  );
}
