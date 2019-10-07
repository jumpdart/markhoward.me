import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Links = () => (
  <Layout>
    <SEO title="Links" />
    <h1>links</h1>
    <p>these are the links</p>
    <Link to="/">home</Link>
  </Layout>
)

export default Links
