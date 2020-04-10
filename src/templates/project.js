import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogArticle(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      body {
        json
      }
      image {
        file {
          url
        }
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>{data.contentfulBlogArticle.title}</h1>
      <p>{data.contentfulBlogArticle.publishedDate}</p>
      <img
        style={{ maxHeight: 400 }}
        src={data.contentfulBlogArticle.image.file.url}
        alt={data.contentfulBlogArticle.title}
      />
      {documentToReactComponents(data.contentfulBlogArticle.body.json)}
    </Layout>
  )
}

export default ProjectTemplate
