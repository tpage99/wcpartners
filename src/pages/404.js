import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

const NotFoundPage = () => (
  <>
    <HeroHeader />
    <SEO title="404: Not found" />
    <Layout>
      <h1>NOT FOUND</h1>
      <p>
        Terribly sorry. But appears that you've tried to go to a page that no
        longer exists. Here's a list of pages that you may have meant to go to:
      </p>
      <ul style={{ lineHeight: `2.5rem` }}>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/about">About page</Link>
        </li>
        <li>
          <Link to="/resources">Resources page</Link>
        </li>
        <ul style={{ marginBottom: `0` }}>
          <li>
            <Link to="/resources/accessibility">Accessibility resources</Link>
          </li>
          <li>
            <Link to="/resources/activities">Activities resource</Link>
          </li>
          <li>
            <Link to="/resources/apps">Apps resources</Link>
          </li>
          <li>
            <Link to="/resources/community-events">
              Community events resources
            </Link>
          </li>
          <li>
            <Link to="/resources/education">Education resources</Link>
          </li>
          <li>
            <Link to="/resources/financial">Financial resources</Link>
          </li>
          <li>
            <Link to="/resources/food">Food resources</Link>
          </li>
          <li>
            <Link to="/resources/guardianship">Guardianship resources</Link>
          </li>
          <li>
            <Link to="/resources/housing">Housing resources</Link>
          </li>
          <li>
            <Link to="/resources/medicaid">Medicaid resources</Link>
          </li>
          <li>
            <Link to="/resources/online-learning">
              Online learning resources
            </Link>
          </li>
          <li>
            <Link to="/resources/safety-products">
              Safety products resources
            </Link>
          </li>
          <li>
            <Link to="/resources/transportation">Transportation resources</Link>
          </li>
          <li>
            <Link to="/resources/utilities">Utilities resources</Link>
          </li>
        </ul>
        <li>
          <Link to="/events">Events page</Link>
        </li>
        <ul style={{ marginBottom: `0` }}>
          <li>
            <Link to="/events/sign-up">Events sign-up</Link>
          </li>
        </ul>
        <li>
          <Link to="/contact">Contact page</Link>
        </li>
        <ul style={{ marginBottom: `0` }}>
          <li>
            <Link to="/sc-contact">
              Support Coordinator contact information
            </Link>
          </li>
        </ul>
        <li>
          <Link to="/careers">Careers page</Link>
        </li>
      </ul>
      <p>
        If you are having difficulty navigating the site, or finding specific
        information, contact us by phone or email. Visit our{" "}
        <Link to="/contact">Contact page</Link> for information on how to
        contact the office or{" "}
        <Link to="/sc-contact">contact your Support Coordinator directly</Link>
      </p>
      <Footer />
    </Layout>
  </>
)

export default NotFoundPage
