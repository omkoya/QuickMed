import React from 'react';
import Image1 from '../../assets/about/bus1.png'
import Image2 from '../../assets/about/bus2.png'
import Image3 from '../../assets/about/bus3.png'

const Overview = () => {
  return (
    
    <div className="about-overview-wrapper">
        <div className="about-content">

            <div className="about-overview-text">
            <h5>BRIEF OVERVIEW</h5>
            <h3>Learn More About Us</h3>
            <ul>
                <li>Welcome to QuikMed emergency service - Your Rapid Response
                     in Critical Care.
                </li>

                <li>At QuikMed, our mission is simple yet profound to save 
                    lives and provide unparalleled emergency medical care.
                </li>

                <li>With a highly skilled team of dedicated professionals,
                    cutting edge technology, and a commitment to excellence,
                    we are your trusted ally in times of crisis. 
                </li>
            </ul>
            </div>
            <div className="about-overview-img"> 
            <div className="images one"><img src= { Image1 } alt="" /></div>   
            <div className="images two"><img src= { Image2 } alt="" /></div>   
            <div className="images three"><img src= { Image3 } alt="" /></div>   
            </div>

        </div>

    </div>
  )
}

export default Overview;