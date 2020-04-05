import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About</h1>
    <p>I am front-end developer</p>
    <p>
      Need a developer ? <Link to="/about">Contact me</Link>
    </p>
  </Layout>
)

export default IndexPage
