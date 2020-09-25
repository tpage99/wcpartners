import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"

const DonationCanceled = () => (
  <Fragment>
    <HeroHeader />
    <SEO title="Donation Canceled" />
    <Layout>
      <div style={{ margin: `10rem auto` }}>
        <h1 style={{ textAlign: `center` }}>O, No! Something Went Wrong...</h1>
        <p>
          Either you chose to cancel your donation, or your donation did not go
          through successfully. If you attempted to partner with us by donating
          and your transaction did not go through please try again or contact us
          if there is a problem with the website.
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

export default DonationCanceled
