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
import Footer from '../components/Footer'

function Angular() {
  return (
    <>
    <Header/>
    <ServHero title="AngularJS Development Company" subtitle="Best and renowned angularJS Developers" para="Devhence solutions is a leading app development company in Dubai, developing web apps by leveraging the potential of Angular, and has successfully developed web apps for varied industries with complex requirements. To make sure you stay ahead in the market, we use the best Angular tools and features for your project." bgurl="/images/angularservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Angular Development Service Suite" rightpara="It is beneficial to customize the appearance of business as per the requirements and here comes the role of AngularJS. We offer a complete array of Angular service suits that can transform businesses." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/angular1.png" title="Single Page Applications" para="As a leading name, Devhence solutions has a team of dedicated developers proficient in building single-page applications."/>

                <AndroidServ icon="/images/angular2.png" title="API Integration Service" para="We are experienced and well-versed in providing API integration services to our valuable clients within their budgets."/>
                
                <AndroidServ icon="/images/angular3.png" title="Real-Time Web Apps" para="Would you want real-time web applications? We are here to help you in every possible way from start to finish."/>

                <AndroidServ icon="/images/angular4.png" title="Portal Redesign in Angular" para="Our team of talented developers also provides redesigning portal services to clients. We also make sure customer satisfaction."/>

                <AndroidServ icon="/images/angular5.png" title="Angular Consulting For Enterprise" para="Devhence solutions is a leading mobile application development company in India that provides app development services and consults enterprises to get the best solutions."/>

                <AndroidServ icon="/images/angular6.png" title="Progressive Web Apps" para="Instead of building mobile applications Devhence solutions is known for providing progressive web app development services to different businesses."/>
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/angularbanner.png" devtitle="AngularJS Web Development Company" devstrong="" devpara1="Devhence solutions is a highly trusted company in the AngularJS development domain. Angular development is ever-evolving, and therefore, our Angular team of developers fully understands the stack of JavaScript technologies and stands out in developing web and app development in Kuwait. We have a dedicated team for AngularJS to develop the functional application." devpara2="In the past, we have successfully developed web and mobile application development in Bahrain on the AngularJS platform. We develop cross-platforms with full functionality that accomplished goals and delivers the intended results. Our team of web and mobile app developers are well versed with the latest tools and technologies to deliver complete angularJS development services." />

    <WhyChoose whytitle="Why Chose AngularJS For Development Purpose?" whysubtitle="Angular JS is powered by Google and is the preferred choice of our developers because of its various benefits. It is easy to access, integrates the architecture of MVVM, and MVC models. Here are some of the benefits of AngulrJS that you need to know:" whycardimg1="/images/angularimg1.png" whycardpara1="While using AngularJS, we have successfully built many applications that rightly fitted the clients’ requirements." whyimgpara1="Client Satisfaction" whycardimg2="/images/angularimg2.png"  whycardpara2="It has enhancements features like animation, data binding, API client, routing and content sanitization, scope management, and scope management. All these amplifications make developers work effortlessly." whyimgpara2="Enhancements" whycardimg3="/images/angularimg3.png" whycardpara3="Angular JS is a robust language and gives excellent performance." whyimgpara3="Excellent Performance" whycardimg4="/images/angularimg4.png" whycardpara4="It has a user-friendly interface defined by HTML." whyimgpara4="Declarative User Interface"  whycardimg5="/images/angularimg5.png" whycardpara5="Angular is linked together by (DI) Dependency Injection." whyimgpara5="Unit Testing" />

    <Process/>
    <Industries />
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Angular
