import { Link } from "gatsby"
import React from "react"

import "./Navbar.css"
import MenuButton from "./menuButton"
import Backdrop from "./Backdrop"
import SideDrawer from "./SideDrawer"

class HeroHeader extends React.Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let sideDrawer
    let backdrop

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer click={this.backdropClickHandler} />
      backdrop = <Backdrop />
    }
    return (
      <header className="navbar">
        {sideDrawer}
        <MenuButton drawerClickHandler={this.drawerToggleClickHandler} />
        {backdrop}
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
            <Link to="/">WC Partners</Link>
          </div>
          <div className="spacer" />
          <div className="navbar_navigation-items">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default HeroHeader
