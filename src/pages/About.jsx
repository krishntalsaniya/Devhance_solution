import React from 'react'
import ServHero from '../components/ServHero'
import Header from '../components/Header'
import ServOur from '../components/ServOur'
import Industries from '../components/Industries'
import AndroidServ from '../components/AndroidServ'
import ForDev from '../components/ForDev'
import TabSection from '../components/Tabs'
import Process from '../components/Process'
import Offer from '../components/Offer'
import Footer from '../components/Footer'

function About() {
  return (
    <>
    <Header/>
    <ServHero title="Your Ideas, Our Competency: Creating Visions With Expertise and Innovation" subtitle="About Devhence Solution Pvt. Ltd." para="Delivering Excellence With Our Skills" bgurl="/images/aboutbg.jpg" />
      {/* <div className="servour">
        <div className="container">
          <ServOur leftTitle="Our Wearable App Development Services" rightpara="Rocket launches your business with the dynamic tech of wearable App Development in Atlanta. We became the Best App Development Company in Chicago by fulfilling our client expectations & continue to do so with our robust wearable app development services." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/offer1.png" title="Wearable App Design & Development" para="Wearable app development service with a custom UI/UX design for a high level of personalization. Our dedicated AI development Company Dubai team has the expertise to create prototypes to speed up the development process and ensure the app is to your specifications."/>

                <AndroidServ icon="/images/design.png" title="Wearable App Consultation" para="Hire our expert App Developer in San Francisco for developing high-quality wearable apps for fitness brands, smartwatches, jewellery, & other devices. You can bring your concept to us to see if it is practicable and profitable to you."/>
                
                <AndroidServ icon="/images/Web.png" title="App Maintenance" para="For any form of wearable app to remain competitive, smart support and maintenance are required. Our team of App Developers in Los Angeles are capable enough to fine-tune your apps & add the latest features when needed."/>

                <AndroidServ icon="/images/multi.png" title="Wearable Device App Integration" para="Allow the skilled mobile app developers in Dubai at Devhence Solution to incorporate the newest technology in cutting-edge The Wearable apps that we develop have an appealing user-interaction design that destined your business to accomplish the most."/>
            </div>
        </div>
    </div> */}
    <ForDev devbanner="/images/aboutbanner.png" devtitle="About Devhence Solution" devstrong="" devpara1="Devhence Solution, a recognized mobile app development company in Chicago, transforms your ideas into a development cycle with our team of experienced experts who have tremendous capabilities to tackle tech. We work hand in hand with our clients to ensure that the project we deliver fulfils every expectation and creates a difference for its users." devpara2="Our team is known for streamlining workflow, integrating captivating functions all towards one specific goal- the growth of your business. To increase the productivity of your enterprise, Devhence Solution stands as a stem with its team of UI/UX designers, mobile app developers, and quality analysts. Committed to deliver strategically designed and creatively develop world class mobile applications." />
    <div className="aibanner">
      <div className="aidata">
        <h2>A team of experts dedicated to developing robust apps for the world</h2>
        <p>
          We are a top-notch app development company in Atlanta that aids digital requirements for startups, businesses, and well-established enterprises to reinforce the potential of technology and achieve invincible growth. At Devhence Solution we ensure to create a realm that is fulfilling for not only our clients but their users as well. Highly determined to navigate towards the epitome of creativity, we at Devhence Solution ensure that our clients attain their expected business success.
        </p>
      </div>
    </div>
    <Offer/>
    <Process/>
    <Industries />
    <TabSection/>
    <Footer/>
    </>
  )
}

export default About
