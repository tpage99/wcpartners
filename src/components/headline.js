import React, { Component } from "react"
import { Link } from "gatsby"

export default class footer extends Component {
  render() {
    return (
      <div role="banner" style={{ margin: `0.5rem` }}>
        <Link to="/resources/covid-19" style={{ fontWeight: `bold` }}>
          COVID-19 resources and information
        </Link>
      </div>
    )
  }
}
