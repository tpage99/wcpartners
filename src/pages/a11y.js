import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroHeader"
import Footer from "../components/footer"

const Contact = () => (
  <Fragment>
    <HeroHeader />
    <Layout>
      <SEO title="Accessibility Statement" />

      <h1 style={{ alignText: `center` }}>WC Partners Website Accessibilty Statement</h1>

      <p>WC Partners strives for an inclusive and accessible experience in all aspects of life for varying abilities. That's why, even our website is important to meet current accessibility standards. We strive to meet WCAG 2.0 AA requirements in order to make certain that everyone can access helpful information on our page.</p>

      <h2>A11y</h2>
      <p>Accessibility, often abbreviated to "a11y" to be more precise when searching for terminology specific to web development and design, is an often-overlooked aspect of web development. Most people do not realize that even access to websites must maintain at least some degree of accessibility and this right is protected under the American with Disabilities Act (ADA).</p>
      <Footer />
    </Layout>
  </Fragment>

)

export default Contact
