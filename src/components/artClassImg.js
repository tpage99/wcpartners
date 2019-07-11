import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const artImage = () => (
  <StaticQuery
    query={graphql`
      query {
        artClassImage: file(relativePath: { eq: "artClassJune2019.jpg" }) {
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
        fluid={data.artClassImage.childImageSharp.fluid}
        alt="students in art class working and people talking"
      />
    )}
  />
)
export default artImage
