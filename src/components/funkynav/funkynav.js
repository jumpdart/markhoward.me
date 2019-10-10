import React from "react";
import styles from "../funkynav/funkynav.module.less";

import { Link } from "gatsby"

const Funkynav = () => {
  return <div className={styles["tester"]}>
    <Link to="/">home</Link>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/projects/">projects</Link>
  </div>
}

export default Funkynav
