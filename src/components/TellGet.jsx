import React from 'react'

const tell = [
    {
        id:1,
        title:`Competitively Priced: `,
        para:`We pride ourselves on providing competitive pricing without compromising on the quality of our services.`
    },
    {
        id:2,
        title:`Dedicated Partnership: `,
        para:`  We aspire to be your long-term freight logistics partner, dedicated to strengthening your business operations and supporting your growth from the minute we receive your quote request. `
    },
    {
        id:3,
        title:`Commitment: `,
        para:` Our dedicated team operates around the clock to ensure your goods are handled with care, and delivered on time. `
    },
    {
        id:4,
        title:`Comprehensive Service:  `,
        para:` Our end-to-end freight service ensures that all your shipping needs are met efficiently and cost-effectively. `
    },
    {
        id:5,
        title:`Eco-Conscious Fleet:  `,
        para:`  We focus on sustainability by maintaining a fleet of vehicles aimed at reducing emissions and upholding stringent environmental standards. `
    },
    {
        id:6,
        title:`Safety Assurance:  `,
        para:`  With over 15 years of experience in the Transport Industry, we prioritise creating a safe workplace environment for our staff and extend this commitment to the safety of your goods. `
    },
    {
        id:7,
        title:`Advanced Technology:   `,
        para:`  We utilise cutting-edge Sign on Glass technology and comprehensive paperwork software to streamline the shipping process to track and manage your deliveries in real-time. `
    },
    {
        id:8,
        title:`Customisation Options:   `,
        para:`  Tailor your shipments with custom connote featuring your own logo, along with pallet labels for easy identification and tracking. `
    },
    {
        id:9,
        title:`100% Australian owned and operated.   `,
        // para:`  Tailor your shipments with custom connote featuring your own logo, along with pallet labels for easy identification and tracking. `
    },
]

function TellGet() {
  return (
    <>

    <div className="tel">
        <div className="container">

            <div className="tell-get">
                <h2>We get it.</h2>
                <p>You've got options when it comes to shipping your goods. Here’s why we should be your next choice:</p>
            </div>

            <ul>
            {
                tell.map((item)=>
                        <li> <strong> {item.title} </strong> {item.para} </li>
                )
            }
            </ul>
        </div>
    </div>

    </>
  )
}

export default TellGet
