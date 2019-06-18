import { Link } from "gatsby"
import React from "react"

const HeroHeader = () => (
  <header style={{ padding: `1rem`, background: `#2D5B2D` }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `inline-block`,
            verticalAlign: `middle`,
          }}
        >
          {" "}
          <img
            src="https://res.cloudinary.com/tpage99/image/upload/v1560421417/WCPartners/wclogo.png"
            alt="wc partners logo"
            style={{
              maxHeight: `60px`,
              maxWidth: `60px`,
              margin: `0`,
              paddingRight: `10px`,
              verticalAlign: `text-top`,
            }}
          />
          WC PARTNERS
        </Link>
      </h1>
      <div>
        <ul
          style={{
            textDecoration: `none`,
            listStyleType: `none`,
            alignItems: `center`,
            margin: `0 auto`,
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `flex-end`,
            fontSize: `25px`,
            fontFamily: `Lato`,
          }}
        >
          <li>
            <Link
              to="/about"
              style={{
                color: `white`,
                textDecoration: `none`,
                marginRight: `2.1rem`,
                verticalAlign: `sub`,
              }}
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              style={{
                color: `white`,
                textDecoration: `none`,
                marginRight: `2.1rem`,
                verticalAlign: `sub`,
              }}
              className="nav-link"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              style={{
                color: `white`,
                textDecoration: `none`,
                verticalAlign: `sub`,
                marginRight: `2.1rem`,
              }}
              className="nav-link"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                color: `white`,
                textDecoration: `none`,
                verticalAlign: `sub`,
                marginRight: `2.1rem`,
              }}
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

export default HeroHeader
