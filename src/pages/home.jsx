import heroImg from '../assets/home/home-hero-img.png';
import heroImgSec from '../assets/home/home-hero-img-sec.png';
import serviceImg from '../assets/home/services-main-img.png'
import volunteerImg from '../assets/home/volunteer-img.png';
import donationImg from '../assets/home/donation-img.png';
import donationImgSec from '../assets/home/donate-img-sec.png';
import { homeData } from "../components/home/homeData";
import { ServiceCard } from "../components/home/ServiceCard.jsx";
import { BlogCard } from "../components/home/BlogCard.jsx";
import '../css/base.css';
import '../css/home.css';
import '../index.css';
import { Link } from 'react-router-dom';


//hero section for home page
function HeroSection(){
    const deviceWidth = window.innerWidth;
    return(
        <section className="hero-section">
            <div className="hero-text">
                <h1>
                    QuikMedic: Your Lifeline in <span className="emphasis" >Critical</span> Moments
                </h1>
                <h6>
                    In the face of crises, QuikMedic is your steadfast ally. With real-time alerts, and community-focused initiatives, we stand at the forefront of emergency care. 
                </h6>
                <Link className='button' to={'/emergency'}>
                    i have an emergency
                </Link>
            </div>
            <div className="hero-img">
                {
                    deviceWidth < 641 ? (<img src={heroImgSec} alt="quick medic hero image" />) : (<img src={heroImg} alt="hero image" />)
                }
            </div>
        </section>
    )
}

//servies section
function ServicesSection() {
    return(
        <section className="services-section">
            <h3>
                Comprehensive <span className="emphasis" >Emergency Services</span> Tailored for You
            </h3>
            <div className="section-content">

                <div className="main-description">
                    <h6>
                        QuikMedic offers a range of comprehensive emergency services designed to meet your unique needs, ensuring swift and expert care when you need it most.
                    </h6>
                    <img src={serviceImg} alt="service img" />
                </div>
                
                <div className="section-cards">
                    { homeData.services.map((info, index) => {
                        return(
                            <ServiceCard title={info.title} content={info.content} count={index} key={index} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

//become a volunteer section
function VolunteerSection() {
    return(
        <section className="volunteer-section">
            <div className="main-description">
                <div className="description-wrapper">
                    <h3>
                        Become a Valued Partner in Transforming Emergency Healthcare.
                    </h3>
                    <h6>
                    At QuikMedic, we believe in the power of collaboration to enhance emergency healthcare services. By becoming a partner, you contribute to a network dedicated to swift, compassionate, and expert care.
                    </h6>
                </div>
                <Link to={'/partnership'} className='button'>
                    Become a Partner 
                </Link>
            </div>
            <div className="main-img">
                <img src={volunteerImg} alt="volunteer img" />
            </div>
        </section>
    )
}

//sponsors section
function SponsorsSection() {
    return(
        <section className='sponsors-section'>
            {homeData.sponsors.map((src, index) => {
                return(
                    <img src={src} alt="sponsor img" key={index} />
                )
            })}
        </section>
    )
}

//blog section 
function BlogSection() {
    return(
        <section className="blog-section">
            <div className="main-description">
                <h3>
                    Explore <span className="emphasis" >Our Blog</span> for the Latest in Emergency Healthcare
                </h3>
                <Link to={"/blog"} className="text-button">see more</Link>
            </div>
            <div className="section-cards">
                { homeData.blog.map((info, index) => {
                    return(
                        <BlogCard title={info.title} img={info.img} tag={info.tag} date={info.date} content={info.content} key={index}/>
                    )
                })}
            </div>
        </section>
    )
}

//emergency call section
function NeedEmergencySection(){
    return(
        <section className="need-emergency-section">
            <h5>
                You need an Emergency? We are quick, we are reliable.
            </h5>
            <Link to={'/emergency'} className='button'>
                i have an emergency
            </Link>
        </section>
    )
}

//donation section
function DonationSection() {
    const deviceWidth = window.innerWidth;
    return(
        <section className="donation-section">
            <div className="main-img">
                {
                    deviceWidth < 641 ? (<img src={donationImgSec} alt="" />) : (<img src={donationImg} alt="" />)
                }
            </div>
            <div className="main-description">
                <h3>
                    Empower Lifesaving Initiatives: Support Us with <span className="emphasis" >Your Generosity</span>
                </h3>
                <h6>
                    Your generosity supports our mission to enhance community well-being, save lives, and shape a safer future.
                </h6>
                <Link to={'/donation'} className='button'>
                    donate now
                </Link>
            </div>
        </section>
    )
}

export function Home() {
    return(
        <div className='home-main-container'>
            <HeroSection />
            <ServicesSection />
            <VolunteerSection />
            <SponsorsSection />
            <BlogSection />
            <NeedEmergencySection />
            <DonationSection />

        </div>
    )
}