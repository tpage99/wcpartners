import React, { Fragment } from "react"

import HeroNav from "../components/Navbar/heroNav"
import SEO from "../components/seo"
import DonateLayout from "../components/donate-layout"
import Headline from "../components/headline"
import GameNight from "../components/gameImg"
import ArtClass from "../components/artClassImg"
import Arcade from "../components/arcadeImg"

const DonatePage = () => (
  <Fragment>
    <Headline />
    <HeroNav />
    <SEO title="Donate" />
    <DonateLayout>
      <article>
        <h1>Donate</h1>
        <section>
          <h2>
            Help make today better for someone with a developmental disability!
          </h2>
          <div className="grid">
            <div className="events-grid event-img">
              <GameNight />
            </div>
            <div className="events-grid event-img">
              <ArtClass />
            </div>
            <div className="events-grid event-img">
              <Arcade />
            </div>
          </div>
          <p>
            Donations come in all different ways from spending your personal
            time helping someone else, providing someone with a piece of
            clothing, or giving a small donation for a worthy cause. Today we
            would like to <strong>partner</strong> with you to bring happiness
            to someone we serve. Your partnership will provide the ability for
            an individual to receive supports in learning a life skill such as
            cooking, working on social skills while attending an art class, or
            going to camp
          </p>
          <p>Even small donations are welcome and appreciated.</p>
          <p>All proceeds are tax deductible.</p>
        </section>
      </article>
    </DonateLayout>
  </Fragment>
)

export default DonatePage