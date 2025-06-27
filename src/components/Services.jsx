import React from 'react'

const data = [
    {
        id : 1,
        photo : "/images/services-1.jpg",
        name : "Same-Day",
        para : "Experience unmatched efficiency with our Same Day Delivery Service."
    },
    {
        id : 2,
        photo : "/images/services-2.jpg",
        name : "Overnight Express",
        para : "Guarantee the rapid arrival of your goods with our Overnight Express Delivery Service."
    },
    {
        id : 3,
        photo : "/images/services-3.jpg",
        name : "Intrastate",
        para : "Effortlessly connect with your local market through our reliable intrastate transport services."
    },
    {
        id : 4,
        photo : "/images/services-4.jpg",
        name : "Interstate",
        para : "We offer a diverse array of interstate freight services catered to various industries."
    }
]

const data1 = [
    {
        id : 1,
        photo : "/images/services-5.jpg",
        name : "Customised Solutions",
        para : "Discover the power of personalisation with our Customised Solutions, tailored to meet the unique needs of your business."
    },
    {
        id : 2,
        photo : "/images/services-6.jpg",
        name : "Depot Facilities",
        para : "Expand your capabilities with our Depot Facilities Service that offers safe and secure storage, alongside comprehensive logistics support for your goods."
    },
    
]

function Services() {
  return (
    <>

    <div className="services">

        <div className="container">

            <h2>Transport Services</h2>

            <div className="serv-wrapp">
                {
                    data.map((item)=>
                    <>
                        <div className="serv-card" key={item.id}>
                            <img src={item.photo} alt="" />
                            <div className="serv-data">
                            <h3>{item.name}</h3>    
                            <p>{item.para}</p>
                            </div>
                        </div>
                    </>
                    )
                }
            </div>

            <br /><br />    
            <h2> Specialised Services </h2>

            <div className="serv-wrapp">
                {
                    data1.map((item)=>
                    <>
                        <div className="serv-card" key={item.id}>
                            <img src={item.photo} alt="" />
                            <div className="serv-data">
                            <h3>{item.name}</h3>    
                            <p>{item.para}</p>
                            </div>
                        </div>
                    </>
                    )
                }
            </div>


        </div>

    </div>

      
    </>
  )
}

export default Services
