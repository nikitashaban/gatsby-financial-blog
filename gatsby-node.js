const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogArticle = path.resolve("./src/templates/project.js")
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allContentfulBlogArticle(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogArticle.edges.forEach(edge => {
    createPage({
      component: blogArticle,
      path: `/project/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
