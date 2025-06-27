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

function Flutter() {
  return (
    <>
    <Header/>
    <ServHero title="Hire the best Flutter App Development Company" subtitle="Build a revolutionary, high-performance and a futuristic flutter app." para="As a leading Flutter App Development Company in Dubai we provide services to develop and launch expressive, flexible and robust flutter app to start-ups and large enterprises." bgurl="/images/servbg5.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Our Flutter App Development Services" rightpara="At Devhence Solution, we aim to deliver top quality Mobile App Development in Atlanta that revolves around the tactics to deliver an unforgettable user-experience. When our clients reach out to us, our sole goal becomes to accomplish our client’s goals for which we offer these services" />
            <div className="serv-bottom">
                <AndroidServ icon="/images/offer1.png" title="Cross-platform App Development" para="Devhence Solution assists its clients for developing robust, high-performing and scalable cross platforms that can adapt various mobile app development frameworks in Chicago that work on different platforms seamlessly."/>

                <AndroidServ icon="/images/design.png" title="Flutter iOS App Development" para="If you wish to develop a unique, feature-rich iOS app, partner with our highly experienced and professional team of app developers in Dubai."/>
                
                <AndroidServ icon="/images/Web.png" title="Flutter Android App Development" para="Devhence Solution is a top android app development company that offers scalable android development solutions across verticals"/>

                <AndroidServ icon="/images/multi.png" title="UI/UX Strategy Applications" para="To increase your business growth, Devhence Solution offers flutter UI/UX flutter development services. All you have to do is picture a vision and we will turn it into breath taking reality."/>
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/devbanner5.png" devtitle="Our Flutter App Development Skills Define Us" devstrong="" devpara1="Ever since its inception in 2017 by Google, Flutter become the speediest growing cross-platform open source SDK. With mobile app development in Kuwait, you can give the world outstanding native iOS, Android apps, and web apps." devpara2="With the rapid dynamics of Flutter, it is believed to forge a future in desktop apps as well. Being a leading Mobile App Development Company in Houston, Texas, we offer impeccable cross-platform app development services for you to uplift your business reach." />
    <Process/>
    <Industries />
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Flutter
