import React from 'react'
import Button from './Button'

const keendata = [
    {
        id:1,
        photo:`/images/keen1.png`,
        title:`Android App Development`,
        para:`Devhence Solution is a top Reliable Android app development company in Bahrain that offers scalable android development solutions across verticals.`
    },
    {
        id:2,
        photo:`/images/keen2.png`,
        title:`Blockchain App Development`,
        para:`We possess impeccable expertise in the Blockchain domain and have delivered some of the best Blockchain mobile app development solutions in Bahrain and globally for our clients.`
    },
    {
        id:3,
        photo:`/images/keen3.png`,
        title:`Wearable App Development`,
        para:`Devhence Solution delivers the best wearable app development services in Bahrain that surpass excellence and are tailored to cater to the needs of an ever-evolving digital landscape.`
    },
    {
        id:4,
        photo:`/images/keen4.png`,
        title:`Mobile Game App Development`,
        para:`We use the latest tool combined with revolutionary technologies to deliver excellent games with impressive graphics and gameplay.`
    },
]

function Keen() {
  return (
    <>
      <div className="keen">
        <div className="container">
            <div className="keen-main">
                <div className="keen-left">
                    <h2>Keen to know what more we <span> offer? </span></h2>
                    <p>
                        We offer a plethora of mobile app development services in Bahrain to make your business reach everywhere.
                    </p>
                    <div className="btn">
                         <Button title="Know More"/>
                    </div>
                </div>
                <div className="keen-right">
                <div className="ker"></div>
                    {
                        keendata.map((item)=>
                            <div className="keenbx">
                                <img src={item.photo} alt="" />
                                <h3>{item.title}</h3>
                                <p>{item.para}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Keen
