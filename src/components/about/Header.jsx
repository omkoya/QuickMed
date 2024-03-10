import React from 'react';
import HeaderImg from '../../assets/about/abt1.png'
import SideImg from '../../assets/about/bkgrd.png';
import '../../css/about.css'

const Header = () => {
    return(
        <div className='about-header'>
            <div className="side-img">
                <img src={ SideImg } alt="" />
            </div>
            <div className="about-header-wrapper">
                <div className="about-header-text">
                    <h5>ABOUT US</h5>
                    <h1>
                        Our <span>Identity</span> Is Who We Are
                    </h1>
                    
                    <p>
                        When seconds matter, choose QuikMed for swift, compassionate 
                        ,and expert emergency medical assistance.
                    </p>

                    <button>I Have an Emergency</button>
                </div>
                <div className="about-header-img">
                    <img src={ HeaderImg } alt="" />
                </div>
            </div>
        </div>
    )
}


export default Header;