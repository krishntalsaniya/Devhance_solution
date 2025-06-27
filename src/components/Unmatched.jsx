import React from 'react'

const unmatch = [
    {
        id:1,
        number:`01`,
        title:`Efficient Logistics`,
        para:`We specialise in providing efficient logistics solutions for all your transportation needs. Our experienced team ensures that your goods are delivered safely and on time, every time. With our state-of-the-art fleet and advanced tracking systems, you can trust us to handle your cargo with utmost care and precision.`,
    },
    {
        id:2,
        number:`02`,
        title:`24/7 Availability`,
        para:`We understand that time is of the essence in the transportation industry. That's why we offer round-the-clock service to cater to your needs. Our dedicated team is available 24/7 to assist you with any queries or emergencies. Count on us for reliable and responsive service, anytime, anywhere.`,
    },
    {
        id:3,
        number:`03`,
        title:`Reliable Same Day Delivery`,
        para:`Need urgent delivery? Look no further! Our same day delivery service guarantees that your goods reach their destination without any delay. Whether it's a small package or a large shipment, we have the resources and expertise to handle it efficiently. Trust us for reliable and prompt delivery services.`,
    },
    {
        id:4,
        number:`04`,
        title:`Flexible Financing Options`,
        para:`We believe in making transportation services accessible to all. That's why we offer convenient financing options to suit your budget and requirements. Whether you need short-term or long-term financing, we have flexible solutions tailored to your needs. Experience hassle-free transportation with our convenient financing options.`,
    },
]

function Unmatched() {
  return (
    <>
      <div className="unmatch">
        <div className="un-left">
            <img src="/images/unmatch-banner.jpg" alt="unmatch" />
        </div>
        <div className="un-right">


            <div className="unwrapper">

                    <h2>Unyielding Commitment, Unmatched Service</h2>
                    <p>Delivering Excellence</p>

                <div className="unbox">
                    {
                        unmatch.map((item)=>

                        <div className="undata">
                            <p className='number'>{item.number}</p>
                            <strong>{item.title}</strong>
                            <p className="unpara">
                                {item.para}
                            </p>
                        </div>     

                        )
                    }
                </div>

            </div>
        </div>
      </div>
      
      <div className="uncontact">
        <h2>Contact Us</h2>
        <p>Are you ready to see the National Freight Services & Logistics difference? Contact us today to chat about your shipping requirements and find out how we can simplify your logistics operations. Whether you're curious about our services or seeking a customised quote, our team is here to support you at every turn.</p>
        <center>
            <button class="Download-button">
            <span>Contact Us</span>
            </button>
        </center>

      </div>
    </>
  )
}

export default Unmatched
