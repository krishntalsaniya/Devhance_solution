import React from 'react'
import OrbitAnimation from './OrbitAnimation'
import Button from './Button'

const waydata = [
    {
        id:1,
        photo:`/images/excellence.png`,
        para:`10+ Years of`,
        name:`Excellence`
    },
    {
        id:2,
        photo:`/images/product.png`,
        para:`1000+ Projects`,
        name:`Delivered`
    },
    {
        id:3,
        photo:`/images/tech.png`,
        para:`200+ Technology`,
        name:`Expert`
    },
]

function Way() {
  return (
    <>
    <div className="container">

      <div className="way">
        <div className="w-left">
            <h2>Devhence Solution - Your Way to Tech Success</h2>

            <p>
                The Best App Development Company, Which is All About Your Needs
            </p>

            <p>
                Devhence Solution is a global web & <strong> mobile app development company </strong> located in India,  <strong> Dubai, Saudi Arabia, Kuwait, Bahrain </strong>, USA, and Singapore. We are one of the world's leading mobility firms, where innovative thinking, a bunch of inspiring minds, and a passion blends to forge an extraordinary impact.
            </p>

            <p>
                We have a team of dynamic young and enthusiastic professionals who are sincerely dedicated to delivering dreams into exhilarating reality, with specializations in multiple domains, we propel our clients to reach the epitome of optimization. We stand tall not only for infusing profits for our customers in marketing but also draws their trust through our utmost ingenuousness and cordiality
            </p>

            <p>
                We affirm to deliver phenomenal customer experiences and deliver them at a radically lower cost.
            </p>

            <div className="way-data">
                {
                    waydata.map((item)=>

                        <div className="waybx">
                            <img src={item.photo} alt="item-image" />    
                            <p>{item.para}</p>
                            <p>{item.name}</p>
                        </div>    

                    )
                }
            </div>

            <div className="btn">
            <Button title="Know More"/>
            </div>

        </div>
        <div className="w-right">
            <OrbitAnimation/>
        </div>
      </div>

    </div>

    </>
  )
}

export default Way
