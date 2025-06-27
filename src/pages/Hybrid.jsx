import React from 'react'
import ServHero from '../components/ServHero'
import Header from '../components/Header'
import ServOur from '../components/ServOur'
import Industries from '../components/Industries'
import AndroidServ from '../components/AndroidServ'
import ForDev from '../components/ForDev'
import TabSection from '../components/Tabs'
import Process from '../components/Process'
import Footer from '../components/Footer'

function Hybrid() {
  return (
    <>
    <Header/>
    <ServHero title="Your Dream Idea will reform into a Hybrid App" subtitle="" para="As a leading hybrid app development service provider in the Middle East countries, we transform all the shapes and sizes of businesses. we transform all the shapes and sizes of businesses. Partner with us to experience highly robust, reliable, and secure hybrid Mobile App Development in Atlanta." bgurl="/images/servbg3.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Our Power Pack of Hybrid App Development Services" rightpara="With our cross-platform app development services, you can lead the global market in the burgeoning mobile app development in Dubai." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/offer1.png" title="React Native Development" para="This renowned hybrid mobile app framework is used by Devhence Solution to create apps because of its outstandingly quick development and reliable performance. Through the development of a hybrid software using the React Native Framework, our experts can help your company reach new heights."/>

                <AndroidServ icon="/images/design.png" title="Flutter App Creation" para="With the aid of Flutter, our developers create a hybrid mobile app that will effectively serve customers across platforms. Our apps provide scalable, high-performance solutions within a certain budget. Partner with a top mobile app development company in Kuwait to experience the most seamless flutter app creation for hybrid app development."/>
                
                <AndroidServ icon="/images/Web.png" title="Maintenance and Support" para="In order to guarantee the best operation of the applications even during times of high traffic, we provide superior hybrid app maintenance and support services. Even after the software has launched, any problem you encounter is fixed by our engineers. Additionally, we offer 24/7 prompt maintenance assistance."/>

                {/* <AndroidServ icon="/images/multi.png" title="Application Support & Maintenance" para="As the leading industry leader of Mobile App Development Company in Dallas, Texas, our top priority is to offer post maintenance and support services throughout the process of your React Native services. We believe in building long-term business relationships with our clients, therefore hire our React Native app development services."/> */}
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/devbanner3.png" devtitle="Hybrid Application Development Company" devstrong="" devpara1="As a leading Hybrid Application Development company, we have a talented team that comprises cross-platform mobile app developers in Dubai, UI specialists, skilled QA engineers, and R&D experts. Our team of experts provides end-to-end development of cross-platform mobile apps." devpara2="Our development team is highly competent when it comes to building the best mobile app development services in Bahrain for your business to generate the maximum possible ROI and increase its reach." />
    <Process/>
    <Industries />
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Hybrid
