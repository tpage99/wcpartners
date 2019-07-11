import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "heroGroup.png" }) {
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
        fluid={data.heroImage.childImageSharp.fluid}
        alt="collage of people served by wc partners"
      />
    )}
  />
)
export default HeroImage
