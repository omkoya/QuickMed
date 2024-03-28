import React from 'react'
import "../css/partnership.css";
import NeedEmer from "../assets/home/Need-Emergency-Bg.png";
import people from "../assets/partnership/people.png";
import nationalCancer from "../assets/partnership/nationalCancer.png";
import ladies from "../assets/partnership/ladies.png";
import logo from "../assets/partnership/logo.png";
import ambulance from "../assets/partnership/ambulance.png";
import { TbUsers } from "react-icons/tb";
import Navigation from '../components/Navigation';
import { LiaHandshake } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi2";
import { GiBrain } from "react-icons/gi";

const Partnership = () => {
  return (
    <div className='partnership'>
      <div className="partnership-container">
        {/* <div className="partnership-side-img">
          <img src={NeedEmer} alt="Image" />
        </div> */}
        <div className="title">
          <h1>Fostering</h1>
          <h1>Collaborations. <TbUsers /></h1>
        </div>
        <div className="title-cont">
          <h1>Join Forces for Health and Safety.</h1>
          <p>We believe in uniting with like-minded organisations to enhance health and safety initiatives. Explore the myraid opportunities to join forces with us in delivering swift, compassionate, and expert emergency medical care.</p>
        </div>
        <button>Become a Partner</button>
      </div>

      <div className="why">
        <div className="why-container">
          <h4>Why partner with us?</h4>
          <h1>Impact of partnering with Our Health and Safety Initiative</h1>
          <p>Partnering with us means unlocking a host of opportunities to make a lasting impact on communities and individuals.</p>
        </div>

        <div className="items">
          <div className="itemss">
            <div className="item">
              <LiaHandshake className='icon' />
              <h3>Collective Impact</h3>
              <p>By joining forces, we create a collective impact that goes beyond individual efforts, fostering a stronger approach to health initiatives.</p>
            </div>
            <div className="image">
              <img src={ladies} alt="" />
            </div>
          </div>

          <div className="itemss">
            <div className="item">
              <GiBrain className='icon' />
              <h3>Innovation & Expertise</h3>
              <p>As your partner, we bring cutting-edge technologies and a wealth of knowledge to the table. Together, we navigate the evolving landscape of emergency medical care, ensuring our initiatives are at the forefront of progress.</p>
            </div>
            <div className='img'>
              <img src={nationalCancer} className='img' alt="" />
            </div>
          </div>

          <div className="itemss">
            <div className="imag">
              <img src={people} alt="" />
            </div>
            <div className="item">
              <HiOutlineUsers className='icon' />
              <h3>Community-centric Focus</h3>
              <p>By joining forces, we create a collective impact that goes beyond individual efforts, fostering a stronger approach to health initiatives.</p>
            </div>
          </div>
        </div>

        <div className="feature">
          <div className="feature-container">
            <h2>Featured Partners</h2>
            <div className="things">
              <div className="thing">
                <img src={logo} alt="" />
                <h3>Nigerian Red Cross</h3>
                <p>The partnership with our emergency website has revolutionized the Nigerian Red Cross Society's response capabilities, providing real-time alerts and streamlined communication during crises.</p>
              </div>

              <div className="thing">
                <img src={ambulance} alt="" />
                <h3>The Ambulance Company</h3>
                <p>The website's integration with the ambulance fleet allows for real-time tracking and coordination, significantly reducing response times during emergencies.</p>
              </div>

              <div className="thing">
                <img src={logo} alt="" />
                <h3>St. John Ambulance</h3>
                <p>Integrated real-time alert systems on the website provide St John Ambulance with instant notifications, enabling rapid deployment of medical teams to critical situations.</p>
              </div>

              <div className="thing">
                <img src={logo} alt="" />
                <h3>SynLab</h3>
                <p>Our emergency website has become an indispensable asset for SynLab, empowering them to fulfill their mission of delivering expert medical care and first aid services with heightened efficiency and impact.</p>
              </div>

              <div className="thing">
                <img src={logo} alt="" />
                <h3>Iwosan Lagoon Hospitals</h3>
                <p>The website's communication tools facilitate seamless interaction between hospital staff and emergency responders, ensuring efficient coordination during critical situations.</p>
              </div>

              <div className="thing">
                <img src={logo} alt="" />
                <h3>City Hospital</h3>
                <p>The website's real-time alert system seamlessly integrates with City Hospital's operations, providing instant notifications about critical cases and enabling the hospital to mobilize resources promptly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partnership