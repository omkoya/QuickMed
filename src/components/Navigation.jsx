import React from 'react'
import  '../css/navigation.css'
import Logo from '../assets/logo.png'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='navLinks'>
        
        <div className="logo">
          <img src={ Logo } alt="" srcset="" />
        </div>

        <ul className="links">
          <li><a href="">About Us</a></li>
          <li><a href="">Partnerships</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Donation</a></li>
         
            
          <a className='button' href="">Emergency</a>
            
          
        </ul>
      </div>
    </nav>
  )
}

export default Navigation