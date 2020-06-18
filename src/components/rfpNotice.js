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
          The Webster County Senate Bill 40 Board is seeking sealed bids for the
          purpose of Architectural Design for the design of WC Partners Agency
          office building.
        </p>
        <p>
          All bids shall be sealed and may be turned into WC Partners Office in
          person, by mail, or by email to Executive Director Katrina Detherow.
          Bids will no longer be accepted after 4:00pm August 3rd, 2020. The
          Senate Bill 40 Board reserves the right to waive any informality or to
          reject any and all bids.
        </p>
        <p>
          For a complete description of the request for proposals please visit
          our{" "}
          <span className="strong-link">
            <Link to="/request-for-proposals">Request for proposals page</Link>
          </span>
          .
        </p>
      </section>
    )
  }
}
