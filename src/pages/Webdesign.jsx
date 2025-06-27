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

function Webdesign() {
  return (
    <>
    <Header/>
    {/* <ServHero title="Web3 Development Company" subtitle="" para="Being a leading web3 development company, we craft interactive solutions including AI, NFTs, AI, IoT and Cryptography technologies. With in-depth knowledge in web3 tools, oracles, APIs and Programming languages such as solidity and rust, we serve the best to our valuable clients at an affordable price." bgurl="/images/web3servbg.jpg" /> */}
    <FormHero title="Offers Customizable Responsive Website" para="Devhence Solution is a top web and mobile app development company in Dubai that offers scalable web design solutions across the verticals. Take your website to the next level with our lateral thinking. Our web designers work hard to fit your business needs by integrating the latest technologies and provide you with the best responsive web design services." />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Devhence Solution Offers Customizable Responsive Website" rightpara="Partnering with a responsive website design company like Devhence Solution offers you an immaculate website while ensuring the right site features, web tools, and the required content you need to grow your organization. Wherever you are on this planet, look no farther than Devhence Solution. We are a trusted responsive website design company that can get your site running and responsive. It's not just the website; we create a seamless user experience that keeps them coming back, and that’s the reason why we are the best mobile app development company in India." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/webdesign1.png" title="Responsive web Designing" para="We provide the most adaptive responsive design solutions to our clients while making it viable on all devices."/>

                <AndroidServ icon="/images/webdesign2.png" title="Custom Web Designing" para="Our mobile app developers in India put their heart into designing websites that suit your business needs, with ease of access for your customers."/>
                
                <AndroidServ icon="/images/webdesign3.png" title="Dynamic Website Design" para="With our dynamic web design services, you get full control of a fine-tuned, functionally rich, interactive website."/>

                <AndroidServ icon="/images/webdesign4.png" title="Bug-Free Applications" para="After releasing the app, we make sure to update it and keep a tab on the community built around it."/>

               
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/webdesignbanner.png" devtitle="Partner With A Top Rated Web Designing Company" devstrong="" devpara1="Devhence Solution is a highly trusted web design company based in India. We provide comprehensive mobile app development in Kuwait, along with website design services with a customer-centric approach. We have a team of highly dedicated responsive web designers offering scalable and robust services globally." devpara2="We provide complete website designing solutions from PSD to a responsive web design. We don’t just design, but also make sure to put our designed websites ahead in the market. Not to forget, the websites developed by us meets all the quality stands of Google, are SEO friendly, comes with load speed optimization, and are all browser compatible." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    {/* <Keen/> */}
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Webdesign
