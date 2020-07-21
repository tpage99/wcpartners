import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

import GameNight from "../components/gameImg"
import ArtClass from "../components/artClassImg"
import Arcade from "../components/arcadeImg"
import Signup from "../components/signup"
import Headline from "../components/headline"

import EventsPaused from "../components/eventsPaused"
import RFPNotice from "../components/rfpNotice"

const Events = ({ data }) => (
  <Fragment>
    <Headline />
    <HeroHeader />
    <SEO title="Events" />
    <Layout>
      <h1>WC Partners Events</h1>
      <div className="grid">
        <div className="events-grid event-img">
          <GameNight />
        </div>
        <div className="events-grid event-img">
          <ArtClass />
        </div>
        <div className="events-grid event-img">
          <Arcade />
        </div>
      </div>
      <p>
        Events listed below are hosted at WC Partners' office, unless otherwise
        noted. Some events may require prior registration. Contact your Support
        Coordinator for additional information.
      </p>
      <p>
        For more information about other local events see our{" "}
        <span className="strong-link">
          <Link to="/resources/community-events/">Community Events</Link>
        </span>{" "}
        page.{" "}
      </p>
      <p>
        For more information about activities in the community, see our activity
        list located at the top of the{" "}
        <span className="strong-link">
          <Link to="/resources/">Resources</Link>
        </span>{" "}
        page.
      </p>
      <Signup />
      {/* <ul style={{ listStyle: `none` }}>
        {data.allEventsJson.edges.map(event => (
          <li className="event-box" key={event.node.id}>
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
                  alt={event.node.title + " logo"}
                  style={{
                    maxWidth: `80%`,
                    maxHeight: `80%`,
                    margin: `0 auto`,
                    display: `flex`,
                  }}
                />
              </div>
              <div style={{ gridColumn: `span 8`, gridColumnEnd: `-1` }}>
                <h3>{event.node.title}</h3>
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
      </ul> */}
      <EventsPaused />
      <RFPNotice />
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
