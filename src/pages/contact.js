import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroHeader"
import Footer from "../components/footer"

const Contact = () => (
  <Fragment>
    <HeroHeader />
    <Layout>
      <SEO title="Contact" />

      <h1>This is the Contact Page <span role="img" aria-label="telephone email and mail emojis">☎️✉️📧</span></h1>

      <p>Maybe thow a contact form in here, phone number, and possibly a map with location information.</p>

      <Footer />
    </Layout>
  </Fragment>

)

export default Contact
