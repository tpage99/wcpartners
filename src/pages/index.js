import React, { Fragment } from "react"
import { Link } from "gatsby"

import HeroNav from "../components/heroNav"
import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer"

import '../components/layout.css'

const IndexPage = () => (
  <Fragment>
    <HeroNav />
    <SEO title="Home" />
    <div style={{
      backgroundImage: `url(https://res.cloudinary.com/tpage99/image/upload/v1560288862/WCPartners/wc_hero_grayscale.png)`,
      backgroundPosition: `center center`,
      backgroundRepeat: `no-repeat`,
      backgroundAttachment: `fixed`,
      backgroundSize: `cover`,
      height: `115vh`,
      width: `100vw`,
      marginTop: `-15vh`
    }}>
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
