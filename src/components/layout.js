import React from "react"
import Footer from "./footer"
import Donations from "./donate-section"
import RFP from "./rfpNotice"

import "./layout.css"

const Layout = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 1200,
      padding: `1.5rem 1rem 1rem`,
    }}
  >
    <main>
      {children}
      <Donations />
      <RFP />
      <Footer />
    </main>
  </div>
)

export default Layout
