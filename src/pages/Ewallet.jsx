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

function Ewallet() {
  return (
    <>
    <Header/>
    <ServHero title="eWallet App Development Company" subtitle="" para="Devhence Solution is a leading eWallet mobile app development company in Dubai UAE, that uses the latest technologies and integrations to deliver custom mobile and web wallet solutions for businesses and their customers. Walk into the future of eWallet App Development with our team of expert App Developer in Dallas." bgurl="/images/ewalletservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="How Does An eWallet App Work?" rightpara="Devhence Solution , being a leading eWallet mobile app development company in India, strives to deliver solutions that can meet all your eWallet business needs. Partnering with us will help you in gliding through the latest trends in technology." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/ewallet1.png" title="User Registration" para="With our exemplary eWallet mobile app development in Bahrain, your users will be able to register on the eWallet app with email, phone number, social media, and other options.
                           "/>

                <AndroidServ icon="/images/ewallet2.png" title="Wallet Money " para="Registering allows users to use other features including wallet. With a wallet your users will be able to send and receive money in the speed of a flash.
                           "/>
                
                <AndroidServ icon="/images/ewallet3.png" title="Money Transfer" para="Apart from being able to add money in the wallet, your users will be able to send/receive money to someone or a bank account."/>

                <AndroidServ icon="/images/ewallet4.png" title="Add Bank Account" para="For better transactions our eWallet app development services will integrate a feature in your app that will help your users to send and receive money directly from the bank account itself."/>

                <AndroidServ icon="/images/ewallet5.png" title="Check Balance" para="With this feature the eWallet app will allow your users to see the balance money left in the app wallet and also bank account balance."/>

                <AndroidServ icon="/images/ewallet6.png" title="Mobile Recharge" para="As a top eWallet app development company we can integrate recharge options in your apps for mobile phone, DTH recharge, paying bills, and more.
                           "/>

                 
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/ewalletbanner.png" devtitle="The Best eWallet App Development Services" devstrong="" devpara1="The world is turning digital, every person and every service is online. Gone are the days of counting change to pay money, today transactions are done with a tap. Devhence Solution  delivers custom digital wallet development services aiming to provide cashless payment solutions for businesses and their customers.

As the best eWallet mobile app development company in India, we develop highly secure eWallet solutions for Android and iOS that facilitate a quick transaction process. Our dedicated team develops an eWallet app with cutting-edge features such as a secure payment gateway, change password, login screen, etc." devpara2="Devhence Solution aims to provide its clients a robust, secure and feature rich eWallet app. Our technologies for eWallet Top Mobile App Development company in Atlanta include QR code, iBeacon, Bluetooth, etc., in order to make your application reliable and fast. As a leading name, we can build eWallet apps for various industries, including financial establishment, healthcare, logistics, merchant payment, and many more." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    {/* <Keen/> */}
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Ewallet