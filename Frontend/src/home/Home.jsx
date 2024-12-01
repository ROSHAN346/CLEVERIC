import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import Freebook from '../components/Freebook.jsx'

function Home() {
    return (
        <> <div className='bg-white  dark:bg-slate-900 dark:text-white'>

            <Navbar />
            <Banner />
            <Freebook />
            <Footer />
        </div>
        </>
    )
}

export default Home
