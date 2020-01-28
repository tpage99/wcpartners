import React from "react"
import { StaticQuery } from "gatsby"
import { graphql } from "gatsby"

import Search from "./search"

const searchBox = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <div style={{ margin: `auto` }}>
        <Search searchIndex={data.siteSearchIndex.index} />
      </div>
    )}
  />
)

export default searchBox
