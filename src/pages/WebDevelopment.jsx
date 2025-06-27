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
import FormHero from '../components/FormHero'
import Footer from '../components/Footer'

function WebDevelopment() {
  return (
    <>
    <Header/>
    {/* <ServHero title="Web3 Development Company" subtitle="" para="Being a leading web3 development company, we craft interactive solutions including AI, NFTs, AI, IoT and Cryptography technologies. With in-depth knowledge in web3 tools, oracles, APIs and Programming languages such as solidity and rust, we serve the best to our valuable clients at an affordable price." bgurl="/images/web3servbg.jpg" /> */}
    <FormHero title="Top Website Development Company" subtitle="The right platform to score the best web development services." para="Devhence Solution is a top web and mobile design and development company that offers scalable web development solutions across the verticals. Devhence Solution is the top software development company in Dubai, offering expandable website development services across verticals." />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Web Development Service Provider" rightpara="We specialize in developing reliable and creative web development solutions that are completely scalable, catering to both simple and complex website requirements. With our minimizing cost, we provide a range of online solutions." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/webdevelopmet1.png" title="Content management system" para="CMS is a software application that is used to build and maintain digital content."/>

                <AndroidServ icon="/images/webdevelopmet2.png" title="Social Media Integration" para="Allows users to quickly operate to their favorite network as a means to search out."/>
                
                <AndroidServ icon="/images/webdevelopmet3.png" title="Web application" para="An application program that is reserved on a remote server."/>

                <AndroidServ icon="/images/webdevelopmet4.png" title="Mobile application" para="A software application designed to run on a mobile device."/>

                <AndroidServ icon="/images/webdevelopmet5.png" title="Mobile optimized website" para="The site is redesigned itself for a list of manually or tablet devices."/>

                <AndroidServ icon="/images/webdevelopmet6.png" title="Document management system" para="A system used to track, maintain, store documents and reduce paper."/>

               
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/webdevelopmetbanner.png" devtitle="Best Web Development Services" devstrong="" devpara1="Devhence Solution is the best software development company in India that provides far-reaching web development services with customer-pivotal access. We have a team of highly purposeful web developers offering adaptable and vital web services globally. Our web developers are skillful in providing custom, built and highly expandable websites." devpara2="Our team of web developers has more than 5+ years of experience and expertise in straight-up domains. They are accomplished with the latest technologies and tools to deliver absolute website development services. Our web development team is formative and forward-looking when you think of present-day technologies and trends. Our Cost to Hire Web App Developers in India depends on the complexity, features, and location that you want to include in your application.We provide complete web development results from design, development, testing to launch." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    {/* <Keen/> */}
    <TabSection/>
    <Footer/>
    </>
  )
}

export default WebDevelopment
