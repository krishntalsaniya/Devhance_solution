import React from 'react'

function Secure() {
  return (
    <>
        <div className="secure">
            <div className="left">
                <img src="/images/secure-1.png" alt="" />
            </div>
            <div className="mid">
                <h2>Reliable, Affordable & Secure</h2>
                <p>
                    National Freight Services & Logistics is an Australian owned and operated company, spearheaded by founder Jory Dunshea, who brings 10+ years of experience in the transport industry. Born on the premise to provide reliable and affordable solutions, with an emphasis on ensuring safe & secure operations for both staff and clients.
                </p>
                {/* <button>Read More</button> */}
               <center>
                <button class="Download-button">
                    <span>Read More</span>
                </button>
               </center>
            </div>
            <div className="right">
                <img src="/images/secure-2.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default Secure
