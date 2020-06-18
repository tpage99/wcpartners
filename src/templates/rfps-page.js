import React, { Fragment } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

export default function rfpsTemplate({ data }) {
  const { markdownRemark: rfps } = data
  // above is same as using const careers = data.markdownRemark;
  return (
    <Fragment>
      <HeroHeader />
      <SEO
        title={rfps.frontmatter.title}
        description={rfps.frontmatter.description}
      />
      <main>
        <Layout>
          <h1 style={{ textAlign: `center` }}>
            WC Partners | Request for Proposal
          </h1>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: rfps.html }} />
          <Footer />
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
