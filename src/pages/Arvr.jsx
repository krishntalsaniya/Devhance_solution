import React from 'react'
import ServHero from '../components/ServHero'
import Header from '../components/Header'
import ServOur from '../components/ServOur'
import Industries from '../components/Industries'
import AndroidServ from '../components/AndroidServ'
import ForDev from '../components/ForDev'
import TabSection from '../components/Tabs'
import Process from '../components/Process'
import WhyChoose from '../components/WhyChoose'
import Keen from '../components/Keen'
import Footer from '../components/Footer'

function Arvr() {
  return (
    <>
    <Header/>
    <ServHero title="A Leading AR VR Development Company" subtitle="Developing Beyond Obvious" para="Devhence Solutions  is a leading AR VR Development Company that offers custom solutions, advanced tools, and leading-edge technologies. Our team operates for assessing your unique needs whether you are a start-up or an enterprise." bgurl="/images/arvrservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="AR VR app development services we offer" rightpara="We are a prominent AI development company in India that combines expertise and innovation to build extremely realistic apps using AR/VR technology for your business that seeks to generate an inescapable swirl in the market. We accomplish this task by providing the following AR/VR app development services.

" />
            <div className="serv-bottom">
                <AndroidServ icon="/images/arvr1.png" title="AR/VR app consultation" para="Our team of AR and VR developers will assist you in understanding how revolutionary is implication of this tech can be for your business"/>

                <AndroidServ icon="/images/arvr2.png" title="Apps for data visualization and computer vision" para="Services provided by our experts enable businesses to explore and change data in meaningful ways, resulting in more engagement and ROI."/>
                
                <AndroidServ icon="/images/arvr3.png" title="Sensor-based AR/VR desktop and mobile apps" para="We are a VR/AR mobile app development company in India that develops programmes that use sensors and provide outstanding results on both desktop and mobile platforms to achieve quality results."/>

                <AndroidServ icon="/images/arvr4.png" title="Location-based VR and AR development services" para="Our location-based augmented and virtual reality development services assist businesses in smoothly and profitably targeting the audience of a specific local region."/>

                <AndroidServ icon="/images/arvr5.png" title="Visual Recognition Solutions" para="Our skilled team of AR and VR experts is also well-versed in creating digital solutions that use images, videos, and other visual information as input and provide extremely engaging outcomes."/>

                <AndroidServ icon="/images/arvr6.png" title="Face and Gesture recognition platforms" para="As a leading AR and VR mobile app development agency in Riyadh, we also create face and gesture recognition technologies that improve the ecosystem's ease, engagement, and security."/>

                <AndroidServ icon="/images/arvr7.png" title="IoT + AR/VR" para="At Devhence Solutions, is one of the best VR/AR development companies, combining the potential of AR/VR with the Internet of Things to create a seamless experience across various connected devices."/>

                <AndroidServ icon="/images/arvr8.png" title="AR & VR app support and maintenance" para="Our skilled team of AR/VR developers also offers the best app maintenance and update services to clients all around the world."/>
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/arvrbanner.png" devtitle="What is Virtual Reality?" devstrong="" devpara1="Virtual Reality is a cutting-edge technology that immerses users in a virtual world. Real or fake assets can be used to create this setting. With the use of sensory stimuli, VR is programmed to create a virtual environment. Technology is advancing at such a rate that now it is possible to impact what occurs in the computer-generated world. To replicate and enjoy a virtual environment in real time, a user has to use additional hardware such as VR headsets and controllers. VR isn't just a technology limited to just entertainment anymore. It's growing out to be a vital tool in education, science, commerce, manufacturing, and more." devpara2="" />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    <Keen/>
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Arvr
