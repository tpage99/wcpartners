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
              src="https://res.cloudinary.com/tpage99/image/upload/v1561652838/WCPartners/avataaars_1.png"
              alt="Clay McGranahan"
              className="contact-photo"
            />
          </div>
          <div className="contact-info">
            <h2>Clay McGranahan</h2>
            <p>
              <span className="contact-title">Executive Director</span>
              <br />
              Email: clay@wc-partners.net
              <br />
              Phone: (417) 830-4026
            </p>
          </div>
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
              <span className="contact-title">Support Coordinator</span>
              <br />
              Email: kdetherow@wc-partners.net
              <br />
              Phone: (417) 241-3287
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
              Email: jgiordano@wc-partners.net
              <br />
              Phone: (417) 241-3158
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
              Email: pthompson@wc-partners.net
              <br />
              Phone: (417) 209-1823
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
              Email: deanna@wc-partners.net
              <br />
              Phone: (417) 340-0815
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
              Email: tpage@wc-partners.net
              <br />
              Phone: (417) 830-0884
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  </Fragment>
)

export default SCContact
