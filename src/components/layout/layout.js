import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./layout.module.scss"
import "../../ styles/style.scss"
import Header from "./header/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <main>{children}</main>
        </div>
        <footer>
          © {new Date().getFullYear()}, Built by &nbsp;
          {data.site.siteMetadata.author} with &nbsp;
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
