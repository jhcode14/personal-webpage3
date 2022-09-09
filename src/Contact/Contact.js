import { forwardRef } from "react";
import styles from "./Contact.module.scss";

import Icons from "../Icons/Icons";

const Contact = forwardRef((props, ref) => {
  return (
    <div className={styles.Contact_container} ref={ref}>
      <h1>Contact Me</h1>
      <Icons className={styles.icons} />
    </div>
  );
});

export default Contact;
