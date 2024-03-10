import React from 'react'
import Image1 from '../../assets/about/abt3.jpg'
import Image2 from '../../assets/about/abt4.jpg'
import Image3 from '../../assets/about/abt2.jpg'

const Services = () => {
  return (
    <div className="service-wrapper">
        <div className="service-text">
            <h5>OUR SERVICES</h5>

            <h3>Comprehensive Solution For All Your Needs.</h3>

            <p>
                When seconds matter, choose QukMed for swift, compassionate, and expert
                 emergency medical assistance. Your safety, our priority.
            </p>
        </div>

        <div className="service-cards-wrapper">
            <div className="service-card">
                <div className="service-img">
                    <img src= { Image1 } alt="" />
                </div>
                <div className="service-link">
                    <h4>Hospital Transfer</h4>
                    <a href="">Read More &#8599</a>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img">
                    <img src= { Image2 } alt="" />
                </div>
                <div className="service-link">
                    <h4>Hospital Transfer</h4>
                    <a href="">Read More &#8599</a>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img">
                    <img src= { Image3 } alt="" />
                </div>
                <div className="service-link">
                    <h4>Hospital Transfer</h4>
                    <a href="">Read More &#8599</a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Services