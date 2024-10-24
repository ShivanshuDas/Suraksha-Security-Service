import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import AboutIntro from '../Components/AboutIntro'
import AboutMission from '../Components/AboutMission'
import TeamMember from '../Components/TeamMember'
import Footer from '../Components/Footer'

const About = () => {
    return (
        <>
            <body className='bg-[#ECECEC]'>
                <Navbar />
                <AboutBanner />
                <AboutIntro />
                <AboutMission />
                <TeamMember />
                <Footer />
            </body>
        </>
    )
}

export default About
