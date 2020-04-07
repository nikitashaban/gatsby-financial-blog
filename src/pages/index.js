import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Pagination from "@material-ui/lab/Pagination"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import MediaCard from "../components/MediaCard/MediaCard"
import styles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogArticle(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "Do MMMM, YYYY", locale: "ru")
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const cardList = data.allContentfulBlogArticle.edges.map(card => (
    <MediaCard
      key={card.node.slug}
      title={card.node.title}
      publishedDate={card.node.publishedDate}
      imgUrl={card.node.image.file.url}
      slug={card.node.slug}
    />
  ))
  return (
    <Layout>
      <SEO title="Home" />
      <h1>About</h1>
      <p>I am front-end developer</p>
      <p>
        Need a developer ? <Link to="/about">Contact me</Link>
      </p>
      <div className={styles.articlesContainer}>
        <div className={styles.articlesList}>
          {cardList}
          <Pagination count={10} color="primary" />
        </div>
        <div className={styles.sideContent}></div>
      </div>
    </Layout>
  )
}

export default IndexPage
