import React, { Fragment } from "react"
import { Link } from "gatsby"

import HeroNav from "../components/heroNav"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Fragment>
    <HeroNav />
    <SEO title="Home" />
    <div style={{
      backgroundImage: `url(https://res.cloudinary.com/tpage99/image/upload/v1560165594/WCPartners/wc_hero.png)`,
      backgroundPosition: `center center`,
      backgroundRepeat: `no-repeat`,
      backgroundAttachment: `fixed`,
      backgroundSize: `cover`,
      height: `100vh`,
      width: `100vw`,
      marginTop: `-10vh`
    }}>
      <div style={{
        textAlign: `center`,
        paddingTop: `83vh`,
        color: `white`
      }}>
        <h1 style={{
          marginBottom: `0`,
          paddingBottom: `5px`
        }}>
          <span style={{ backgroundColor: `#48b04c` }}>Welcome to the WC Partners Website!</span>
        </h1>
        <p><span style={{ backgroundColor: `#48b04c` }}>WC Partners is the local SB 40 Board for Webster County. To learn more visit our <Link to="/about/">About page</Link>.</span></p>
      </div>
    </div>
    <div style={{
      background: `#48b04c`,
      paddingTop: `25px`,
      paddingBottom: `25px`,
      textAlign: `center`
    }}>
      <div style={{ maxWidth: `60vw`, alignContent: `center` }}>
        <h1>Why We're Here</h1>
        <p>The Webster County SB40 Board exists to help support individuals and families with developmental disabilities. By promoting natural and state paid resources, individuals with developmental disabilities can live empowered and fulfilling lives living their idea of a good life.</p>
      </div>
    </div>
    <div style={{ maxWidth: `350px`, margin: `0 auto` }}>
      <Image />
    </div>
    <p style={{ textAlign: `center` }}><em>Growing towards empowered futures for Webster County</em></p>
    <div className="circle-link">
      <a href="#">Targeted Case Management</a>
    </div>
    <div>
      <button>Community Resources</button>
      <button>SB40 History</button>
      <button>Social Activity/Events</button>
    </div>
  </Fragment>
)

export default IndexPage
