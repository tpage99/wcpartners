import React from "react"
import Footer from "./footer"

import "./layout.css"

const DonateLayout = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 1200,
      padding: `1.5rem 1rem 1rem`,
    }}
  >
    <main>
      {children}
      <Footer />
    </main>
  </div>
)

export default DonateLayout
