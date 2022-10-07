import React from 'react'
import Navbar from '../Navbar';
import Banner from '../about/Banner';
import Process from '../Process';
import Footer from '../Footer';




function About() {
  return (
    <div className='About'>
          <Navbar active={'About'}/>
          <Banner/>
          <Process/>
          <Footer/>
    </div>
  )
}

export default About;