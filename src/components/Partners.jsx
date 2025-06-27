import React from 'react'

const partnerdata = [
    {
        id:1,
        photo:`/images/1year.png`,
        para:`1+ year Free Maintenance and Support`,
        // name:`Excellence`
    },
    {
        id:2,
        photo:`/images/digitalpromo.png`,
        para:`Digital Promotion Boosters`,
        // name:`Delivered`
    },
    {
        id:3,
        photo:`/images/nda.png`,
        para:`NDA Producted Apps`,
        // name:`Expert`
    },
]

function Partners() {
  return (
    <>

    <div className="partners">
        <div className="partner-info">
            <h2>Our Way of Ensuring Complete Satisfaction for Our Partners</h2>
            <p>We empower your digital brand</p>
        </div>
        <div className="partner-data">
            {
                partnerdata.map((item)=>
                
                <div className="partnerbx">
                    <img src={item.photo} alt="" />
                    <p>{item.para}</p>
                </div>

                )
            }
        </div>
    </div>
      
    </>
  )
}

export default Partners
