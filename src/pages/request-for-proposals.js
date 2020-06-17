import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

const RFP = ({ data }) => (
  <Fragment>
    <HeroHeader />
    <SEO title="Request for Proposals" />
    <Layout>
      <main>
        <h1>Request for Proposals</h1>
        <hr />
        <section>
          <ul style={{ listStyle: `none` }}>
            {data.allMarkdownRemark.edges.map(rfp => (
              <li key={rfp.node.id}>
                <Link
                  to={rfp.node.frontmatter.path}
                  style={{ textDecoration: `none` }}
                >
                  <button
                    style={{
                      backgroundColor: `#2d5b2d`,
                      color: `white`,
                      marginBottom: `0`,
                      padding: `0.5em 0.75em 0 0.75em`,
                      textDecoration: `underline`,
                      boxShadow: `0 0 10px rgba(0, 0, 0, 0.48)`,
                      textShadow: `1px 1px 20px rgba(0, 0, 0, 0.48)`,
                    }}
                  >
                    <h3>{rfp.node.frontmatter.title}</h3>
                  </button>
                  <p style={{ paddingTop: `1rem` }}>
                    {rfp.node.frontmatter.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </Layout>
  </Fragment>
)

export const rfpPageQuery = graphql`
  query RFPQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { category: { eq: "rfps" } } }
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
export default RFP
