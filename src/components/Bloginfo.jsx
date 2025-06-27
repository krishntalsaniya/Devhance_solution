import React from 'react'
import SocialMediaBlog from './SocialMediaBlog'

function Bloginfo() {
  return (
    <>
    <div className="blg-info-wrapper">

      <div className="bloginfo">
        <div className="bloginner">

            <p className="blog-date-info">
                <img src="/images/logo2.jpeg" width={50} alt="" />

                <span> National Freight - Feb 4</span>    

            </p>

            <h1>Real Transport. Real Service. Real Solutions</h1>

            <img src="/images/Blog-1.jpg" alt="blog-banner1" />

            <div className="blog-para">
                <strong>Your Trusted Transportation Partner</strong>
                <p>
                    At National Freight Services & Logistics, we provide reliable, nationwide transportation solutions. With our fleet of modern equipment, including drop-deck ramp trailers, flat-top trailers, and B-Double tautliners, you can count on us to deliver your cargo safely and efficiently.
                </p>

                <h5>
                    Real Transport. Real Service. Real Solutions
                    <span style={{color: 'var(--primary-color)'}}> Sales@nfsl.com.au </span>
                </h5>
            </div>

            <article>
                <img src="/images/Blog-2.jpg" alt="" />

                <div className="artical-data">
                    <h6>National Freight Services & Logistics</h6>
                    <h6>Your Trusted Transportation Partner</h6>

                    <p>
                        At National Freight Services & Logistics, we provide reliable, nationwide transportation solutions. With our fleet of modern equipment, including drop-deck ramp trailers, flat-top trailers, and B-Double tautliners, you can count on us to deliver your cargo safely and efficiently
                    </p>

                    {/* <hr /> */}
                </div>
            </article>

            <div className="recent-blog">
            <h2>Recent Posts</h2>
                <SocialMediaBlog/>
            </div>

        </div>
      </div>

    </div>

    </>
  )
}

export default Bloginfo
