import React from 'react';
import  '../css/navigation.css';
import Logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();


  const activePage = (path) => {
    return location.pathname === path ? 'active' : '';
  }

  return (
    <nav className='navigation'>
      <div className='navLinks'>
        
        <div className="logo-wrapper">
          <img src={ Logo } alt="" srcset="" className='logo' />
        </div>

        <ul className="links">
          <li className={activePage('/')}>
            <Link to={"/"}>Home</Link>
          </li>
          <li className={activePage('/about')}>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className={activePage('/partnership')}>
            <Link to={"/partnership"}>Partnerships</Link>
          </li>
          <li className={activePage('/blog')}>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li className={activePage('/donation')}>
            <Link to={"/donation"}>Donation</Link>
          </li>
          <li className='button'>
            <Link  to= {'/emergency'}>Emergency</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation