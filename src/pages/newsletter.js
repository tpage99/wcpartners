import React, { Fragment } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class Newsletter extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                alert(msg)
            })
            .catch(err => {
                console.log('err', err)
                alert(err)
            })
    }

    render() {
        return (
          <Fragment>
            <HeroHeader/>
            <SEO title="Newsletter sign-up"/>
            <div
              style={{
                position: `absolute`,
                width: `100%`,
                height: `100%`,
                background: `linear-gradient(200deg, #2D5B2D 55.52%, rgba(255, 255, 255, 0) 55.52%), #FFFFFF`,
              }}
            >
              <Layout>
              <div
                style={{
                  backgroundColor: `#fff`,
                  padding: `3rem`,
                  boxShadow: `0 0 10px rgba(0, 0, 0, 0.48)`,
                }}
              >
                <h1 style={{marginTop: `2rem`, textAlign: `center`}}>Sign up for WC Partners Chat!</h1>
                <p style={{margin: `0 auto`, maxWidth: `50ch`}}>WC Partners Chat is a newsletter designed to not only bring you information about what is happening at WC Partners, but to also bring you resources and upcoming events you might be interested in.</p>
                <div>
                  <form style ={{marginBottom: `3rem`}} onSubmit={this._handleSubmit}>
                      <div className="form-input">
                      <label htmlFor="name">Name</label>
                      <input
                          type="text"
                          onChange={this._handleChange}
                          placeholder="Name (required)"
                          id="name"
                          name="name"
                          aria-required="true"
                          required
                      />
                      </div>
                      <div className="form-input">
                      <label htmlFor="email">Email</label>
                      <input
                          type="email"
                          onChange={this._handleChange}
                          placeholder="Email (required)"
                          id="email"
                          name="email"
                          aria-required="true"
                          required
                      />
                      </div>
                      <div className="form-input">
                        <button type="submit" aria-label="submit form">Submit</button>
                      </div>
                  </form>
                </div>
              </div>
              </Layout>
              </div>
          </Fragment>                
        )
    }
}