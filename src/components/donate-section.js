import React, { Component, Fragment } from "react"
import { Link } from "gatsby"

export default class donateSection extends Component {
  render() {
    return (
      <Fragment>
        <section
          className="grid"
          style={{
            padding: `1.5rem 0 0.1rem 0`,
            borderTop: `1px solid #e2e2e6`,
            maxWidth: `1200`,
          }}
        >
          <div
            style={{
              gridColumn: `span 5`,
              gridColumnStart: `0`,
              paddingTop: `1rem`,
            }}
            className="event-img"
          >
            <img
              src="https://res.cloudinary.com/wcpartners/image/upload/v1602779090/donate_collage_et4scq.jpg"
              alt="collage of individuals participating in wc partners events at christmas time and also in painting activities as well as two support coordinators"
            />
          </div>
          <div
            style={{
              margin: `1.5rem auto`,
              padding: `1rem`,
              color: `black`,
              gridColumn: `span 7`,
              alignSelf: `center`,
              textDecoration: `none`,
            }}
          >
            <h2>Partner with Us!</h2>
            <p>
              Make a donation so you can help make today better for an
              individual or family who lives with a developmental disability.
            </p>
            <p>
              <span className="donate-link">
                <Link to="/donate">Donate Today</Link>
              </span>
            </p>
          </div>
        </section>
      </Fragment>
    )
  }
}
