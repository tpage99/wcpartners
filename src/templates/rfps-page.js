import React, { Fragment } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroHeader from "../components/Navbar/heroHeader"

export default function rfpsTemplate({ data }) {
  const { markdownRemark: rfps } = data
  // above is same as using const careers = data.markdownRemark;
  return (
    <Fragment>
      <SEO
        title={rfps.frontmatter.title}
        description={rfps.frontmatter.description}
        pageUrl={"https://www.wc-partners.net" + rfps.frontmatter.path}
      />
      <HeroHeader />
      <main>
        <Layout>
          <h1 style={{ textAlign: `center` }}>
            WC Partners | Request for Proposal
          </h1>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: rfps.html }} />
        </Layout>
      </main>
    </Fragment>
  )
}

export const rfpPageQuery = graphql`
  query RFPByPath($path: String!) {
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
