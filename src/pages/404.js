import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

const NotFoundPage = () => (
  <Layout>
    <HeroHeader />
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Footer />
  </Layout>
)

export default NotFoundPage
