import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

const CareerOpportunities = ({ data }) => (
  <Fragment>
    <HeroHeader />
    <SEO title="Career Opportunities" />
    <Layout>
      <main>
        <h1>Career Opportunities</h1>
        <p style={{ textAlign: `center`, paddingTop: `2rem` }}>
          Select the link to the job description below for more information
          about available positions for WC Partners (Webster County SB40 Board
          for the Developmentally Disabled). See job description information to
          learn how to apply for position opening.
        </p>
        <ul style={{ listStyle: `none` }}>
          {data.allMarkdownRemark.edges.map(careers => (
            <li className="resource-box" key={careers.node.id}>
              <h3 style={{ color: `black` }}>
                {careers.node.frontmatter.title}
              </h3>
              <p style={{ paddingTop: `1rem` }}>
                {careers.node.frontmatter.description}
              </p>
              <Link
                to={careers.node.frontmatter.path}
                style={{ textDecoration: `none` }}
              >
                <button
                  style={{
                    backgroundColor: `#2d5b2d`,
                    color: `white`,
                    marginBottom: `0`,
                    padding: `0.5em 0.75em 0.5em 0.75em`,
                    textDecoration: `underline`,
                    boxShadow: `0 0 10px rgba(0, 0, 0, 0.48)`,
                    textShadow: `1px 1px 20px rgba(0, 0, 0, 0.48)`,
                  }}
                >
                  Job Description
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </Layout>
  </Fragment>
)

export const pageQuery = graphql`
  query CareersQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { category: { eq: "careers" } } }
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

export default CareerOpportunities
