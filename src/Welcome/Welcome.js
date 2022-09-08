import styles from "./Welcome.module.scss";

import Kendo from "../Img/kendo_profile.png";
import Footer from "../Footer/Footer";

export default function Welcome() {
  return (
    <div className={styles.Intro_container}>
      <div className={styles.Intro}>
        <h2>Hi, I am</h2>
        <h1>Jason Hsu</h1>
        <h3>Software Developer / Student</h3>
        <h4>Glad you could stop by.</h4>
        <Footer />
      </div>
      <div className={styles.Profile_pic}>
        <img src={Kendo} alt="" width={381} height={703} />
      </div>
    </div>
  );
}
