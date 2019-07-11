import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const arcadeImage = () => (
  <StaticQuery
    query={graphql`
      query {
        arcadeImage: file(relativePath: { eq: "arcade.jpg" }) {
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
        fluid={data.arcadeImage.childImageSharp.fluid}
        alt="group of young men playing on pinball machine at arcade event"
      />
    )}
  />
)
export default arcadeImage
