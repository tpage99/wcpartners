import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroHeader"
import Footer from "../components/footer"

const Resources = ({ data }) => (
  <Fragment>
    <HeroHeader />
    <SEO title="Resources" />
    <Layout>
      <main>
        <h1>Resources for Webster County</h1>
        <h2 style={{ color: `#fff`, padding: `2rem 0` }}>
          <span
            style={{
              backgroundColor: `#48b04c`,
              padding: `1rem`,
              boxShadow: `0 0 10px rgba(0, 0, 0, 0.48)`,
              textShadow: `0 0 10px rgba(0, 0, 0, 0.48)`,
            }}
          >
            Monthly Activity List
          </span>
        </h2>
        <p>
          Click on the links below to find more about available resources and
          information.
        </p>
        <ul style={{ listStyle: `none` }}>
          {data.allMarkdownRemark.edges.map(resource => (
            <li className="resource-box" key={resource.node.id}>
              <Link
                to={resource.node.frontmatter.path}
                style={{ textDecoration: `none` }}
              >
                <h3 className="resource-link">
                  {resource.node.frontmatter.title}
                </h3>
              </Link>
              <p style={{ paddingTop: `1rem` }}>
                {resource.node.frontmatter.description}
              </p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </Layout>
  </Fragment>
)

export const pageQuery = graphql`
  query ResourceQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { category: { eq: "resource" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            description
          }
        }
      }
    }
  }
`

export default Resources
