import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the WC Partners Website!</h1>
    <p>WC Partners is the local SB 40 Board for Webster County. To learn more visit our     <Link to="/about/">About page</Link>.
</p>
    <div style={{ maxWidth: `350px`, margin: `0 auto` }}>
      <Image />
    </div>
    <p style={{ textAlign: `center` }}><em>Growing towards empowered futures for Webster County</em></p>
    <div style={{
      background: `#48b04c`,
      paddingTop: `25px`,
      paddingBottom: `25px`,
      textAlign: `center`
    }}>
      <h1>Why We're Here</h1>
      <p>The Webster County SB40 Board exists to help support individuals and families with developmental disabilities. By promoting natural and state paid resources, individuals with developmental disabilities can live empowered and fulfilling lives living their idea of a good life.</p>
    </div>
    <div className="circle-link">
      <a href="#">Targeted Case Management</a>
    </div>
    <div>
      <button>Community Resources</button>
      <button>SB40 History</button>
      <button>Social Activity/Events</button>
    </div>
  </Layout>
)

export default IndexPage
