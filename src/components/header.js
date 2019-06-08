import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2D5B2D`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `.85rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `inline-block`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <ul style={{
          textDecoration: `none`,
          listStyleType: `none`,
          alignItems: `center`,
          margin: `0 auto`,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `flex-end`,
          fontSize: `25px`,
        }}>
          <li><Link
            to="/about"
            style={{
              color: `white`,
              textDecoration: `none`,
              marginRight: `3rem`,
              verticalAlign: `sub`
            }}
          >
            About
        </Link></li>
          <li><Link
            to="/contact"
            style={{
              color: `white`,
              textDecoration: `none`,
              verticalAlign: `sub`
            }}
          >
            Contact
        </Link></li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
