import React from "react";
import styles from "../funkynav/funkynav.module.less";

import { Link } from "gatsby"

const Funkynav = () => {
  return <div className={styles["fnav"]}>
    <div className={styles["trigger"]}>yo yo yo</div>
    <div className={styles["linkbox"]}>
      <Link to="/">home</Link>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/projects/">projects</Link>
    </div>
  </div>
}

export default Funkynav
