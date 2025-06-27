import React from 'react'
import AboutSlider from './AboutSlider'

function Fleet() {
  return (
    <>
      <div className="fleet">
        <h2>Our Fleet</h2>
        <p>As a dedicated Prime Carrier, we boast our own fleet of trucks and staff, ensuring reliability <br />
and efficiency in every delivery.  </p>
      </div>

      <div className="fleet-slider">
        <AboutSlider/>  
      </div>
    </>
  )
}

export default Fleet
