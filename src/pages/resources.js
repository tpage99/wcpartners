import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import QuickContact from "../components/quick-contact"
import Footer from "../components/footer"
import Search from "../components/searchBox"

import pdf from "./resources/March2020.pdf"

const Resources = ({ data }) => (
  <Fragment>
    <HeroHeader />
    <SEO title="Resources" />
    <Layout>
      <main>
        <section>
          <h1>Resources for Webster County</h1>
          <p>
            The activity list is created by Support Coordinators to include
            various community activities that individuals and their families WC
            Partners works with may enjoy.{" "}
          </p>
          <div>
            <button className="big-btn">
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: `#fff`,
                  fontSize: `2.5rem`,
                  fontWeight: `bold`,
                }}
              >
                Activity List
              </a>
            </button>
          </div>
          <p style={{ margin: `1rem 0`, fontSize: `0.9rem` }}>
            <em>Click to download. Last updated February 27, 2020.</em>
          </p>
          <p>
            The activity list is made available in a PDF format that opens in
            another page in your browser. If you require a more accessible
            format, please contact us.
          </p>
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
