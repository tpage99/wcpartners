import React, { Component } from "react"

export default class footer extends Component {
  render() {
    return (
      <section>
        <div className="card">
          <p style={{ textAlign: `center` }}>
            Don't see your resource or event listed here?
            <br />
            <a
              href="mailto:info@wc-partners.net?subject=Information%20About%20Helpful%20Resource&body=Please%20include%20information%20about%20your%20event%20or%20resource.%20Include%20links%20when%20possible.%20Please%20ensure%20events%20have%20time,%20date,%20and%20summary%20of%20information."
              style={{ fontWeight: `bold`, color: `white` }}
            >
              Send us an email
            </a>
          </p>
        </div>
      </section>
    )
  }
}
