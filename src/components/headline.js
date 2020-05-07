import React, { Component } from "react"
import { Link } from "gatsby"

export default class footer extends Component {
  render() {
    return (
      <div
        role="banner"
        style={{
          marginLeft: `5%`,
          marginTop: `1rem`,
          marginBottom: `1rem`,
          maxWidth: `1200`,
          backgroundColor: `white`,
        }}
      >
        <Link to="/resources/covid-19" style={{ fontWeight: `bold` }}>
          COVID-19 resources and information
        </Link>
      </div>
    )
  }
}
