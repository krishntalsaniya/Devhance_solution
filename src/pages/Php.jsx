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

function Php() {
  return (
    <>
    <Header/>
    <ServHero title="PHP Web Development Company" subtitle="CodeIgniter | Laravel | CakePHP | Zend | Symfony" para="Devhence solutions is the top web and app design and mobile app development company in India that offers scalable web designing solutions across the verticals. We fabricate tailor-made PHP solutions that are responsive, rapid, and adaptable. The maturity of PHP simply propels our developers to build engaging, and interactive websites." bgurl="/images/phpservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="PHP Development Services" rightpara="Our aim is to deliver best-class custom PHP development solutions with accuracy. And it’s possible with the support of backend and frontend experts, who relish creating dynamic and fully-functional websites." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/php1.png" title="PHP Customization" para="Devhence Solution is a leading name in the city that provides PHP customization services within your budget."/>

                <AndroidServ icon="/images/php2.png" title="Plugin Development" para="To get plugin development services, count on Devhence Solution. Our team will assist you in every possible way."/>
                
                <AndroidServ icon="/images/php3.png" title="PHP eCommerce Development" para="Bring your business to the online portal by opting for eCommerce mobile app development in Bahrain from Devhence solutions."/>

                <AndroidServ icon="/images/php4.png" title="PHP UX/UI Development" para="If you want professional-looking UX/UI, we are here to help. Our team of developers provides you the best solutions."/>

                <AndroidServ icon="/images/php5.png" title="PHP Portal Development" para="Count on Devhence solutions for PHP portal development services. We have a team of skilled and trusted app developers."/>

                <AndroidServ icon="/images/php6.png" title="Web Application Development" para="Our dedicated developers are proficient in building functional and easy-to-use applications for our valuable clients."/>
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/phpbanner.png" devtitle="A Leading PHP Development Service Provider" devstrong="" devpara1="Devhence solutions is a trusted PHP mobile app development company in India that provides dynamic web pages and web application services with quality assurance." devpara2="Our web development team has more than 5+years of experience and holds expertise in straight-up domains. The development team is well-versed in the latest technologies and tools to deliver the best mobile app development services in India and PHP web development services." />

    <WhyChoose whytitle="Why Choose Devhence solutions for PHP Web Development?" whysubtitle="PHP web is powered by the Zend Engine and it runs on different platforms, such as Windows, Linux, etc. We have a sharp and skilled team of mobile app developers in Dubai who have successfully worked on PHP web development services. Here are some of the factors that set us apart:" whycardimg1="/images/phpwhy1.png" whycardpara1="In PHP web development, there are numerous different aspects including the development of applications, e-commerce, and other websites in which we are expert at." whyimgpara1="Well Acquatined" whycardimg2="/images/phpwhy2.png"  whycardpara2="Before hiring the PHP web development services, we assure you that our firm holds considerable experience in the domain of developing and designing websites." whyimgpara2="Rational Experience" whycardimg3="/images/phpwhy3.png" whycardpara3="Our PHP web developers are adept in the app development. We assure you that we will get a website that provides an edge over our competitors." whyimgpara3="Specialization" whycardimg4="/images/phpwhy4.png" whycardpara4="For seamless accessibility, are always up with options like telephone, email and live chat." whyimgpara4="Accessibility"  whycardimg5="/images/phpwhy5.png" whycardpara5="We promise to get your website ready and delivered in the desired time frame and that too at a much reasonable cost." whyimgpara5="Time Frame and Cost" />

    <Process/>
    <Industries />
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Php
