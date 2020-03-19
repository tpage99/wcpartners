import React from "react"

import "./layout.css"

const Layout = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 1200,
      padding: `1.5rem 1rem 1rem`,
    }}
  >
    <main>{children}</main>
  </div>
)

export default Layout
