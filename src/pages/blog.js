import React from "react"
import Layout from "../components/layout/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import styles from "./blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "Do MMMM, YYYY", locale: "ru")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={styles.posts}>
        {data.allContentfulBlogPost.edges.map(post => (
          <li className={styles.post} key={post.node.title}>
            <Link to={`/blog/${post.node.slug}`}>
              <h2>{post.node.title}</h2>
              <p>{post.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog
