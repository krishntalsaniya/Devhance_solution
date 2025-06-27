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

function Ruby() {
  return (
    <>
    <Header/>
    <ServHero title="Best Ruby on Rails Development Company" subtitle="Best In Class Services For Ruby On Rails Projects" para="Devhence solutions  can help your business reach its full potential with our Ruby on Rails mobile app development in Dubai. We harness the simplicity of Ruby on Rails to build dynamic, secure, and profitable websites and mobile apps for your business." bgurl="/images/rubyservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Ruby On Rails Customised Website Design & Development" rightpara="It is beneficial to customize the appearance of a business website as per the requirements and this is possible with Ruby On Rails customization services." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/ruby1.png" title="Ruby On Rails customization" para="Our Ruby on Rails customization services help you easily take your business to the next level."/>

                <AndroidServ icon="/images/ruby12.png" title="Web Application Development" para="Ruby on Rails is used to build innovative and leading custom web app development solutions, including PWA and SPA."/>
                
                <AndroidServ icon="/images/ruby3.png" title="Plugin Development" para="Devhence solutions is a leading mobile app development company that provides Ruby on Rails plugin development services."/>

                <AndroidServ icon="/images/ruby4.png" title="Ruby On Rails Portal Development" para="We have a team of experienced developers with good knowledge of building the Ruby on Rails portal for our clients."/>

                <AndroidServ icon="/images/ruby5.png" title="Ruby On Rails eCommerce Development" para="Our professional mobile app developers in Dubai are dedicated to crafting outstanding eCommerce applications and websites."/>

                <AndroidServ icon="/images/ruby6.png" title="Ruby On Rails UX/UI Development" para="Our team of developers understands that an app defines your identity, so we take care of UI/UX when crafting an app."/>
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/rubybanner.png" devtitle="Reasons To Go With Ruby On Rails Development Services" devstrong="" devpara1="Devhence solutions is a highly trusted Ruby on Rails mobile app development company in Saudi Arabia that delivers web application services with a dynamic development platform like Ruby on Rails. We develop the application with a customer-centric approach with a team of experienced app developers offering scalable and robust app development services globally." devpara2="Our team of Ruby on Rails developers has more than 5+ years of industry experience and expertise in vertical domains. They are well-versed in the latest technologies and tools to deliver the best mobile app development solutions in Kuwait." />

    <WhyChoose whytitle="Why Choose Ruby on Rails Development?" whysubtitle="Ruby on Rails (ROR) is also known as Rails. It is a web application framework that is written in the Ruby programming language. It is a well-known platform for Ruby on Rails developers that give a platform to develop applications and websites by its abstracting feature. Ruby on Rails is used to design mobile app development in India, as it is robust and user-friendly." whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" />

    <Process/>
    <Industries />
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Ruby
