import React, { Fragment } from "react"
import { Link } from "gatsby"

import HeroNav from "../components/Navbar/heroNav"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Footer from "../components/footer"

const IndexPage = () => (
  <Fragment>
    <HeroNav />
    <SEO title="Home" />
    <div
      style={{
        width: `100%`,
        height: `100%`,
        background: `linear-gradient(200deg, #2D5B2D 55.52%, rgba(255, 255, 255, 0) 55.52%), #FFFFFF`,
      }}
    >
      <div
        className="grid"
        style={{ zIndex: `2`, maxWidth: `1350px`, margin: `0 auto` }}
      >
        <div
          className="img-fluid"
          style={{ gridColumnStart: `1`, gridColumn: `span 7` }}
        >
          <img
            src="https://res.cloudinary.com/tpage99/image/upload/v1560422846/WCPartners/heroGroup.png"
            alt="collage of people smiling"
          />
        </div>
        <div
          style={{
            gridColumnEnd: `-1`,
            gridColumn: `span 5`,
            margin: `0 auto`,
            maxWidth: 1200,
            padding: `1.5rem 1rem 1rem`,
          }}
        >
          <h1
            style={{
              fontSize: `4rem`,
              color: `white`,
              margin: `0 auto`,
              paddingTop: `1.9rem`,
              fontStyle: `bold`,
            }}
          >
            <span style={{ backgroundColor: `#2D5B2D` }}>
              GROWING
              <br />
              TOWARDS
              <br />
              EMPOWERED
              <br />
              FUTURES
            </span>
          </h1>
        </div>
      </div>
    </div>
    <Layout>
      <div className="grid">
        <div style={{ margin: `0 auto`, gridColumn: `span 7` }}>
          <h1>Welcome to WC Partners!</h1>
          <h2 style={{ fontStyle: `italic` }}>
            a little about why we're here...
          </h2>
          <p>
            The Webster County SB40 Board exists to help support individuals and
            families with developmental disabilities. By promoting natural and
            state paid resources, individuals with developmental disabilities
            can live empowered and fulfilling lives living their idea of a good
            life. To learn more visit our{" "}
            <span className="strong-link">
              <Link to="/about/">About page</Link>
            </span>
            .
          </p>
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
          <h3 className="box-link">
            <Link to="/targeted-case-management">
              <button>Targeted Case Management</button>
            </Link>
          </h3>
        </div>
        <div className="link-box">
          <h3 className="box-link">
            <Link to="/resources">
              <button>Resources</button>
            </Link>
          </h3>
        </div>
        <div className="link-box">
          <h3 className="box-link">
            <Link to="/sc-contact">
              <button>Staff Contact</button>
            </Link>
          </h3>
        </div>
        <div className="link-box">
          <h3 className="box-link">
            <Link to="/events">
              <button>Events</button>
            </Link>
          </h3>
        </div>
      </div>
      <Footer />
    </Layout>
  </Fragment>
)

export default IndexPage
