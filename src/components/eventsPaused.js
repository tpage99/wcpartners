import React, { Component } from "react"
import { Link } from "gatsby"

export default class signup extends Component {
  render() {
    return (
      <section>
        <hr />
        <h1>Live Events on Hold Due to COVID-19</h1>
        <p>
          At this time, our in-person events have been put on hold while
          following social distancing and best-practice orders from state and
          federal officials. Please know that we are working to get more
          information on how we can host virtual events or work with providers
          to link individuals and families to telehealth services.
        </p>
        <p>
          Please <Link to="/sc-contact">contact your Support Coordinator</Link>{" "}
          or <Link to="/contact">the office</Link> with further questions
        </p>
        <p>
          For information and resources on COVID-19, please visit our dedicated{" "}
          <Link to="/resources/covid-19">resources page</Link>.
        </p>
      </section>
    )
  }
}
