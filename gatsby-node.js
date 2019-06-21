const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const resourceTemplate = path.resolve("src/templates/resource-page.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: resourceTemplate,
      })
    })
  })
}
