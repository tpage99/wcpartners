import React, { Component } from "react"

export default class footer extends Component {
  render() {
    return (
      <section>
        <h3 style={{ textAlign: `center` }}>
          Don't see your event and/or resource listed here? Contact us.
        </h3>
        <form
          name="resource-event-contact"
          method="POST"
          action="/success"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <div className="honey">
            <label>
              Don’t fill this out if you're human:
              <input type="hidden" name="form-name" value="contact" />
            </label>
          </div>
          <div
            style={{
              display: `inline-flex`,
              flexDirection: `row`,
              justifyContent: `space-around`,
            }}
          >
            <div
              style={{
                display: `flex`,
              }}
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name (required)"
                aria-required="true"
                required
              />
            </div>
            <div
              style={{
                display: `flex`,
              }}
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email (required)"
                aria-required="true"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="text-field"
              rows="4"
              id="message"
              placeholder="Write your message here..."
            />
          </div>
          <div className="form-input">
            <button type="submit" aria-describedby="submit-form">
              Submit
            </button>
          </div>
        </form>
      </section>
    )
  }
}
