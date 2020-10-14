import React, { Fragment } from "react"

import Footer from "../components/footer"
import HeroHeader from "../components/Navbar/heroHeader"

const Survey = () => (
  <Fragment>
    <HeroHeader />
    <section style={{margin: `0 auto`, padding: `0.5rem`}}>
      <h1 style={{ paddingLeft: `4%` }}>Satisfaction Survey 2020</h1>
      <iframe title="satisfaction survey 2020" width="100%" height="1200px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=rHl3xfiVYUypCCivdEeGZlACl5a-Wa9GqWSl2_5J2o9UN1AwQTRSVzZLWFhISDFBTEkxWUNQTUM2Qi4u&embed=true" frameBorder= "0" marginWidth= "0" marginHeight= "0" style={{border: `none`, maxWidth:`100%`, maxHeight:`100vh`}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen/>
    </section>
    <Footer/>
  </Fragment>
)

export default Survey
