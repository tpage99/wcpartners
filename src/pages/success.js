import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

const Contact = () => (
  <Fragment>
    <HeroHeader />
    <SEO title="Success" />
    <Layout>
      <div style={{ margin: `10rem auto` }}>
        <h1 style={{ textAlign: `center` }}>
          Your Form Was Successfully Submitted!
        </h1>
        <p>
          Thank you for contacting us. Someone will reach out to you shortly.
          Until then, feel free to continue browsing our website by returning to
          the{" "}
          <span className="strong-link">
            <Link to="/">Home page</Link>
          </span>{" "}
          or visit our{" "}
          <a href="https://www.facebook.com/wcpartnerswebstercounty/">
            Facebook page
          </a>
          .
        </p>
      </div>
      <Footer />
    </Layout>
  </Fragment>
)

export default Contact
