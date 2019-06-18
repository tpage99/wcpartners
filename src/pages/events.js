import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroHeader"
import Footer from "../components/footer"

const Events = () => (
  <Fragment>
    <HeroHeader />
    <SEO title="Events" />
    <Layout>
      <h1>This is going to be the events page</h1>
      <p>
        Couple of ideas on how to bring in data for activities and events. The
        simplest, but possibly most labor intensive and closed system, would be
        manual updates. This could be done with a simple list order or could
        create a JSON list and run GraphQL queries that show only specific
        dates.
      </p>
      <p>
        Consider pulling in activities from an API, rather than manual
        update/removal of old activities. This would not only resolve not having
        to manually remove/update but also allow for multiple authors. This can
        be done using:
        <ol>
          <li>
            <a
              href="https://www.facebook.com/pg/wcpartnerswebstercounty/events/"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <ul>
            <li>Already have/using WC Partners Facebook</li>
            <li>
              Decent coverage for events if page is liked or could promote
              through boosted posts
            </li>
          </ul>
          <li>
            <a href="https://www.eventbrite.com/" rel="noreferrer">
              EventBrite
            </a>
          </li>
          <ul>
            <li>Extensive coverage for Marshfield specific area</li>
            <li>Ticketing system (free for free events) already baked in</li>
          </ul>
          <li>Some other external CMS</li>
        </ol>
      </p>

      <Footer />
    </Layout>
  </Fragment>
)

export default Events
