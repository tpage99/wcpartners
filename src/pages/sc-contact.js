import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

const SCContact = () => (
  <Fragment>
    <HeroHeader />
    <SEO title="SC Contact" />
    <Layout>
      <main>
        <h1>Staff Contact Information</h1>
        <div className="grid">
          <div className="line-break"></div>
          <div className="contact-start">
            <img
              src="https://res.cloudinary.com/tpage99/image/upload/v1561653558/WCPartners/avataaars_2.png"
              alt="Katrina Detherow"
              className="contact-photo"
            />
          </div>
          <div className="contact-info">
            <h2>Katrina Detherow</h2>
            <p>
              <span className="contact-title">Executive Director</span>
              <br />
              Email:{" "}
              <a href="mailto:katrina@wcpartners.net">katrina@wcpartners.net</a>
              <br />
              Phone: <a href="tel:1-417-241-3287">(417) 241-3287</a>
            </p>
          </div>
          <div className="line-break"></div>
          <div className="contact-start">
            <img
              src="https://res.cloudinary.com/tpage99/image/upload/v1561653561/WCPartners/avataaars_3.png"
              alt="Jennifer Giordano"
              className="contact-photo"
            />
          </div>
          <div className="contact-info">
            <h2>Jennifer Giordano</h2>
            <p>
              <span className="contact-title">Support Coordinator</span>
              <br />
              Email:{" "}
              <a href="mailto:jennifer@wcpartners.net">
                jennifer@wcpartners.net
              </a>
              <br />
              Phone: <a href="tel:1-417-241-3158">(417) 241-3158</a>
            </p>
          </div>
          <div className="line-break"></div>
          <div className="contact-start">
            <img
              src="https://res.cloudinary.com/tpage99/image/upload/v1561653577/WCPartners/avataaars_4.png"
              alt="Paula Thompson"
              className="contact-photo"
            />
          </div>
          <div className="contact-info">
            <h2>Paula Thompson</h2>
            <p>
              <span className="contact-title">Support Coordinator</span>
              <br />
              Email:{" "}
              <a href="mailto:paula@wcpartners.net">paula@wcpartners.net</a>
              <br />
              Phone: <a href="tel:1-417-209-1823">(417) 209-1823</a>
            </p>
          </div>
          <div className="line-break"></div>
          <div className="contact-start">
            <img
              src="https://res.cloudinary.com/tpage99/image/upload/v1561653784/WCPartners/avataaars_5.png"
              alt="Deanna DeWitt"
              className="contact-photo"
            />
          </div>
          <div className="contact-info">
            <h2>Deanna DeWitt</h2>
            <p>
              <span className="contact-title">Support Coordinator</span>
              <br />
              Email:{" "}
              <a href="mailto:deanna@wcpartners.net">deanna@wcpartners.net</a>
              <br />
              Phone: <a href="tel:1-417-340-0815">(417) 340-0815</a>
            </p>
          </div>
          <div className="line-break"></div>
          <div className="contact-start">
            <img
              src="https://res.cloudinary.com/tpage99/image/upload/v1561380321/WCPartners/avataaars.png"
              alt="Taylor Page"
              className="contact-photo"
            />
          </div>
          <div className="contact-info">
            <h2>Taylor Page</h2>
            <p>
              <span className="contact-title">Support Coordinator</span>
              <br />
              Email:{" "}
              <a href="mailto:taylor@wcpartners.net">taylor@wcpartners.net</a>
              <br />
              Phone: <a href="tel:1-417-830-0884">(417) 830-0884</a>
            </p>
          </div>
          <div className="line-break"></div>
          <div className="contact-start">
            <img
              src="https://res.cloudinary.com/tpage99/image/upload/v1582126190/WCPartners/mike_avataaars.png"
              alt="Mike Mitchell"
              className="contact-photo"
            />
          </div>
          <div className="contact-info">
            <h2>Mike Mitchell</h2>
            <p>
              <span className="contact-title">Support Coordinator</span>
              <br />
              Email:{" "}
              <a href="mailto:mike@wcpartners.net">mike@wcpartners.net</a>
              <br />
              Phone: <a href="tel:1-417-894-5603">(417) 894-5603</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  </Fragment>
)

export default SCContact
