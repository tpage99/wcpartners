import React, { Component } from "react"
import { Link } from "gatsby"

export default class rfpNotice extends Component {
  render() {
    return (
      <section>
        <hr />
        <h2 style={{ textAlign: `center`, paddingTop: `2rem` }}>
          <span
            style={{
              backgroundColor: `#2d5b2d`,
              color: `white`,
              marginBottom: `0`,
              padding: `0.5em 0.75em 0.5em 0.75em`,
              textDecoration: `underline`,
              boxShadow: `0 0 10px rgba(0, 0, 0, 0.48)`,
              textShadow: `1px 1px 20px rgba(0, 0, 0, 0.48)`,
            }}
          >
            Request for Proposal
          </span>
        </h2>
        <p>
          <strong>Notice to Bidders</strong>
        </p>
        <p>
          The WC Partners/Webster County Senate Bill 40 Board is seeking sealed
          bids for the purpose of pre-construction services to work directly
          with current Architectural Firm and WC Partners Executive Director in
          preparation of construction of WC Partners new office location.
        </p>
        <p>
          All bids shall be received no later than 4:00pm on October 26, 2020.
          For a complete description of the request for proposals, please visit
          our{" "}
          <span className="strong-link">
            <Link to="/request-for-proposals">Request for Proposals page</Link>
          </span>
          .
        </p>
      </section>
    )
  }
}
