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

function Bookmyshow() {
  return (
    <>
    <Header/>
    <ServHero title="BookMyShow | Movies & Events" subtitle="" para="BookMyShow is an online platform that allows users to book tickets for movies, plays, concerts, and other events. It was founded in Mumbai, India, in 1999 and has since become one of the leading ticketing platforms in India, with a presence in over 650 towns and cities. If you want to build such an application, you can contact a leading BookMyShow Mobile App Development Company in India.

Users can browse through various events and movies listed on the platform and book tickets for their preferred shows using their website or mobile app. The platform offers a range of payment options, including credit/debit cards, net banking, and various e-wallets." bgurl="/images/bookmyshowservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="How Does BookMyShow App Work?" rightpara="BookMyShow is an online platform that allows users to book tickets for movies, concerts, sports events, and other entertainment shows. On this platform, you will be able to book a ticket easily. The BookMyShow custom mobile app development in India works as follows:" />
            <div className="serv-bottom">
                <AndroidServ icon="/images/bookmyshow1.png" title="Registration" para="Users must first register with the BookMyShow app by creating an account using their mobile number or email ID.
                           "/>

                <AndroidServ icon="/images/bookmyshow2.png" title="Search for shows" para="Once logged in, users can search for movies, concerts, plays, sports events, and other entertainment shows using the search bar. They can also browse the recommended shows based on their location and past bookings.
                           "/>
                
                <AndroidServ icon="/images/bookmyshow.png" title="Select Show" para="Once users find the show they are interested in, they can select the date, time, and seats they prefer. They can view the seat layout and choose the seats that suit them best."/>

                <AndroidServ icon="/images/bookmyshow4.png" title="Payment" para="After selecting the seats, users need to make the payment for the tickets. BookMyShow accepts various payment methods, including debit/credit cards, mobile wallets, and net banking."/>

                <AndroidServ icon="/images/bookmyshow5.png" title="Ticket delivery" para="Users receive an e-ticket on their registered mobile number or email ID once the payment is complete. They can also collect the physical ticket from the box office counter at the venue."/>

                <AndroidServ icon="/images/bookmyshow6.png" title="Cancellation/Refund" para="If users need to cancel their booking, they can do so by selecting the 'Cancel' option in the app. The refund will be initiated based on the cancellation policy of the show.
                           "/>
 
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/bookmyshowbanner.png" devtitle="What is a BookMyShow App & Why is it considered an Entertainment App?" devstrong="" devpara1="BookMyShow is a popular entertainment ticketing platform that allows users to book tickets for various entertainment events, including movies, plays, concerts, sports events, and more. It is considered an entertainment app because it allows users to easily access and book tickets for a wide variety of entertainment events in one place, making buying tickets more convenient and streamlined." devpara2="If businesses also want to develop an app like this, they need to hire an experienced Mobile App Development Company in India.

The app also provides users with a range of other features, including the ability to check movie showtimes and locations, read reviews and ratings of movies, browse trailers, and even book tickets for special events like film festivals and live music performances. Additionally, the mobile app development solutions in India allow users to choose their seats, pay for their tickets online, and receive their tickets electronically, making the entire booking process more seamless." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    {/* <Keen/> */}
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Bookmyshow