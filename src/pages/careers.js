import React, { Fragment } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"

const CareerOpportunities = ({data}) => (
  <Fragment>
    <HeroHeader />
    <SEO title="Career Opportunities" description="Career opportunities with WC Partners and jobs in the Marshfield area from providers who also help support individuals and families with developmental disabilities who are hiring." />
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
            Thank you for your interest but at this time there are no available positions with WC Partners. Future career opportunities will
            be posted on this page.
          </p>
        </section>
        <section style={{borderTop: `1px solid #e2e2e6`, maxWidth: `1200`,}}>
          <h2 style={{textAlign: `center`, paddingTop: `1.5rem`, lineHeight: `2rem`}}>Interested in Work that is Fun, Life Changing, and Close to Home? Look No Further! Work with One of the Great Providers Serving Our Area Today!</h2>
          <ul style={{ listStyle: `none` }}>
        {data.allProvidersJson.edges.map(provider => (
          <li className="event-box" key={provider.node.id}>
            <div className="grid">
              <div
                style={{
                  gridColumn: `span 4`,
                  alignContent: `middle`,
                  margin: `auto`
                }}
              >
                <img
                  src={provider.node.thumbnailImage}
                  alt={provider.node.name + " logo"}
                  style={{
                    maxWidth: `75%`,
                    maxHeight: `75%`,
                    margin: `0 auto`,
                    display: `flex`,
                  }}
                />
              </div>
              <div style={{ gridColumn: `span 8`, gridColumnEnd: `-1` }}>
                <h3>{provider.node.name}{"   "}<strong style={{color: `white`, backgroundColor: `#2D5B2D`, padding: `0.3rem`, fontSize: `1rem`}}>Actively Hiring!</strong></h3>
                <p>{provider.node.description}</p>
                <p>
                  You can learn more about this provider by <a href={provider.node.url}>visiting their job listings here.</a>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
        </section>
      </main>
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
    allProvidersJson(sort: {fields: name, order: ASC}) {
      edges {
        node {
          name
          description
          thumbnailImage
          url
          activelyHiring
          id
        }
      }
    }
  }
`

export default CareerOpportunities
