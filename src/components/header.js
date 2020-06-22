import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Funkynav from "./funkynav/funkynav"
import styles from "./header.module.less";

const Header = ({ siteTitle }) => (
  <header className={styles["header"]}>
      <Funkynav/>
      <h1 style={{ margin: 0 }}>
          <Link to="/">
              {siteTitle}
          </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
