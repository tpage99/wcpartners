import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import QuickContact from "../components/quick-contact"
import Search from "../components/searchBox"

const Resources = ({ data }) => (
  <Fragment>
    <HeroHeader />
    <SEO title="Resources" description="Resources for individuals living in the Webster County area. Activities, online events, funding, accessible technology, Medicaid assistance, Food Stamps, and more." />
    <Layout>
      <main>
        <section>
          <h1>Resources for Webster County</h1>
          <p>
            Most events and activities on the activity list have been canceled
            due to COVID-19. In order to help serve the individuals and families
            we work with, we've compiled a list of resources and activities that
            can be done online to help create some normalcy in this difficult
            time.
            <br />
            <br />
            <ul>
              <li>
                For information on available online activities{" "}
                <Link to="/resources/covid-19#stories-and-activities">
                  click here
                </Link>
              </li>
              <li>
                For online tours and/or field trip-type activities{" "}
                <Link to="/resources/covid-19#virtual-tours">click here</Link>
              </li>
              <li>
                For online health and fitness activities{" "}
                <Link to="/resources/covid-19#health-and-fitness">
                  click here
                </Link>
              </li>
              <li>
                For online educational activities{" "}
                <Link to="/resources/covid-19#educational-resources">
                  click here
                </Link>
              </li>
            </ul>
          </p>
          <div style={{ margin: `2rem 0`, padding: `1.5rem 0` }}>
            <Link
              to="/resources/covid-19"
              className="feature-btn"
            >
              <span className="big-btn">All COVID-19 Resources</span>
            </Link>
          </div>
        </section>
        <section>
          <div
            style={{
              background: `#2d5b2d`,
              margin: `auto`,
              alignContent: `center`,
            }}
          >
            <Search />
          </div>
          <ul style={{ listStyle: `none`, borderBottom: `1px solid #e2e2e6` }}>
            {data.allMarkdownRemark.edges.map(resource => (
              <li className="resource-box" key={resource.node.id}>
                <Link
                  to={resource.node.frontmatter.path}
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
                    <h3>{resource.node.frontmatter.title}</h3>
                  </button>
                  <p style={{ paddingTop: `1rem` }}>
                    {resource.node.frontmatter.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <QuickContact />
      </main>
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
