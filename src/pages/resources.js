import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

import pdf from "./resources/August2019.pdf"

const Resources = ({ data }) => (
  <Fragment>
    <HeroHeader />
    <SEO title="Resources" />
    <Layout>
      <main>
        <h1>Resources for Webster County</h1>
        <button>
          <h2 style={{ color: `#fff`, padding: `2rem 0 0 0` }}>
            <span className="big-btn">
              <a href={pdf}>Activity List</a>
            </span>
          </h2>
        </button>
        <p style={{ marginTop: `0`, paddingTop: `0`, fontSize: `0.9rem` }}>
          <em>Click to download. Last updated July 31, 2019</em>
        </p>
        <p>
          The activity list is created by Support Coordinators to include
          various community activities that individuals and their families WC
          Partners works with may enjoy.
        </p>
        <p style={{ textAlign: `center`, paddingTop: `2rem` }}>
          <em>
            Click on the links below to find more about available resources and
            information.
          </em>
        </p>
        <ul style={{ listStyle: `none` }}>
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
