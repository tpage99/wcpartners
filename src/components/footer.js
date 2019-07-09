import React, { Component } from "react"
import { Link } from "gatsby"

import FBLogo from "../components/fbImage"

export default class footer extends Component {
  render() {
    return (
      <footer
        style={{
          textAlign: `center`,
          marginTop: `1.5rem`,
          paddingTop: `1.5rem`,
          paddingBottom: `40px`,
          borderTop: `1px solid #e2e2e6`,
          madWidth: `1200`,
        }}
      >
        <p style={{ textAlign: `center` }}>
          <em>Growing towards empowered futures for Webster County</em>.
        </p>
        <p>
          <span style={{ fontWeight: `bold` }}>WC Partners </span>
          {` `}©{new Date().getFullYear()}. Contact WC Partners by phone at
          (417) 630-0782 or by email at{" "}
          <a href="mailto:info@wc-partners.net" aria-label="Email WC Partners">
            info@wc-partners.net
          </a>
        </p>
        <div>
          <ul
            style={{
              display: `table`,
              textDecoration: `none`,
              listStyleType: `none`,
              margin: `0 auto`,
              paddingTop: `0.5rem`,
            }}
          >
            <li className="footer-link">
              <Link to="/a11y/">Accessibility Statement</Link>
            </li>
            <li className="footer-link">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-link">
              <Link to="/about">About</Link>
            </li>
            <li className="footer-link">
              <Link to="/resources">Resources</Link>
            </li>
            <li className="footer-link">
              <Link to="/events">Events</Link>
            </li>
            <li className="footer-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div style={{ margin: `2rem auto`, maxWidth: `150px` }}>
            <a href="https://www.facebook.com/wcpartnerswebstercounty/">
              <FBLogo />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}
