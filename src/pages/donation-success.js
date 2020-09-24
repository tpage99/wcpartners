import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"

const DonationSuccess = () => (
  <Fragment>
    <HeroHeader />
    <SEO title="Donation Successfully Completed" />
    <Layout>
      <div style={{ margin: `10rem auto` }}>
        <h1 style={{ textAlign: `center` }}>
          Thank You for Partnering With Us!
        </h1>
        <p>
          Your donation is going to make the lives of someone better today! We
          are grateful you have chosen to partner with us and we look forward to
          helping better the lives of others with your contribution. You should
          receive an email receipt for your donation.
        </p>
        <p>
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
    </Layout>
  </Fragment>
)

export default DonationSuccess
