import React, { Fragment } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

export default function careersTemplate({ data }) {
  const { markdownRemark: careers } = data
  // above is same as using const careers = data.markdownRemark;
  return (
    <Fragment>
      <HeroHeader />
      <SEO title={careers.frontmatter.title} />
      <main>
        <Layout>
          <h1 style={{ textAlign: `center` }}>
            WC Partners (Webster County SB40 Board for the Developmentally
            Disabled)
          </h1>
          <div dangerouslySetInnerHTML={{ __html: careers.html }} />
          <Footer />
        </Layout>
      </main>
    </Fragment>
  )
}

export const careersQuery = graphql`
  query CareersByPath($path: String!) {
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
