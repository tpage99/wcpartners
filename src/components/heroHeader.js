import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HeroHeader = ({ siteTitle }) => (
  <header style={{ paddingTop: `10px` }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
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
            className="nav-link"
          >
            ABOUT
        </Link></li>
          <li><Link
            to="/resources"
            style={{
              color: `white`,
              textDecoration: `none`,
              marginRight: `3rem`,
              verticalAlign: `sub`
            }}
            className="nav-link"
          >
            RESOURCES
        </Link></li>
          <li><Link
            to="/contact"
            style={{
              color: `white`,
              textDecoration: `none`,
              verticalAlign: `sub`
            }}
            className="nav-link"
          >
            CONTACT
        </Link></li>
        </ul>
      </div>
    </div>
  </header>
)

HeroHeader.propTypes = {
  siteTitle: PropTypes.string,
}

HeroHeader.defaultProps = {
  siteTitle: ``,
}

export default HeroHeader
