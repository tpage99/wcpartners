import React from "react"
import { StaticQuery, graphql } from "gatsby"

import HeroHeader from "./heroHeader"

const HeroNav = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQueryHero {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <HeroHeader siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

export default HeroNav
