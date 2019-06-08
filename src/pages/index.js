import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Webster County TCM Services</h1>
    <p>Welcome to the new website for WC Partners.</p>
    <p>The mission of Webster County is to advocate, enhance services, and positively impact the lives of citizens with developmental disabilities.
</p>
    <div style={{ maxWidth: `350px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to the About page</Link>
  </Layout>
)

export default IndexPage
