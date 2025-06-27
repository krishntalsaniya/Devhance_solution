import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Banner() {
  return (
    <>
    <section className='hero-sec'>
      <div className="container">
          <div className="home-hero">
            <div className="hero-left">
              <h1>Designed to <Link to="/" style={{color:"#fff"}}> Unleash Digital </Link> Potential</h1>
              <p>
                At Devhence Solution, we are committed to provide award-winning products. We specialize in creating remarkable brands. Our mission is to bring innovation, creativity, and transformation to your digital world.
              </p>
              <br />
              <Button title="Contact us"/>
            </div>
            <div className="hero-right">
              <img src="/images/d-banner.png" alt="" />
            </div>
          </div>
      </div>
    </section>

    </>
  )
}

export default Banner
