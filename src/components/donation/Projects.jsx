import React from 'react';
import Image1 from '../../assets/donations/proj1.png'
import Image2 from '../../assets/donations/proj2.png'
import Image3 from '../../assets/donations/proj3.png'

const Projects = () => {
  return (
    <div className="donation-projects">
        <h2>Projects</h2>
        <div className="project-cards">
            <div className="card">
                <div className="card-img">
                    <img src= {Image1} alt="" />
                </div>

                <div className="card-desc">
                    <h5>Community Outreach</h5>
                    <p>Equipping people with the knowledge and resources needed 
                        to effectively respond to medical emergencies.
                    </p>
                    <a href="">Learn More</a>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src= {Image2} alt="" />
                </div>

                <div className="card-desc">
                    <h5>Service Expansion</h5>
                    <p>
                        Our service expansion involves establishing partnerships 
                        and collaboration with first responders, paramedics and hospitals.
                    </p>
                    <a href="">Learn More</a>
                </div>
            </div>
            <div className="card">
            <div className="card-img">
                    <img src= {Image3} alt="" />
                </div>

                <div className="card-desc">
                    <h5>Emergency Care</h5>
                    <p>
                        Equipping individuals with the knowledge and resources
                        reached to handle medical emergencies confidently.
                    </p>
                    <a href="">Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects