import React from 'react'
import { Link } from 'react-router-dom'

const para = [
    {
        id:1,
        para:`Experience Our Vision of Seamless and Cost-Effective Freight Solutions
        National Freight Services & Logistics was founded by Jory Dunshea with the vision of providing a comprehensive and cost-effective freight service for clients.  We are proudly Australian owned and operated.`
    },
    {
        id:2,
        para:`With over 15 years of experience in the Transport Industry, my aim was to establish a safe workplace environment for our staff and extend this commitment to our clients. `
    },
    {
        id:3,
        para:`Our dynamic team at National Freight Services & Logistics operates around the clock to ensure seamless freight services, allowing you to focus on your day-to-day activities without worrying about your shipments.`
    },
    {
        id:4,
        para:`We utilise cutting-edge Sign on Glass technology and comprehensive paperwork software as part of our freight services. Additionally, we offer custom connotes for your shipments featuring your logo, along with pallet labels for goods transported on our trucks.`
    },
    {
        id:5,
        para:`National Freight Services & Logistics has played a vital role in the growth of numerous companies by providing prompt door-to-door deliveries. Our dedication to safe and diligent service has contributed to increased business for our clients. We aspire to be your trusted freight logistics partner, committed to being the backbone of your business.`
    },
    {
        id:6,
        para:`From the moment you contact us to transport your items, National Freight Services & Logistics guarantees an unparalleled experience that will make you forget about any other logistics provider you've dealt with before!`
    },
    {
        id:7,
        para:`When your items are delivered, you can trust that they are accompanied by accurate paperwork, complete with onsite photos to provide visual confirmation. `
    },
]

function Abouthero() {
  return (
    <>

    <section className="ab">
    <div className="container">
      <div className="about-mn">
        <div className="ab-left">
            <div className="abdata">

            <h1>
                Experience Our Vision of Seamless and Cost-Effective Freight Solutions
            </h1>
            {
                para.map((item)=>
                <p key={item.id}>{item.para}</p>
                )
            }
            <div className="ab-btns">
                {/* <button>Contact Us</button> */}
                {/* <button>get Quote</button> */}

                <button class="Download-button">
                <Link to="/contact" style={{textDecoration:"none",color:"#fff"}}>
                    <span>Contact Us</span>
                </Link>
                </button>
                <button class="Download-button">
                <Link to="/get" style={{textDecoration:"none",color:"#fff"}}>
                    <span>get Quote</span>
                </Link>
                </button>
            </div>

            </div>

        </div>
        <div className="ab-right">
            <img src="/images/about-hero.jpg" alt="" />
        </div>
      </div>

    </div>
    </section>

    </>
  )
}

export default Abouthero
