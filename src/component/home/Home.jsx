import React from 'react'
import './Home.css'
import WhyStoneX from './Whystonex'
import HeroImg from '../../assets/hero-sec-bg-img.png'
import Ourproject from './Ourproject'
import Footer from '../footer/Footer'
function Home() {
  return (
    <div className="mainwrap">
      <div className="hero-sec">
          <img src={HeroImg}/>
          <div className="overlay"></div>
          <h1>YOUR RELIABLE <br/> ROOFING SOLUTIONS.</h1>
          <p>At StoneX, we combine durability, style, and precision craftsmanship to deliver roofing systems you can trust. <br />
              Whether it's residential or commercial, our expert team ensures top-tier protection and long-lasting performance for every project. <br />
              With StoneX, you're not just getting a roof — you're getting peace of mind. <br />
          </p>
      </div>
      <WhyStoneX/>
      <Ourproject/>
    </div>
  )
}

export default Home