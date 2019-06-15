import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroHeader"

const Resources = () => (
  <Fragment>
    <HeroHeader />
    <SEO title="Resources" />
    <Layout>
      <h1>This is the Resources Page <span role="img" aria-label="rocket book laughing emojis">🚀📕😂</span></h1>

      <p>This is where we'll put information about resources for the Webster County community.</p>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </Fragment>

)

export default Resources
