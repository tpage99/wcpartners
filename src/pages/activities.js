import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"

import GameNight from "../components/gameImg"
import ArtClass from "../components/artClassImg"
import Arcade from "../components/arcadeImg"

import EventsPaused from "../components/eventsPaused"

const Activities = ({ data }) => (
  <Fragment>
    <HeroHeader />
    <SEO title="Activities" />
    <Layout>
      <h1>WC Partners Activities</h1>
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

      <section className="address-grid">
        <div style={{ margin: `1rem auto` }}>
          <a
            href="/activities#events"
            className="feature-btn"
          ><span className="big-btn">WC Partners Activities</span></a>
          <p style={{marginTop: `1.5rem`, padding: `1rem 1.3rem 0 0`}}>
            These events, groups, activities, or classes are hosted by WC Partners' and take place at our office or online.
          </p>
        </div>
        <div style={{ margin: `1rem auto` }}>
          <Link
            to="/resources/community-activities/"
            className="feature-btn"><span className="big-btn">Community Activities</span></Link>
          <p style={{marginTop: `1.5rem`, paddingTop: `1rem`}}>
          Listing of open community activities, events, classes, or groups for individuals with developmental disabilities and their families within and around the Webster County area or online.
          </p>
        </div>
      </section>
      <p>
        Events listed below are hosted at WC Partners' office, unless otherwise
        noted. Some events may require prior registration. Contact your Support
        Coordinator for additional information.
      </p>
      <h2 style={{textAlign: `center`, fontSize: `2.2rem`, padding: `1.5rem 0`}} id="events">List of WC Partners Activities</h2>
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
      </ul>
      <Signup/> */}
      <EventsPaused />
    </Layout>
  </Fragment>
)

export const eventListQuery = graphql`
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

export default Activities
