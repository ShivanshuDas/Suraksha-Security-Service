import React from 'react'
import Navbar from '../component/Navbar'
import ContactAll from '../component/ContactAll'
import Footer from '../component/Footer'

const Contact = () => {
    return (
        <>
            <body className='bg-[#ECECEC]'>
                <Navbar />
                <ContactAll />
                <Footer />
            </body>
        </>
    )
}

export default Contact
