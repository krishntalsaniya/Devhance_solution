import React from 'react'
import { Link } from 'react-router-dom'

const blogdata = [
    {
        id:1,
        blogbanner:`/images/Blog-1.jpg`,
        blogTitle:`Real Transport. Real Service. Real Solutions`,
        blogPara:`Your Trusted Transportation Partner At National Freight Services & Logistics, we provide reliable, nationwide transportation solutions....`,
        blogView:`13`,
        blogDate:`Feb 4`,
    },
    {
        id:2,
        blogbanner:`/images/Blog-2.jpg`,
        blogTitle:`New Owner for this Awesome Kenworth!`,
        blogPara:`At NFSL, we’re dedicated to helping you succeed in getting your freight needs shipped Nationally! Our team have got the resources and...`,
        blogView:`9`,
        blogDate:`Jan 24`,
    },
    {
        id:3,
        blogbanner:`/images/Blog-3.jpg`,
        blogTitle:`National Freight Services`,
        blogPara:`Perfect storm rolled into Newcastle, NFSL rolled out with this Cat Wheel loader for its new owner in North Brisbane. Are you looking for...`,
        blogView:`3`,
        blogDate:`Jan 18`,
    },
]

function SocialMediaBlog() {
  return (
    <>
    <div className="blogpage">

      <div className="blog-wrapper">

      {
        blogdata.map((item)=>

            <Link to='/blogs' style={{textDecoration:'none',color:`var(--txt-dark)`}}>

                <div className="blogdata" key={item.id}>
                    <div className="blog-left">
                        <img src={item.blogbanner} alt="" />
                    </div>
                    <div className="blog-right">
                        <div className="blg-date">
                            <div className="blg-lf">
                                <img src="/images/smallLogo.jpg" width={40} alt="" />
                            </div>
                            <div className="blg-rt">
                                <p>National Freight</p>
                                <span>{item.blogDate}</span>
                            </div>
                        </div>
                        <div className="blgdata">
                            <h2>{item.blogTitle}</h2>
                            <p>{item.blogPara}</p>
                        </div>
                        <div className="blg-view">
                            <p>{item.blogView} views</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
      }

      </div>

    </div>

    </>
  )
}

export default SocialMediaBlog
