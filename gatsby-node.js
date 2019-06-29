const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const resourceTemplate = path.resolve("src/templates/resource-page.js")
  const eventTemplate = path.resolve("src/templates/event-page.js")

  return graphql(`
    {
      resources: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "resource" } } }
      ) {
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
      events: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "event" } } }
      ) {
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

    res.data.resources.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: resourceTemplate,
      })
    })

    res.data.events.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: eventTemplate,
      })
    })
  })
}
