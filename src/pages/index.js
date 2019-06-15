import React, { Fragment } from "react"
import { Link } from "gatsby"

import HeroNav from "../components/heroNav"
import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Footer from "../components/footer"

const IndexPage = () => (
  <Fragment>
    <HeroNav />
    <SEO title="Home" />
    <div style={{
      width: `100%`,
      height: `100%`,
      background: `linear-gradient(200deg, #2D5B2D 55.52%, rgba(255, 255, 255, 0) 55.52%), #FFFFFF`,
    }}>
      <div className="grid" style={{ zIndex: `2` }}>
        <div className="img-fluid" style={{ gridColumnStart: `1`, gridColumn: `span 7` }}>
          <img
            src="https://res.cloudinary.com/tpage99/image/upload/v1560422846/WCPartners/heroGroup.png"
            alt="collage of people smiling"
            className="feature-img"
          />
        </div>
        <div className="text-block" style={{ gridColumnEnd: `-1`, gridColumn: `span 5` }}>
          <h2 style={{
            fontSize: `4rem`,
            color: `white`,
            margin: `0 auto`,
            paddingTop: `4rem`,
            fontStyle: `bold`,
            textShadow: `22px 15px 38px rgba(0, 0, 0, 0.48)`
          }}>
            GROWING<br />
            TOWARDS<br />
            EMPOWERED<br />
            FUTURES
          </h2>
        </div>
      </div>
    </div>
    <Layout>
      <div className="grid">
        <div style={{ margin: `0 auto`, gridColumn: `span 7` }}>
          <h1>Welcome to WC Partners!</h1>
          <h2 style={{ fontStyle: `italic` }}>a little about why we're here...</h2>
          <p>The Webster County SB40 Board exists to help support individuals and families with developmental disabilities. By promoting natural and state paid resources, individuals with developmental disabilities can live empowered and fulfilling lives living their idea of a good life. To learn more visit our <span id="simple-link"><Link to="/about/" >About page</Link></span>.</p>
        </div>
        <div style={{ gridColumn: `span 4`, gridColumnEnd: `-1` }}>
          <img
            src="https://res.cloudinary.com/tpage99/image/upload/v1560421417/WCPartners/wclogo.png"
            alt="wc partners logo"
            className="feature-img"
          />
        </div>
      </div>
      <h1 style={{ textAlign: `center` }}>Information and Resources</h1>
      <div className="flex">
        <div className="link-box">
          <h3><a href="#"><button>Targeted Case Management</button></a></h3>
        </div>
        <div className="link-box">
          <h3><a href="#"><button>Community Resources</button></a></h3>
        </div>
        <div className="link-box">
          <h3><a href="#"><button>SB40 History</button></a></h3>
        </div>
        <div className="link-box">
          <h3><a href="#"><button>Social Activity/Events</button></a></h3>
        </div>
      </div>
      <Footer />
    </Layout>
  </Fragment >
)

export default IndexPage
