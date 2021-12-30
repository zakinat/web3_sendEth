import React from 'react'
import {Footer, Navbar, Header, Services, Transactions} from '../sections'

const LandingPage = () => {
    return (
        <div className='min-h-screen'>
            <div className='gradient-bg-welcome'>
                <Navbar/>
                <Header/>
            </div>
            <Services/>
            <Transactions/>
            <Footer/> 
        </div>
    )
}

export default LandingPage
