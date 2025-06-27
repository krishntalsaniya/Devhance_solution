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

function Doctor() {
  return (
    <>
    <Header/>
    <ServHero title="Doctor On Demand" subtitle="" para="Doctor on-demand application help to provide virtual care. This application is available when you need instant help anywhere and anytime. Through the help of this application, patients can connect face-to-face with board-certified providers and licensed therapists over live video on their tablet or smartphone. In simple terms, this is the best way for those who have an emergency, so they can easily connect with the doctors." bgurl="/images/doctorservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="How Does Doctor-on-Demand App Work" rightpara="We all know that Doctor on Demand is a great platform to connect with a doctor through video calls. Using this app, users can easily consult with doctors and get instant treatment as per their condition. Here, we list out how the doctor-on-demand app works:" />
            <div className="serv-bottom">
                <AndroidServ icon="/images/doctor.png" title="User Registration" para="Start by downloading the Doctor On Demand app from the App Store or Google Play. Then, create an account by providing essential information, including your medical history and insurance details.
                           "/>

                <AndroidServ icon="/images/doctor2.png" title="Appointment Scheduling" para="Navigate through the app to schedule an appointment based on your healthcare needs. And choose a suitable time for a video consultation with a licensed healthcare professional.
                           "/>
                
                <AndroidServ icon="/images/doctor3.png" title="Virtual Waiting Room" para="When it's time for your appointment, enter the virtual waiting room within the app. You'll be in a queue until the healthcare provider is ready to see you."/>

                <AndroidServ icon="/images/doctor4.png" title="Video Consultation" para="Once connected, you'll have a face-to-face video consultation with a qualified doctor, psychologist, or another healthcare professional. Discuss your symptoms, medical history, and any concerns you may have."/>

                <AndroidServ icon="/images/doctor5.png" title="Diagnosis and Treatment Plan" para="The healthcare professional will assess your condition, provide a diagnosis, and recommend a treatment plan. They may prescribe medications, suggest lifestyle changes, or offer further guidance based on your health issue."/>

                {/* <AndroidServ icon="/images/sofascore6.png" title="Customization" para="Users can customize the Mobile Application Development in Chicago to follow their favorite teams and leagues. They can set up notifications to receive alerts for specific events, such as when a match starts, when a goal is scored, or when the game ends.
                           "/> */}
 
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/doctorbanner.png" devtitle="
What is a Doctor-on-Demand Application" devstrong="" devpara1="Doctor On Demand is a telemedicine app that aims to revolutionize healthcare access by putting your doctor's office at your fingertips. Through this app, users can connect with doctors, licensed psychologists, and other healthcare professionals for virtual consultations via video calls. The platform covers a wide range of medical issues, including general health conditions, mental health and chronic diseases. It provides a convenient and quick solution for people seeking medical advice without having to visit a clinic." devpara2="The app's user-friendly interface allows patients to make appointments, discuss their symptoms, and receive personalized treatment plans from their homes. This on-demand medical service is especially useful for non-emergency situations, allowing users to receive quick attention without travelling or waiting at a traditional clinic. If you want to build an app like Doctor-on-demand, you have to search for a leading doctor-on-demand app development company." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    {/* <Keen/> */}
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Doctor