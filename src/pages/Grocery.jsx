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

function Grocery() {
  return (
    <>
    <Header/>
    <ServHero title="Grocery Delivery App Development Solutions" subtitle="" para="Being one of the leading names in the Grocery delivery app development field, Devhence Solution has a dedicated team of passionate App Developers in Houston TX to build an all-encompassing grocery delivery application.. Our app is flexible enough for aggregators, startups, grocery chains etc., imbibing all novel marketing capabilities as per desire." bgurl="/images/grocerysevbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Key Advantages of On-Demand Grocery Delivery App Development" rightpara="We at Devhence Solution provide Top Mobile App Development in India IL for every platform. Our experienced team will study the geographical details of the grocery delivery business and offer ultimate solutions to assist you in expanding your reach." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/grocery1.png" title="Pre-Packaged Solution" para="A ready-to-establish grocery delivery app development services for a faster time to market, without significant time and money."/>

                <AndroidServ icon="/images/grocery2.png" title="On-Premise Implementation" para="Our best grocery delivery app development company is conveyed on your private servers to provide full command over the significant data generated."/>
                
                <AndroidServ icon="/images/grocery3.png" title="Domain Proficiency" para="Devhence Solution is a leading name in the grocery delivery Mobile app development world for providing better solutions to industries."/>

                <AndroidServ icon="/images/grocery4.png" title="Accept Payments Globally" para="Presence of new-gen popular payment gateways and easy addition of new ones according to business requirements."/>

                <AndroidServ icon="/images/grocery5.png" title="Flexible and Robust" para="Availability of uttermost flexibility in our grocery delivery on-demand grocery delivery app development services with the option of upgrading capacity as per the need."/>

                <AndroidServ icon="/images/grocery6.png" title="In-Built User Experience" para="Professionally designed Grocery delivery Mobile app development and web interfaces in order to provide an excellent client experience to all the users."/>

                {/* <AndroidServ icon="/images/ott7.png" title="Optimal Performance" para="We optimize & enhance the performance of the TV streaming app to ensure that the OTT app is running smoothly and offers a seamless experience to users."/>

                <AndroidServ icon="/images/ott8.png" title="OTT App Maintainence and Support" para="Devhence Solution offers a wide varsity of maintenance and support options that go beyond app deployment. When it comes to app, we are more than business."/> */}
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/grocerybanner.png" devtitle="Grocery Delivery App Development Services" devstrong="" devpara1="We are known as the best mobile app development company in India, which provides one of the best solutions for businesses to sell their products online. Our end-to-end grocery solutions include separate applications for customer and delivery executives." devpara2="Our dedicated and highly experienced app developers in India build customized and ready-to-go grocery delivery mobile apps. At Devhence Solution, we always focus on our client's requirements. Plus, we take fewer charges, making us different from our competitors. The custom grocery delivery app assists you in saving time and buying your groceries more conveniently. Nowadays, every business is looking for a mobile app so that the customers can buy their items by sitting at their home just with a couple of clicks." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    {/* <Keen/> */}
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Grocery
