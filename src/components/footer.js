import React, { Component } from 'react'

export default class footer extends Component {
  render() {
    return (
      <footer style={{
        textAlign: `center`,
        marginTop: `1.5rem`,
        maringBottom: `40px`,
        paddingTop: `1.5rem`,
        paddingBottom: `40px`
      }}>
        <p style={{ textAlign: `center` }}><em>Growing towards empowered futures for Webster County</em></p>
        © {new Date().getFullYear()}, Contact WC Partners by phone at (417) 630-0782 or by email at <a href="mailto:info@wc-partners.net">info@wc-partners.net</a>
      </footer>
    )
  }
}
