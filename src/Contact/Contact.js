import styles from "./Contact.module.scss";

import Footer from "../Footer/Footer";

export default function Contact({ ref }) {
  return (
    <div className={styles.Contact_container} ref={ref}>
      <h1>Contact Me</h1>
      <Footer />
    </div>
  );
}
