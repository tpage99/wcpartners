import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroHeader from "../components/Navbar/heroHeader"

export default function eventTemplate({ data }) {
  const { markdownRemark: event } = data
  // above is same as using const event = data.markdownRemark;
  return (
    <Fragment>
      <HeroHeader />
      <SEO title={event.frontmatter.title} description={event.frontmatter.description} />
      <main>
        <Layout>
          <h1>{event.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: event.html }} />
        </Layout>
      </main>
    </Fragment>
  )
}

export const eventQuery = graphql`
  query EventByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
      }
    }
  }
`
