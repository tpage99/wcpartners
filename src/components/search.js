import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div style={{ margin: `auto`, padding: `2rem 2rem 0` }}>
        <label
          htmlFor="search"
          style={{ fontSize: `1.5rem`, color: `white`, fontWeight: `bold` }}
        >
          Search Resources:{" "}
        </label>
        <input
          id="search"
          type="text"
          value={this.state.query}
          onChange={this.search}
          style={{ fontSize: `1.5rem`, maxWidth: `100%` }}
        />
        <ul
          style={{
            listStyle: `none`,
            listStylePosition: `inside`,
            background: `#2d5b2d`,
            padding: `1rem 0`,
          }}
        >
          {this.state.results.map(page => (
            <li
              key={page.id}
              style={{
                margin: `1rem 0`,
                padding: `0.5rem`,
                backgroundColor: `white`,
              }}
            >
              {/* Link to should start with just slash in quotes but had to add domain after Link seems to be broken */}
              <Link to={"https://www.wc-partners.net/" + page.path}>
                {page.title}
              </Link>
              {": " + page.tags.join(`, `)}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true }) //expand:true will accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
