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

function Gpay() {
  return (
    <>
    <Header/>
    <ServHero title="Google Pay: A Secure Digital Wallet App" subtitle="" para="Google pay is a simple and secure payment app by Google. It will offer and earn rewards as you pay. However, you must link your bank account on this application with your registered mobile number. After registering your phone number, you will get a unique ID used to make UPI payments in place of bank account details. On the other hand, there is a requirement for a UPI PIN that ensures the security of the app. If you want to build an app like Google pay count on Devhence Solution , a leading eWallet mobile app development company in India." bgurl="/images/gpayservbg.jpg" />
      {/* <div className="servour">
        <div className="container">
          <ServOur leftTitle="Our Sports Betting App Services" rightpara="Our Mobile App Developers in India are truly passionate about innovative approaches and the unique features that make your application attractive and distinguishable. We share signals and input with you to make sure to develop new and unique perspectives on your product to enable your sports betting platform." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/betting1.webp" title="Tennis Betting App" para="Our tennis betting App Development in India offers real-time scores and detailed match insights, making it easy for users to place informed bets. With an intuitive interface and live updates, players can follow every serve and rally with excitement. Devhence Solution, being the Top-Rated Sports Betting mobile app development company in India, delivers a top-notch experience for tennis enthusiasts.
                           "/>

                <AndroidServ icon="/images/betting2.webp" title="Basket Betting App" para="offers elaborate basketball betting applications that are capable of showing live stats and scores. It also has mobile sports betting app features are easy-to-use interface and betting options that are variable with the quick rate of basketball. Basketball is one of the most bet sports; immerse yourself in the best bet without hassle.
                           "/>
                
                <AndroidServ icon="/images/betting3.webp" title="Soccer Betting App" para="offers online betting software for Soccer we create optimized applications for soccer lovers. As key points, we provide real-time display, clear layouts, and safe payments to improve betting. It’s our mandate to develop a contemporary platform that will pitch the adrenaline rush of soccer according to your specifications."/>

                <AndroidServ icon="/images/betting4.webp" title="Boxing Betting App" para="provides boxing betting applications that display fight information, and real-time betting probabilities. Hire sports betting mobile app developers in India, to focus on the most devoted group of viewers who are the lovers of boxing, interested in every punch and round. Experience an exciting betting experience with the use of advanced technologies."/>

                <AndroidServ icon="/images/betting5.webp" title="Hockey Betting App" para=" sports betting software providers offer agile hockey betting applications with features such as in-game statistics and real-time betting. People can smoothly bet on all the hockey events with real-time stats and odds updating."/>

                <AndroidServ icon="/images/betting6.webp" title="Horse Racing Betting App" para="Transform your horse racing business with our premium betting app solution with a modern touch by Devhence Solution. Our specialist staff provides business-oriented, tailored, lightweight solutions with real-time capabilities and the highest security levels. On this page, you can find out more about cooperating with us to get the best betting experience!
                           "/>

                <AndroidServ icon="/images/betting7.webp" title="Rugby Betting App" para="We build applications that work in real time and many other related parameters. We know how to create a sports betting model without any complications and multiple interesting features that enhance easy betting. With our interactive applications at Devhence Solution, rugby enthusiasts can feel the experience without going to the event.
                           "/>

                <AndroidServ icon="/images/betting8.webp" title="Cricket Betting App" para="The live cricket score app development by Devhence Solution includes live coverage of the scores and detailed statistics to heighten the fan’s betting experience. The wagers made on matches or tournaments are interestingly placed through our apps. Satisfy your appetite for cricket with ease using our clean and appealing Betting applications.
                           "/>

                 
            </div>
        </div>
    </div> */}
    <ForDev devbanner="/images/gpaybanner.png" devtitle="What is Google Pay App & Why is it considered a Payment App?" devstrong="" devpara1="This is a secure payment app that helps users to transfer money and get rewards. Using this custom mobile app development in india, users can easily make payments. Moreover, it provides convenient access to hundreds of millions of cards saved to Google accounts worldwide." devpara2="A fantastic thing about the mobile app development solutions in India is that users can make group payments and split bills. So you don’t have to worry about your payment. Users can earn rewards for negligible transactions and referrals when they make payments. Moreover, they find offers from their favourite merchants." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <ForDev devbanner="/images/gpaybanner2.png" devtitle="How Does Google Pay App Work?" devstrong="" devpara1="When a user clicks on the Google Pay payment button, they see a payment sheet that displays the payment methods saved to their Google Account and optional fields such as a shipping address field. On the other hand, users can instantly choose a payment method, add an optional shipping address or add new information." devpara2="The users click the Google Pay payment button and see a sheet with a list of supported payment methods.

The users choose a payment method, and Google Pay securely returns a payment token for the method to your application.

Now the application submits the payment token, including details about the purchase, to its backend.

In order to execute the payment, the backend procedure the purchase and sends the payment to the payment service provider." />
    <Industries />
    {/* <Keen/> */}
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Gpay