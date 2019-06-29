import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroHeader"
import Footer from "../components/footer"

const Events = ({ data }) => (
  <Fragment>
    <HeroHeader />
    <SEO title="Events" />
    <Layout>
      <h1>WC Partners Events</h1>
      <ul style={{ listStyle: `none` }}>
        {data.allEventsJson.edges.map(event => (
          <li className="resource-box" key={event.node.id}>
            <h3 className="resource-link">{event.node.title}</h3>
            <p>Date: {event.node.date}</p>
            <p>Time: {event.node.time}</p>
            <p style={{ paddingTop: `1rem` }}>
              {event.node.description}
              <br />
              You can learn more about this event here:{" "}
              <Link to={event.node.url} style={{ textDecoration: `none` }}>
                {event.node.title}
              </Link>
            </p>
          </li>
        ))}
      </ul>
      <Footer />
    </Layout>
  </Fragment>
)

export const pageQuery = graphql`
  query Events {
    allEventsJson {
      edges {
        node {
          date(formatString: "MMMM DD, YYYY")
          description
          id
          thumbnailImage
          time
          title
          url
        }
      }
    }
  }
`

export default Events
