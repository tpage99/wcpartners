/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
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
