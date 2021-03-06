import React, { Fragment } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"

const RFP = ({ data }) => (
  <Fragment>
    <HeroHeader />
    <SEO title="Request for Proposals" />
    <Layout>
      <main>
        <h1>Request for Proposals</h1>
        <hr />
        <section>
          {/* <ul style={{ listStyle: `none` }}>
            {data.allMarkdownRemark.edges.map(rfp => (
              <li
                style={{
                  margin: `2rem 1rem`,
                  border: `3px solid #c1c1c4`,
                  padding: `1rem`,
                  boxShadow: `0 0 10px rgba(0, 0, 0, 0.48)`,
                }}
                key={rfp.node.id}
              >
                <Link
                  to={rfp.node.frontmatter.path}
                  style={{ textDecoration: `none` }}
                >
                  <h2
                    style={{
                      backgroundColor: `#2d5b2d`,
                      color: `white`,
                      marginBottom: `0`,
                      padding: `0.5rem 0.75rem`,
                      textDecoration: `underline`,
                    }}
                  >
                    {rfp.node.frontmatter.title}
                  </h2>
                  <p style={{ paddingTop: `1rem` }}>
                    {rfp.node.frontmatter.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul> */}
          <p style={{ paddingTop: `2rem` }}>
            Thank you for your interest to work with WC Partners. At this time,
            there are no open requests for proposals. Future RFPs will be posted on this page.
          </p>
        </section>
      </main>
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
