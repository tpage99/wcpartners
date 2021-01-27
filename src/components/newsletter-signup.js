import React, { Component } from "react"
import { Link } from "gatsby"

export default class NewsletterSignup extends Component {
  render() {
    return (
      <section className="card">
        <div style={{textAlign: `center`, paddingBottom: `2rem`}}>
          <p>
            Want to get the latest information about WC Partners straight to your email inbox?
            </p>
            <Link to="/newsletter"
              style={{ fontWeight: `bold`, color: `white`, fontSize: `1.75rem` }}
            >
              Sign up for WC Partners Chat
            </Link>
        </div>
      </section>
    )
  }
}
