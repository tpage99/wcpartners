import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const gameImage = () => (
  <StaticQuery
    query={graphql`
      query {
        gameNightImage: file(relativePath: { eq: "gameNight2019.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.gameNightImage.childImageSharp.fluid}
        alt="groups of people participating in game night playing bingo"
      />
    )}
  />
)
export default gameImage
