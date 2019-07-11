import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"
import ArtImage from "../components/artImage"

const About = () => (
  <Fragment>
    <HeroHeader />
    <SEO title="About" />
    <Layout>
      <div
        style={{ margin: `0 auto`, paddingBottom: `2rem`, maxWidth: `100%` }}
      >
        <ArtImage />
      </div>

      <h1>About WC Partners</h1>

      <p>
        WC Partners is the Webster County Senate Bill 40 Board. We provide
        support for Webster County citizens with developmental disabilities and
        their families. WC Partners also provides Targeted Case Management
        services through a private contract with the Missouri Department of
        Mental Health as well as funding support for Web-Co Custom Industries.
        WC Partners helps individuals with developmental disabilities acquire
        the services and supports they need to live and be employed in our
        community.
      </p>

      <h2>Our Mission</h2>

      <p>
        The mission of WC Partners is to enhance supports and empower choices
        for Webster County citizens with developmental disabilities.
      </p>

      <h2 id="SB40">Our History</h2>
      <p>
        In 2012, the Webster County SB 40 Board began providing targeted case
        management services for eligible individuals in Webster county in
        conjunction with The Next Step. In 2016, the Board made the decision to
        provide TCM services in Webster county and officially began as WC
        Partners.
      </p>

      <h2 id="TCM">What are TCM services?</h2>
      <p>
        WC Partners Support Coordinators work with the individual's support team
        to develop an individualized personal plan. The Personal Plan outlines
        the outcomes, action steps, background, and people responsible to assist
        with working toward each goal.
      </p>

      <h3>Who is eligible for TCM services?</h3>
      <p>
        Individuals who have been clinically diagnosed with a developmental
        disability or suspect they have a developmental disability can be
        eligible for TCM services. Contact the Springfield Regional Office to
        confirm eligibility and be referred to WC Partners TCM services. To
        learn more about TCM services, visit our{" "}
        <span className="strong-link">
          <Link to="/targeted-case-management">
            Targeted Case Management page
          </Link>
        </span>
        .
      </p>
      <Footer />
    </Layout>
  </Fragment>
)

export default About
