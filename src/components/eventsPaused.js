import React, { Component } from "react"
import { Link } from "gatsby"

export default class signup extends Component {
  render() {
    return (
      <section>
        <hr />
        <h1>Live Events on Hold Due to COVID-19</h1>
        <p>
          At this time, our in-person events have been put on hold due to being
          under a remote monitoring services only advisory from DMH. You can
          learn more about this advisory and the status of which counties are
          considered "remote-only" for services{" "}
          <a href="https://dmh.mo.gov/dev-disabilities/covid-19-information/county-status">
            here
          </a>
          . Contact your Support Coordinator
        </p>
        <p>
          Please <Link to="/sc-contact">contact your Support Coordinator</Link>{" "}
          or <Link to="/contact">the office</Link> if you have questions or for
          information on virtual events and our work with providers linking
          individuals and families to telehealth services.
        </p>
        <p>
          For information and resources on COVID-19, please visit our dedicated{" "}
          <Link to="/resources/covid-19">resources page</Link>.
        </p>
      </section>
    )
  }
}
