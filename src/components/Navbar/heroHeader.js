import { Link } from "gatsby"
import React from "react"

import "./Navbar.css"

const HeroHeader = props => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="navbar_logo">
        <img
          src="https://res.cloudinary.com/tpage99/image/upload/v1560421417/WCPartners/wclogo.png"
          alt="wc partners logo"
          style={{
            maxHeight: `50px`,
            maxWidth: `50px`,
            margin: `0`,
          }}
        />
        <Link to="/">WC PARTNERS</Link>
      </div>
      <div className="spacer" />
      <div className="navbar_toggle-button" />
      <div className="navbar_navigation-items">
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/resources">RESOURCES</Link>
          </li>
          <li>
            <Link to="/events">EVENTS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default HeroHeader
