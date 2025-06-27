import React from 'react'
import { Link } from 'react-router-dom'

function Transport() {
  return (
    <>
    <div className="transport">
        <div className="trans-data">
            <h2>Your National Transport <br /> Solution</h2>
            <p>
                With depots strategically located in Brisbane and Sydney, we offer daily services to Queensland, New South Wales, Australian Capital Territory, Victoria, Western Australia, and South Australia on full loads, ensuring nationwide coverage and prompt delivery.
            </p>
            
            <Link to="/get" style={{textDecoration:"none",color:"#fff"}}>
            <button> Get Quote</button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Transport
