import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const jenniferImage = () => (
  <StaticQuery
    query={graphql`
      query {
        jenniferImage: file(relativePath: { eq: "jennifer.jpg" }) {
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
        fluid={data.jenniferImage.childImageSharp.fluid}
        alt="support coordinator representative at table with wc partners pamphlets and information"
      />
    )}
  />
)
export default jenniferImage
