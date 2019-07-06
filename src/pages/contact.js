import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

const Contact = () => (
  <Fragment>
    <HeroHeader />
    <SEO title="Contact" />
    <div
      style={{
        position: `absolute`,
        width: `100%`,
        height: `100%`,
        background: `linear-gradient(200deg, #2D5B2D 55.52%, rgba(255, 255, 255, 0) 55.52%), #FFFFFF`,
      }}
    >
      <Layout>
        <div
          style={{
            backgroundColor: `#fff`,
            padding: `3rem`,
            boxShadow: `0 0 10px rgba(0, 0, 0, 0.48)`,
          }}
        >
          <h1 style={{ textAlign: `center` }}>CONTACT US</h1>
          <p style={{ paddingBottom: `1rem`, textAlign: `center` }}>
            You can contact the office or{" "}
            <span className="strong-link">
              <Link to="/sc-contact">contact your Support Coordinator</Link>
            </span>{" "}
            directly.
          </p>
          <div style={{ textAlign: `center` }}>
            Administrative office hours are Monday-Friday from 9am to 1pm.
            <div
              style={{
                listStyle: `none`,
                textDecoration: `none`,
                display: `block`,
              }}
            >
              <div style={{ display: `inline-block`, padding: `0.5rem` }}>
                <span style={{ fontWeight: `bold` }}>Phone:</span> (417)
                630-0782
              </div>
              <div style={{ display: `inline-block`, padding: `0.5rem` }}>
                <span style={{ fontWeight: `bold` }}>Fax:</span> (417) 630-0783
              </div>
            </div>
          </div>
          <div className="address-grid">
            <div style={{ margin: `0 auto` }}>
              <h2 style={{ marginBottom: `0.5rem` }}>Mailing address</h2>
              <p>
                PO Box 9<br />
                Marshfield, MO 65706
              </p>
            </div>
            <div style={{ margin: `0 auto` }}>
              <h2 style={{ marginBottom: `0.5rem` }}>Office address</h2>
              <p>
                1329 Spur Drive
                <br />
                Suite 160
                <br />
                Marshfield, MO 65706
              </p>
            </div>
          </div>
          <form
            className="contact"
            name="contact"
            method="POST"
            action="/success"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <div className="honey">
              <label>
                Don’t fill this out if you're human:
                <input type="hidden" name="form-name" value="contact" />
              </label>
            </div>
            <div className="form-input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name (required)"
                aria-required="true"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email (required)"
                aria-required="true"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="(417) 555-5555"
              />
            </div>
            <div className="form-input">
              <label htmlFor="message">Message</label>
              <textarea
                name="text-field"
                rows="4"
                id="message"
                placeholder="Write your message here..."
              />
            </div>
            <div className="form-input">
              <button type="submit" aria-describedby="submit-form">
                Submit
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </Layout>
    </div>
  </Fragment>
)

export default Contact
