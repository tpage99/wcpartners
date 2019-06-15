import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ArtImage = () => (
  <StaticQuery
    query={graphql`
      query {
        artImage: file(relativePath: { eq: "artCover.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.artImage.childImageSharp.fluid} />}
  />
)
export default ArtImage
