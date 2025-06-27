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

function Andriod() {
  return (
    <>
    <Header/>
    <ServHero title="Hire Tech-Driven Android app development services." subtitle="Contact Us To Embark On A Dynamic Development Journey." para="Do you wish to create an Android app development company in Dubai Android app with the best ? Your destination is Devhence Solution. We offer android app development services for startups as well as established enterprises. Our customized and cutting-edge android app services help numerous clients worldwide." bgurl="/images/servbg.png" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Our Android App Development Services" rightpara="We not only develop apps, but we also craft your success roadmap. Android App Development is a vast paradigm of possibilities that can employ various services on the way to success. Being the tech pioneers we find it obligatory to offer your business new-age android app development services" />
            <div className="serv-bottom">
                <AndroidServ icon="/images/offer1.png" title="Custom Android App Development" para="Devhence Solution offers custom android app development services in Saudi Arabia so you may voice your brand in just the way you want. Our team of experts promises to deliver android apps that are high-performing and scalable."/>
                <AndroidServ icon="/images/design.png" title="Android UI/UX Design" para="The world is running its fingers all over Android. At a time where Android devices have made a home in every house, it is vital to expand your business on android’s digital spectrum. Our development team is highly skilled in fashioning user-friendly yet high geared android apps."/>
                <AndroidServ icon="/images/Web.png" title="Android Web-Based Apps" para="Your business deserves to be seen everywhere. Our highly competent app developers have unmatchable skills in developing custom Android web-based app development. These solutions will help you in making your app more accessible to your users."/>
                <AndroidServ icon="/images/multi.png" title="Multi-Platform Deployment" para="Carrying the beam of a top android app development company we specialize in deploying apps with seamless integration. Your needs to establish your reign over any platform will be taken care of by our expert android app development team. Get ahead of every competition while partnering with us."/>
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/devbanner1.png" devtitle="Devhence Solution, the tech store for android app development" devstrong="Lists Amongst Leading Android App Development Solutions" devpara1="Devhence Solution provides everything you need to ideate, develop and launch a robust android app. Ever since our inception, our sole motive has been to offer the world a highly competent and skilled team of android app developers that can keep up with the latest updates and versions of today’s revolutionalizing technology." devpara2="Have an Android App Idea? Develop your Android app from just an idea to a revenue-generating reality. Devhence Solution is a Trusted Mobile App Development Company with a global presence with offices in India, UAE, Africa and the USA locations including Dubai, Saudi Arabia, Kuwait, Bahrain, Chicago, New York, San Francisco, Los Angeles, Dallas Houston, and Atlanta. Our 100+ experienced android app developers team operates as a single dynamic unit to develop high-end mobile apps with a futuristic vision and growth potential." />
    <Process/>
    <Industries />
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Andriod
