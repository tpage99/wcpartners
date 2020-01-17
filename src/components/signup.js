import React, { Component } from "react"
import { Link } from "gatsby"

export default class signup extends Component {
  render() {
    return (
      <section>
        <div
          style={{
            margin: `2rem auto`,
            padding: `1.5rem 1.5rem 0.05rem 1.5rem`,
            maxWidth: `90%`,
            backgroundColor: `#2d5b2d`,
            color: `white`,
            boxShadow: `2px 5px 8px rgba(0, 0, 0, 0.48)`,
            textAlign: `center`,
          }}
        >
          <h2>Interested in signing up for an upcoming event or class?</h2>
          <p>
            Visit our{" "}
            <Link to="events/sign-up" style={{ color: `white` }}>
              Sign-Up Page
            </Link>{" "}
            for future classes and events such as Project STIR, Music Therapy,
            or Art classes. If you have difficulty signing up online,{" "}
            <Link to="/sc-contact" style={{ color: `white` }}>
              Contact your Support Coordinator
            </Link>{" "}
            for assistance.
          </p>
          <p>
            <Link
              to="events/sign-up"
              style={{ fontWeight: `bold`, color: `white` }}
            >
              Go to our Sign-Up Page
            </Link>
          </p>
        </div>
      </section>
    )
  }
}
