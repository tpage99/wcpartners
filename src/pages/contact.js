import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />

    <h1>This is the Contact Page ☎️✉️📧</h1>

    <p>Maybe thow a contact form in here, phone number, and possibly a map with location information.</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
