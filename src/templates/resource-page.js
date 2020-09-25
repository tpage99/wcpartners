import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroHeader from "../components/Navbar/heroHeader"
import QuickContact from "../components/quick-contact"

export default function Template({ data }) {
  const { markdownRemark: resource } = data
  // above is same as using const resource = data.markdownRemark;
  return (
    <Fragment>
      <HeroHeader />
      <SEO title={resource.frontmatter.title} />
      <main>
        <Layout>
          <h1>{resource.frontmatter.title} | Resources</h1>
          <div dangerouslySetInnerHTML={{ __html: resource.html }} />
          <QuickContact />
        </Layout>
      </main>
    </Fragment>
  )
}

export const resourceQuery = graphql`
  query ResourceByPath($path: String!) {
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
