import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"

const A11y = () => (
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
        <a href="mailto:contact@wcpartners.net" aria-label="Email WC Partners">
          contact@wcpartners.net
        </a>
        .
      </p>
    </Layout>
  </Fragment>
)

export default A11y
