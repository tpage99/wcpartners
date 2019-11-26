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
          {` `}©{new Date().getFullYear()}. Contact WC Partners by phone at{" "}
          <a href="tel:1-417-630-0782">(417) 630-0782</a> or by email at{" "}
          <a href="mailto:info@wc-partners.net" aria-label="Email WC Partners">
            info@wc-partners.net
          </a>
        </p>
        <p>
          <strong>Office Address:</strong> 1329 Spur Drive, Suite 160,
          Marshfield, MO 65706
          <br />
          <strong>Mailing Address:</strong> PO Box 9, Marshfield, MO 65706
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
              <Link to="/a11y/">Accessibility</Link>
            </li>
            <li className="footer-link">
              <a href="https://abilitiesfirst.sharepoint.com/sites/WCP/SitePages/Home.aspx">
                Staff Login
              </a>
            </li>
            <li className="footer-link">
              <Link to="/resources/apps#wc-partners">Download the App</Link>
            </li>
          </ul>
        </div>
        <div style={{ margin: `1.8rem auto`, maxWidth: `150px` }}>
          <a href="https://www.facebook.com/wcpartnerswebstercounty/">
            <FBLogo />
          </a>
        </div>
      </footer>
    )
  }
}
