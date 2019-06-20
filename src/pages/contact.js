import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroHeader"
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
          <h1 style={{ textAlign: `center` }}>Contact Us</h1>
          <p>
            Administrative office hours are Monday-Friday from 9am to 1pm.
            <ul style={{ listStyle: `none`, textDecoration: `none` }}>
              <li>Phone: (417) 630-0782</li>
              <li>Fax: (417) 630-0783</li>
            </ul>
          </p>
          <div
            style={{
              listStyle: `none`,
              display: `grid`,
              gridTemplateColumns: `1fr 1fr`,
              margin: `0 auto`,
              maxWidth: `100%`,
              paddingBottom: `3rem`,
            }}
          >
            <div style={{ margin: `0 auto` }}>
              <h2>Mailing address</h2>
              <p>
                PO Box 9<br />
                Marshfield, MO 65706
              </p>
            </div>
            <div style={{ margin: `0 auto` }}>
              <h2>Office address</h2>
              <p>
                1329 Spur Drive
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
            <div>
              <label>
                Don’t fill this out if you're human:
                <input type="hidden" name="form-name" value="contact" />
              </label>
            </div>
            <div>
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
            <div>
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
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="(417) 555-5555"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="text-field"
                rows="3"
                id="message"
                placeholder="Write your message here..."
              />
            </div>
            <div>
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
