import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>I am front-end developer</p>
      <p>
        Need a developer ? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
