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

function Livevideo() {
  return (
    <>
    <Header/>
    <ServHero title="Live Video Shopping App Development Company" subtitle="" para="Devhence Solution Launches Innovative Live Video Shopping App Development Solutions. We are a globally recognized IT solutions provider, aiming to revolutionize how businesses connect with their customers and redefine the online shopping experience." bgurl="/images/LiveVideoservbg.png" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="We Follow a Strategic Approach to Keep You Ahead" rightpara="We are a Live Shopping App Development Company that follows the effective process of developing a live video shopping Mobile App Development in Atlanta involving several stages." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/livevideo1.png" title="Conceptualization and Planning" para="Our process starts with thorough conceptualization, where we conduct in-depth market research and analysis to understand the target audience, competition, and overall feasibility of the app idea."/>

                <AndroidServ icon="/images/livevideo2.png" title="Wireframing and Design" para="We create visually appealing interfaces that not only captivate users but also align with their brand image. We offer wireframing services to help clients refine their ideas and make informed decisions."/>
                
                <AndroidServ icon="/images/livevideo3.png" title="Development" para="Our development process is driven by constant innovation and cutting-edge technologies, ensuring that clients receive the most up-to-date solutions tailored to their specific needs."/>

                <AndroidServ icon="/images/livevideo4.png" title="Integration and APIs" para="By offering pre-built APIs and enhancing application functionality with real-time data exchange capabilities, We empower organizations to build feature-rich mobile apps."/>

                <AndroidServ icon="/images/livevideo5.png" title="Testing and Quality Assurance" para="With our extensive expertise and years of experience, we ensure that every aspect of an app is thoroughly tested to achieve a flawless user experience and impeccable functionality."/>

                <AndroidServ icon="/images/livevideo6.png" title="Deployment and Launch" para="We are a reliable Software development company in Saudi Arabia for businesses seeking top-notch app development services. Our team provides valuable insights and ensures smooth deployment in an effective approach."/>

                
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/livevideobanner.png" devtitle="Top Rated Live Video Shopping App Development Company" devstrong="" devpara1="Devhence Solution a leading Mobile App Development Company in India, is proud to announce its expertise in Live Video Shopping App Development to improve the online shopping experience for customers and businesses alike. The advent of the digital era has given rise to a new trend in e-commerce – live video shopping. This innovative concept allows shoppers to interact with sales representatives in real time, enabling them to visually explore products, inquire about features, and receive personalized recommendations, all from the convenience of their own homes." devpara2="With a team of highly dedicated Mobile App Developers in India and designers, the company strives to help businesses transform their traditional e-commerce platforms into engaging and immersive live video shopping experiences." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    {/* <Keen/> */}
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Livevideo