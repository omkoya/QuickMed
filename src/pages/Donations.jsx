import React from 'react';
import Header from '../components/donation/Header';
import Reason from '../components/donation/Reason';
import Projects from '../components/donation/Projects';
import Monetary from '../components/donation/Monetary';
import Support from '../components/donation/Support';
import Subscribe from '../components/donation/Subscribe';
import Footer from '../components/Footer'

const Donations = () => {
  return (
    <>
      <section>
        <Header />
      </section>

      <section>
        <Reason />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <Monetary />
      </section>

      <section>
        <Support />
      </section>

      <section>
        <Subscribe />
      </section>

      <section>
        <Footer />
      </section>
    </>
    
  )
}

export default Donations