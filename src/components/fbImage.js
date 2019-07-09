import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FBImage = () => (
  <StaticQuery
    query={graphql`
      query {
        FBImage: file(relativePath: { eq: "fbLogo.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.FBImage.childImageSharp.fluid} />}
  />
)
export default FBImage
