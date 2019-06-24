import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroHeader"
import Footer from "../components/footer"

const SCContact = () => (
  <Fragment>
    <HeroHeader />
    <SEO title="SC Contact" />
    <Layout>
      <main>
        <h1>WC Partners SC Contact</h1>
        <div className="grid">
          <div className="contact-start">
            <img
              src="https://res.cloudinary.com/tpage99/image/upload/v1561380321/WCPartners/avataaars.png"
              alt="profile image"
              className="contact-photo"
            />
          </div>
          <div className="contact-info">
            <p>
              <h3>SC Name, Support Coordinator</h3>
              Email
              <br />
              Phone
            </p>
          </div>
          <div className="contact-start">
            <img
              src="https://res.cloudinary.com/tpage99/image/upload/v1561380321/WCPartners/avataaars.png"
              alt="profile image"
              className="contact-photo"
            />
          </div>
          <div className="contact-info">
            <p>
              <h3>SC Name, Support Coordinator</h3>
              Email
              <br />
              Phone
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  </Fragment>
)

export default SCContact
