import React, { Fragment } from "react"
import { Link } from "gatsby"

import HeroNav from "../components/heroNav"
import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer"

import '../components/layout.css'

const IndexPage = () => (
  <Fragment>
    <HeroNav style={{ zIndex: `1` }} />
    <SEO title="Home" />
    <div style={{
      marginTop: `-15vh`,
      width: `100vw`,
      height: `105vh`,
      background: `linear-gradient(208deg, #2D5B2D 55.52%, rgba(255, 255, 255, 0) 55.52%), #FFFFFF`,
      zIndex: `0`
    }}>
      <div className="grid" style={{ zIndex: `2` }}>
        <div className="img-fluid" style={{ gridColumnStart: `1`, gridColumn: `span 7` }}>
          <img
            src="https://res.cloudinary.com/tpage99/image/upload/v1560422846/WCPartners/heroGroup.png"
            alt="collage of people smiling"
            className="feature-img"
          />
        </div>
        <div className="text-block" style={{ gridColumnEnd: `-1`, gridColumn: `span 4` }}>
          <h2 style={{
            fontSize: `4rem`,
            color: `white`,
            margin: `0 auto`,
            paddingTop: `50px`,
            paddingLeft: `20px`
          }}>
            Growing<br />
            Towards<br />
            Empowered<br />
            Futures
          </h2>
        </div>
      </div>
    </div>
    <div style={{
      background: `#48b04c`,
      paddingTop: `25px`,
      paddingBottom: `25px`,
      textAlign: `center`,
      color: `white`
    }}>
      <div style={{ maxWidth: `80vw`, margin: `0 auto` }}>
        <h1>Welcome to WC Partners!</h1>
        <h2>A Little About Why We're Here</h2>
        <p>The Webster County SB40 Board exists to help support individuals and families with developmental disabilities. By promoting natural and state paid resources, individuals with developmental disabilities can live empowered and fulfilling lives living their idea of a good life. To learn more visit our <Link to="/about/" id="simple-link"><span style={{ fontStyle: `italic` }}>About page</span></Link>.</p>
      </div>
    </div>
    <div style={{ maxWidth: `350px`, margin: `0 auto` }}>
      <Image />
    </div>
    <p style={{ textAlign: `center` }}><em>Growing towards empowered futures for Webster County</em></p>
    <div>
      <a href="#"><button>Targeted Case Management</button></a>
    </div>
    <div>
      <a href="#"><button>Community Resources</button></a>
    </div>
    <div>
      <a href="#"><button>SB40 History</button></a>
    </div>
    <div>
      <a href="#"><button>Social Activity/Events</button></a>
    </div>
    <Footer />
  </Fragment >
)

export default IndexPage
