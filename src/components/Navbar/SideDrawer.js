import React from "react"
import { Link } from "gatsby"

import "./SideDrawer.css"

const SideDrawer = props => (
  <div className="side-drawer">
    <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
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
    <div>
      <button id="closer" onClick={props.click}>
        X
      </button>
    </div>
  </div>
)

export default SideDrawer
