import React, { Fragment } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

const CareerOpportunities = () => (
  <Fragment>
    <HeroHeader />
    <SEO title="Career Opportunities" />
    <Layout>
      <main>
        <h1>Career Opportunities</h1>
        <hr />
        <section>
          {/* <ul style={{ listStyle: `none` }}>
            {data.allMarkdownRemark.edges.map(job => (
              <li style={{ margin: `2rem 1rem` }} key={job.node.id}>
                <Link
                  to={job.node.frontmatter.path}
                  style={{ textDecoration: `none` }}
                >
                  <h3>
                    <span
                      style={{
                        backgroundColor: `#2d5b2d`,
                        color: `white`,
                        marginBottom: `0`,
                        padding: `0.5rem 0.75rem`,
                        textDecoration: `underline`,
                        boxShadow: `0 0 10px rgba(0, 0, 0, 0.48)`,
                        textShadow: `1px 1px 20px rgba(0, 0, 0, 0.48)`,
                      }}
                    >
                      {job.node.frontmatter.title}
                    </span>
                  </h3>
                  <p style={{ paddingTop: `1rem` }}>
                    {job.node.frontmatter.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul> */}
          <p style={{ paddingTop: `2rem` }}>
            Thank you for your interest to work at WC Partners. At this time,
            there are no available positions. Future career opportunities will
            be posted on this page.
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  </Fragment>
)

export const jobPageQuery = graphql`
  query JOBQuery {
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
