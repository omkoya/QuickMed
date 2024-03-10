import React from 'react'
import Image from '../../assets/donations/head.png'
import '../../css/donations.css'

const Header = () => {
  return (
    <header>
      <div className="donation-container">
        <div className="donation-header">

          <div className="donation-text">
            <a href=''>Make A Donation</a>
            <div>
              <h2>Make a donation to help save more lives faster.</h2>
              <p>Your support, however large or small, will make a
                vital difference. But none of this is possible without you.
              </p>
            </div>

            <button style={{marginTop: '30px'}}>Donate Now</button>
          </div>

  
          <div className="donate-image">
            <img src={ Image } alt="" />
          </div>
        </div>
      </div>
        
    </header>
  )
}

export default Header