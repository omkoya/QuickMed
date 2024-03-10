import React from 'react'
import Header from '../components/about/Header'
import Overview from '../components/about/Overview'
import Mission from '../components/about/Mission'
import Services from '../components/about/Services'
import Emergency from '../components/about/Emergency'
import Team from '../components/about/Team'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
        <section>
            <Header />
        </section>

        <setion>
          <Overview />
        </setion>

        <section>
          <Mission />
        </section>

        <section>
          <Services />
        </section>

        <section>
          <Emergency />
        </section>

        <section>
          <Team />
        </section>

        <Footer />
    </>
  )
}

export default About