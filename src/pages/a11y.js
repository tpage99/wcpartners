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
      <h1 style={{ alignText: `center` }}>Website Accessibility Statement</h1>
      <p>
        WC Partners strives for an inclusive and accessible experience in all
        aspects of life for varying abilities. That's why it is important to
        meet current accessibility standards, even with our website. We strive
        to meet{" "}
        <a
          href="https://www.w3.org/TR/WCAG20/"
          aria-label="Learn more about web accessibility standards"
          rel="noreferrer"
        >
          WCAG 2.0 AA
        </a>{" "}
        requirements in order to make certain that everyone can access helpful
        information on our page, the individuals and families we serve can be
        better informed, and because it is the{" "}
        <span style={{ fontStyle: `italic`, textDecoration: `underline` }}>
          right
        </span>{" "}
        thing to do.
      </p>
      <p>
        Even with standards in place, it is true that we're not perfect. If you
        have information or sugestions on how we can provide a more accessible
        experience for our users please feel free to reach out to{" "}
        <a href="mailto:info@wc-partners.net" aria-label="Email WC Partners">
          info@wc-partners.net
        </a>
        .
      </p>

      <h2>A11y</h2>
      <p>
        Accessibility, often abbreviated to "a11y" to be more precise when
        searching for terminology specific to web development and design, is an
        often-overlooked aspect of web development. Most people do not realize
        that even access to websites must maintain at least some degree of
        accessibility and this right is protected under the American with
        Disabilities Act (ADA).
      </p>
      <Footer />
    </Layout>
  </Fragment>
)

export default Contact
