import React, { Component } from "react"
import { Link } from "gatsby"

import JenImage from "./jenniferImage"

export default class hiring extends Component {
  render() {
    return (
      <section style={{ textAlign: `center` }}>
        <hr />
        <div className="grid">
          <div
            style={{
              gridColumn: `span 5`,
              gridColumnStart: `0`,
              paddingBottom: `1.5rem`,
            }}
            className="event-img"
          >
            <JenImage />
          </div>
          <Link
            to="/careers"
            style={{
              margin: `1.5rem auto`,
              padding: `1.5rem`,
              color: `black`,
              gridColumn: `span 7`,
              alignSelf: `center`,
              textDecoration: `none`,
            }}
          >
            <h3 style={{ fontSize: `2.5rem`, textDecoration: `underline` }}>
              We're Hiring!
            </h3>
            <p>
              Learn about open positions and how to apply to work at WC
              Partners.
            </p>
          </Link>
        </div>
      </section>
    )
  }
}
