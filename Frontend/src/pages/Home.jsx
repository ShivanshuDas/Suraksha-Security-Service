import React from 'react'
import Navbar from '../component/Navbar'
import HomeBanner from '../component/HomeBanner'
import HomeAbout from '../component/HomeAbout'
import HomeServices from '../component/HomeServices'
import CustomerReview from '../component/CustomerReview'
import TrustedClients from '../component/TrustedClients'
import Footer from '../component/Footer'
import HomeCertificate from '../component/HomeCertificate'


const Home = () => {
    return (
        <>
            <body className='bg-[#ECECEC]'>
                <Navbar />
                <HomeBanner />
                <HomeAbout />
                <HomeServices />
                <HomeCertificate />
                <CustomerReview />
                <TrustedClients />
                <Footer />
            </body>
        </>
    )
}

export default Home
