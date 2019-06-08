import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>We are WC Partners</h1>
    <p>Welcome to the new website for WC Partners</p>
    <p>The mission of Webster County is to advocate, enhance services, and positively impact the lives of citizens with developmental disabilities.
</p>
    <div style={{ maxWidth: `350px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
