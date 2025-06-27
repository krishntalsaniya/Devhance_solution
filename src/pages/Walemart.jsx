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

function Walemart() {
  return (
    <>
    <Header/>
    <ServHero title="Walmart Shopping & Savings" subtitle="" para="Walmart is a renowned multinational retail conglomerate that offers a wide range of products and services to customers around the world. The company is known for its 'Everyday Low Prices' and commitment to providing consumers with affordable shopping options. Therefore, the demand for shopping app development is high.

One of the main advantages of shopping at Walmart is the wide range of products available. From groceries, home goods, electronics, clothing, and even car accessories, Walmart offers a wide range of products for different needs and tastes. Walmart is known for its wide selection of products and its efforts to offer customers opportunities to save money. If you also want to build a shopping app, you have to contact a Walmart mobile app development company in India. With years of experience and knowledge, a leading company will provide the best solutions as per your demand and interest." bgurl="/images/walemartservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="How Does Walmart App Work?" rightpara="The Walmart App is a mobile application that allows users to conveniently purchase products, manage their Walmart accounts, and access various services offered by Walmart. Here's an overview of how the Walmart app works:" />
            <div className="serv-bottom">
                <AndroidServ icon="/images/walemart1.png" title="Download and Install" para="Users can download her Walmart app from their respective app stores, such as Apple App Store and Google Play Store. After downloading, you can install the app on your mobile device.
                           "/>

                <AndroidServ icon="/images/walemart2.png" title="Create an Account" para="New users can create a Walmart account within the app by providing personal information such as name, email address and contact information. Existing Walmart customers can log in with their registered email address and password.
                           "/>
                
                <AndroidServ icon="/images/walemart3.png" title="Browse and Shop" para="After logging in, users can browse different product categories or search for specific products using the search bar. The app provides detailed product information, including images, prices, customer reviews and ratings. Users can add items to their virtual cart by tapping the Add to Cart button."/>

                <AndroidServ icon="/images/walemart4.png" title="Shopping Cart Management" para="The app allows users to see items in their cart, change quantities, delete items, and save them for later use. Users can also create shopping lists and save their favourite products for quick access."/>

                <AndroidServ icon="/images/walemart5.png" title="Purchase and Payment" para="When the user is ready to purchase, they can proceed to checkout. The app offers a variety of payment options, including credit/debit cards, Walmart Pay (a mobile payment method), and gift cards. Users can enter payment details and complete transactions securely within the app."/>

                <AndroidServ icon="/images/walemart6.png" title="Order Tracking and Pickup/Delivery" para="After placing an order, users can track the status of their purchase within the app. Walmart offers a variety of fulfilment options, including in-store pickup and home delivery. The app will notify you of the progress of your order, including estimated delivery/pickup time.
                           "/>
 
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/walemartbanner.png" devtitle="What is Walmart App & Why is it Considered a Shopping App?" devstrong="" devpara1="The Walmart app is a mobile application developed by Walmart, one of the world's largest retailers. The app aims to improve the shopping experience for Walmart customers by providing a convenient platform for browsing and purchasing products, accessing exclusive offers and managing various aspects of shopping." devpara2="Users can search for specific products through the Walmart app or browse different categories to discover products. The app provides detailed product information, customer reviews, and ratings to help customers make informed purchasing decisions. Users can add products to a virtual shopping cart and checkout for online purchases. One of the main features of this app is its integration with physical Walmart stores. Users can use the app to create shopping lists, search for products at specific stores, and check product availability in real-time. This integration will also allow customers to order and pick up in-store, enabling a seamless shopping experience that combines online and offline channels.

The Walmart app also provides personalized recommendations based on your preferences and past purchases. We provide notifications about exclusive offers, discounts, and upcoming sales events so your customers can take advantage of cost-saving opportunities. Additionally, the app developed by our app developer in India allows users to track orders, view purchase history, and manage Walmart account settings." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    {/* <Keen/> */}
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Walemart