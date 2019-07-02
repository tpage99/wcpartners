import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/Navbar/heroHeader"
import Footer from "../components/footer"

const TCM = () => (
  <Fragment>
    <HeroHeader />
    <SEO title="Targeted Case Management" />
    <Layout>
      <main>
        <h1>Targeted Case Management</h1>
        <p>
          Navigating the state and local systems to find supports can be
          challenging. Support Coordination is one of the processes that can
          help you find resources and explore service options. WC Partners
          offers Targeted Case Management (TCM) services to those who meet state
          guidelines and eligibility requirements.
        </p>
        <h2>What does a Support Coordinator help with?</h2>
        <p>
          <ul>
            <li>Advocacy in the school or community</li>
            <li>Information and referrals</li>
            <li>Resources</li>
            <li>Identify needs and develop a plan of action</li>
            <li>Discuss service options and authorizations</li>
            <li>Updates on service/support changes</li>
          </ul>
        </p>
        <h2>Navigating the Process of Support Coordination</h2>
        <p>
          <ol>
            <li>
              <h3>Referral Source</h3>
            </li>
            <ul>
              <li>Advocate group</li>
              <li>Provider</li>
              <li>Community member</li>
              <li>Vocational rehabilitation</li>
              <li>School</li>
              <li>First Steps</li>
              <li>Parent/guardian</li>
              <li>Self</li>
            </ul>
            <li>
              <h3>Point of Entry</h3>
            </li>
            <ul>
              <li>
                Springfield Regional Office
                <br />
                1515 E. Pythian
                <br />
                PO Box 5030
                <br />
                Springfield, MO 65801
                <br />
                Phone: (417) 895-7400
                <br />
                Fax: (417) 895-7412
              </li>
            </ul>
            <li>
              <h3>Intake Process</h3>
            </li>
            <ul>
              <li>Initial application (DMH or WC Partners)</li>
              <li>Screening/Assessment (DMH)</li>
              <li>Eligibility determination (DMH)</li>
              <li>SC assignment (WC Partners)</li>
            </ul>
            <li>
              <h3>Eligibility Requirements</h3>
            </li>
            <ul>
              <li>Intellectual disability occurred prior to age 18</li>
              <li>
                Any other developmental disability occurred prior to age 22
              </li>
              <li>Likely to continue indefinitely</li>
              <li>Substantial functional limitations</li>
              <li>Lifelong/extended duration</li>
            </ul>
            <li>
              <h3>Support Coordinator Assigned</h3>
            </li>
            <ul>
              <li>Advocacy / information / referrals</li>
              <li>Resources</li>
              <li>Identify needs</li>
              <li>Develop a plan of action</li>
              <li>Service authorizations</li>
            </ul>
          </ol>
        </p>
      </main>
      <Footer />
    </Layout>
  </Fragment>
)

export default TCM
