import blogImgOne from '../../assets/home/blog-first-img.png';
import blogImgTwo from '../../assets/home/blog-sec-img.png';
import blogImgThree from '../../assets/home/blog-third-img.png';

import sponsorOne from '../../assets/home/sponsor-redcross.png';
import sponsorTwo from '../../assets/home/sponsor-ambulance.png';
import sponsorThird from '../../assets/home/sponsor-stjohn.png';
import sponsorForth from '../../assets/home/sponsor-synlab.png';
import sponsorFifth from '../../assets/home/sponsor-lagoon.png';


export const homeData = {
    services : [
        {
            title : 'Emergency Medical Response',
            content : 'QuikMedic provides rapid and expert emergency medical response services, deploying skilled professionals equipped to handle critical situations with speed and precision.'
        },
        {
            title : 'Telehealth Consultations',
            content : "Access professional medical advice anytime, anywhere through QuikMedic's telehealth services."
        },
        {
            title : 'Community Health Programs',
            content : "QuikMedic is committed to promoting overall community well-being, offering educational programs, workshops."
        }
    ],
    blog : [
        {   
            img : blogImgOne,
            tag : 'reaearch',
            date : '12TH DEC, 2023',
            title : 'Breakthrough Discovery',
            content : 'In a surprising turn of events, scientists announce a groundbreaking cure for the common cold, bringing...'
        },
        {   
            img : blogImgTwo,
            tag : 'discovery',
            date : '11TH DEC, 2023',
            title : 'Air Ambulance Drones',
            content : 'In a groundbreaking development, drone technology is harnessed to create a fleet of air ambulance dro...'
        },
        {   
            img : blogImgThree,
            tag : 'innovation',
            date : '10TH DEC, 2023',
            title : 'Smart Emergency Wristbands',
            content : 'A tech company pioneers a life-saving wearable device that detects health emergencies in real-time and instant..'
        }
    ],
    sponsors:[
        sponsorOne,
        sponsorTwo,
        sponsorThird,
        sponsorForth,
        sponsorFifth
    ]
}