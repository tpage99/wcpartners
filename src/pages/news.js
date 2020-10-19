import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"

import Headline from "../components/headline"

const News = ({ data }) => (
  <Fragment>
    <Headline />
    <HeroHeader />
    <SEO title="News" description="Updates, media coverage, and accomplishments from WC Partners." />
    <Layout>
      <h1>WC Partners News</h1>
      <p>Accomplishments, updates, and media coverage for WC Partners.</p>
      <ul style={{ listStyle: `none` }}>
        {data.allMarkdownRemark.edges.map(news => (
          <li className="event-box" key={news.node.id}>
            <div className="grid">
              <div
                style={{
                  gridColumn: `span 4`,
                  alignContent: `middle`,
                  verticalAlign: `sub`,
                }}
              >
                <img
                  src={news.node.frontmatter.coverImage}
                  alt={news.node.frontmatter.imageAlt}
                  style={{
                    maxWidth: `80%`,
                    maxHeight: `80%`,
                    margin: `0 auto`,
                    display: `flex`,
                  }}
                />
              </div>
              <div
                style={{
                  gridColumn: `span 8`,
                  gridColumnEnd: `-1`,
                }}
              >
                <h3>{news.node.frontmatter.title}</h3>
                <p style={{ paddingBottom: `0`, margin: `0` }}>
                  Posted {news.node.frontmatter.date}
                </p>
                <p style={{ paddingTop: `1rem` }}>
                  {news.node.frontmatter.description}
                </p>
                <p>
                  <span className="strong-link">
                    <Link to={news.node.frontmatter.path}>
                      Read more about this post...
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  </Fragment>
)

export const newsPageQuery = graphql`
  query newsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { category: { eq: "news" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            description
            coverImage
            imageAlt
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default News
