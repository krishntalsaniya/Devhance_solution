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

function Pos() {
  return (
    <>
    <Header/>
    <ServHero title="A Reliable POS Software Development Company" subtitle="" para="Devhence Solutions designs and crafts custom point of sale(POS) software that allows management to organize inventory and staff levels, perform data analysis, and bill customers." bgurl="/images/posservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Devhence Solutions Provides Custom POS Software Development Services" rightpara="Result-oriented and innovative services for POS development Solutions." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/pos1.png" title="POS Ecosystem Consulting" para="Being a reliable software development company in India, Devhence Solutions offers the best services, from creating a brand POS software to integrating 3rd party solutions with existing POS solutions."/>

                <AndroidServ icon="/images/pos2.png" title="Accounting Integration" para="POS software will assist you in automating your bookkeeping and invoice management procedure. Plus, it always helps you in integrating your accounting solutions."/>
                
                <AndroidServ icon="/images/pos3.png" title="POS NFC App Development" para="In order to make your POS solution more efficient, Devhence Solutions develops custom NFC-enabled apps to facilitate your customer's contactless payments."/>

                <AndroidServ icon="/images/pos4.png" title="Pay at Table Solution" para="Empower your business customers to make a payment right from their table in order to check out easily and with safer contactless and safe payment solutions."/>

                <AndroidServ icon="/images/pos5.png" title="3PI Integration" para="Being a leading name, we provide integration services with third-party APIs so you can smoothly run your POS operations without unnecessary overheads."/>

                <AndroidServ icon="/images/pos6.png" title="Loyalty Management Software" para="Investing in custom POS Mobile Application Development in India, equipped with transactional, referral, and behavioral rewards, can increase your repeat sales and revenue per customer."/>

                {/* <AndroidServ icon="/images/aiml7.png" title="AI Product Development" para="At Devhence Solutions, the team of app developers in Dubai is power-packed with tools and expertise in commercial and open-source AI. With AI tools and frameworks you can power launch your AI products in the market. Hire the best AI and ML development company to experience rapid AI Product Development."/>

                <AndroidServ icon="/images/aiml8.png" title="Computer Vision" para="Devhence Solutions is a leading AI and ML app development company in Bahrain, providing seamless development of custom solutions catering to digital images and videos. With such a service you can analyse your records, categorise and track them."/> */}
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/posbanner.png" devtitle="Our Achievement as a POS Development Company" devstrong="" devpara1="Being a leading POS development company, we provide robust technological solutions for your business requirements. Our POS Software Developers in Chicago are well equipped and have the expertise to efficiently handle enterprise and custom services. On the other hand, their hands-on experience in providing custom POS software to a wide array of industries makes us a POS" devpara2="" />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    <Keen/>
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Pos
