import React, { Fragment } from "react"
import { graphql } from "gatsby"
import NewsSEO from "../components/seoNews"
import Layout from "../components/layout"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

export default function eventTemplate({ data }) {
  const { markdownRemark: news } = data
  // above is same as using const news = data.markdownRemark;
  return (
    <Fragment>
      <HeroHeader />
      <NewsSEO
        title={news.frontmatter.title}
        description={news.frontmatter.description}
        pageUrl={"https://www.wc-partners.net" + news.frontmatter.path}
        coverImg={news.frontmatter.coverImage}
      />
      <main>
        <Layout>
          <img
            src={news.frontmatter.coverImage}
            alt={news.frontmatter.imageAlt}
            style={{
              maxWidth: `85%`,
              maxHeight: `85%`,
              margin: `0 auto`,
              display: `flex`,
              padding: `1.5rem`,
            }}
          />
          <h2>{news.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: news.html }} />
          <Footer />
        </Layout>
      </main>
    </Fragment>
  )
}

export const newsQuery = graphql`
  query NewsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        coverImage
        imageAlt
        date
      }
    }
  }
`
