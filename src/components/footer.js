import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class footer extends Component {
  render() {
    return (
      <footer style={{
        textAlign: `center`,
        marginTop: `1.5rem`,
        maringBottom: `40px`,
        paddingTop: `1.5rem`,
        paddingBottom: `40px`,
        borderTop: `1px solid #e2e2e6`
      }}>
        <p style={{ textAlign: `center` }}><em>Growing towards empowered futures for Webster County</em></p>
        © {new Date().getFullYear()}, Contact WC Partners by phone at (417) 630-0782 or by email at <a href="mailto:info@wc-partners.net">info@wc-partners.net</a>
        <div>
          <ul
            style={{
              display: `table`,
              textDecoration: `none`,
              listStyleType: `none`,
              margin: `0 auto`,
              paddingTop: `1.5rem`
            }}>
            <li className="footer-link">
              <Link to="/a11y/">Accessibility Statement</Link>
            </li>
            <li className="footer-link">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-link" style={{ paddingRight: `0` }}>
              <Link to="#">Site Map</Link>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}
