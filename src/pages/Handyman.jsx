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

function Handyman() {
  return (
    <>
    <Header/>
    <ServHero title="Handyman App Development Company" subtitle="" para="Devhence Solution  we tailor the best handyman apps to match the client’s specific needs. Our experienced and well-trained team of handyman Mobile App Developers in Chicago assists in crafting next-generation solutions to scale up your business to every household and professional environment." bgurl="/images/handymanservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Feature Packed Handyman App Development Services" rightpara="Devhence Solution is a famous name in the town that provides Handyman estimate app solutions to various industries. Working with us, you will get an innovative and robust hire handyman app." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/handyman1.webp" title="On-demand Home Cleaning Apps" para="we have a team of proficient mobile app developers in Dubai UAE, who are well-versed in crafting on-demand home cleaning applications. We implement the best technology and tools to provide a great user experience.
                           "/>

                <AndroidServ icon="/images/handyman2.webp" title="On-demand Laundry Apps" para="Launch a fully functional laundry app by seeking the help of Devhence Solution Handyman app development company. We design functional applications that help you provide your customers with the best services.
                           "/>
                
                <AndroidServ icon="/images/handyman3.webp" title="On-demand Plumbing Apps" para="we have years of expertise in innovating customized solutions for our clients. Moreover, we offer different plans so that clients can choose one that meets their preferences and requirements."/>

                <AndroidServ icon="/images/handyman4.webp" title="On-demand Home Shifting Apps" para="Make sifting hassle-free with on-demand home shifting applications. These App Development in New York help users hire movers and packers who will pack all their belongings safely and shift them to their desired location."/>

                <AndroidServ icon="/images/handyman5.webp" title="On-demand Vehicle Repair App" para="Let’s customers book a vehicle repair appointment in no time by investing in an on-demand vehicle repair app. Being a leading handyman app development company, we generate the best vehicle repair app solutions for our clients."/>

                <AndroidServ icon="/images/handyman6.webp" title="On-demand Home Repair Apps" para="Home repair apps can make the process easier and more efficient. With this app, users can search for proficient architecture to modify and repair their homes.
                           "/>

                 
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/handymanbanner.webp" devtitle="Excellent Handyman Development Solutions" devstrong="" devpara1="handyman Mobile App Development Company in India, committed to providing tailor-made solutions to connect homeowners with local service providers. Once you partner with us, we guarantee a responsive application. All our services are affordable, which makes us popular among people who build handyman applications. With years of experience in this industry, we help organizations make value-driven decisions and enhance their business operations." devpara2="Our comprehensive services include maintenance, renovation projects, construction work, house repair, etc. It means with the help of our handyman Mobile App Development Company in Dallas, users are able to search for help at the same time. To provide a great customer experience, we also use extensive technologies such as AI, blockchain, AR/VR, and cloud-based handyman apps. So, you don’t have to go anywhere because Devhence Solution is a one-stop store where you can get everything." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    {/* <Keen/> */}
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Handyman