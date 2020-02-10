import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

const CareerOpportunities = ({ data }) => (
  <Fragment>
    <HeroHeader />
    <SEO title="Career Opportunities" />
    <Layout>
      <main>
        <h1>Career Opportunities</h1>
        <hr />
        <p style={{ paddingTop: `2rem` }}>
          At this time, there are no open positions with WC Partners. Thank you
          for your interest. Future job postings will be made available on this
          page.
        </p>
      </main>
      <Footer />
    </Layout>
  </Fragment>
)

export default CareerOpportunities
