import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

const Events = ({ data }) => (
  <Fragment>
    <HeroHeader />
    <SEO title="Events" />
    <Layout>
      <h1>WC Partners Events</h1>
      <p>
        All events are hosted at WC Partners' office, unless otherwise denoted.
      </p>
      <ul style={{ listStyle: `none` }}>
        {data.allEventsJson.edges.map(event => (
          <li className="resource-box" key={event.node.id}>
            <div className="grid">
              <div
                style={{
                  gridColumn: `span 4`,
                  alignContent: `middle`,
                  verticalAlign: `sub`,
                }}
              >
                <img
                  src={event.node.thumbnailImage}
                  alt={event.node.title}
                  style={{
                    maxWidth: `80%`,
                    maxHeight: `80%`,
                  }}
                />
              </div>
              <div style={{ gridColumn: `span 8`, gridColumnEnd: `-1` }}>
                <h3 className="resource-link">{event.node.title}</h3>
                <p style={{ paddingBottom: `0`, margin: `0` }}>
                  Date: {event.node.date}
                </p>
                <p>Time: {event.node.time}</p>
                <p style={{ paddingTop: `1rem` }}>{event.node.description}</p>
                <p>
                  You can learn more about this event here:{" "}
                  <Link to={event.node.url} style={{ textDecoration: `none` }}>
                    {event.node.title}
                  </Link>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Footer />
    </Layout>
  </Fragment>
)

export const pageQuery = graphql`
  query Events {
    allEventsJson(sort: { fields: date, order: ASC }) {
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
