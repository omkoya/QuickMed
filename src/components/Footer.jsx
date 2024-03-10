import React from 'react'
import Logo from '../assets/logo.png'
import '../css/footer.css'
import Facebook from '../assets/icons/facebook.png'
import Linkedin from '../assets/icons/linkedin.png'
import Insta from '../assets/icons/insta.png'
import Twitter from '../assets/icons/twitter.png'
import Gmail from '../assets/icons/gmail.png'
import Bkgrd from '../assets/about/bus1.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-underlay">
            <img src={Bkgrd} alt="" />
        </div>
        <div className="footer-overlay">
            <div className="footer-wrapper">
            <div className="footer-logo">
                <img src={Logo} alt="Logo" />
            </div>
            
            <div className="footer-links">
                <div className="newsletter">
                    <h3>Subscribe to our newsletter</h3>

                    <div className="news-input">
                        <input type="email" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <ul className="footer-navlinks">
                    <li><a href="#">Company</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Partnership</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Donate</a></li>
                </ul>
            </div>

            <div className="footer-icons">
                <div className="socials">
                    <div className="img"><img src= { Facebook } alt="" /></div>
                    <div className="img"><img src= { Linkedin } alt="" /></div>
                    <div className="img"><img src= { Twitter } alt="" /></div>
                    <div className="img"><img src= { Insta } alt="" /></div>
                    <div className="img"><img src= { Gmail } alt="" /></div>
                </div>
                <div className="contact">
                    <p>Emergency? Chat or Call.</p>

                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer