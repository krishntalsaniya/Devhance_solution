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

function Dating() {
  return (
    <>
    <Header/>
    <ServHero title="Dating app development company" subtitle="" para="Find the best dating app developers from a leading dating mobile app development company in Dubai UAE. If you want to develop a dating app with advanced features and need assistance on the same then connect with our developers." bgurl="/images/datingservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Perks of Dating App Development" rightpara="Dating is easy with mobile applications. In the present time, people realise it is easy to search for a matchmaker and partner. There are many other dating app development advantages." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/dating1.png" title="Security & Privacy" para="At Devhence Solution, we ensure the security of client data. Being a trusted dating app development company, we have a team of experts App Developers in India who ensure that client's data is protected."/>

                <AndroidServ icon="/images/dating2.png" title="Experienced Team For Dating Application Development" para="We have a highly experienced team of Mobile App Developers in India who are well-versed in providing out-of-the-box solutions. Moreover, we are committed to delivering the project on time."/>
                
                <AndroidServ icon="/images/dating3.png" title="Effective Communication" para="It is necessary to communicate openly to know the progress of a project. Therefore, we deliver daily reports on the development of your build Dating App"/>

                <AndroidServ icon="/images/dating4.png" title="Advanced Features To Build Dating App" para="Our team of experienced developers uses the latest technologies in mobile app development. We improve productivity and ensure client satisfaction."/>

                
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/datingbanner.webp" devtitle="Searching for Next Generation Custom Dating App Development Services?" devstrong="" devpara1="Searching for a perfect match is the best way to ensure the success of an application. As a trusted dating mobile app development company in India, we are proficient in building dating applications. At TechGrospe, you will get custom Mobile App Development in Dallas for various business entities and startups. Our highly skilled dating app developers always choose the best technology and tools." devpara2="Therefore, Devhence Solution is among the top Mobile App Development Company in Atlanta GA for providing high-performing solutions. We make sure to offer an AI dating app ensuring result driven services to our valuable clients. We have impressive skills in producing secure and next-generation solutions. Our expert app developers in Dubai UAE allow individuals to search for their love match and make better relationships." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    {/* <Keen/> */}
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Dating