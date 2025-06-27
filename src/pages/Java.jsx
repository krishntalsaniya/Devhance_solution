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

function Java() {
  return (
    <>
    <Header/>
    <ServHero title="Top Java/J2EE Software Development Company" subtitle="Blade | Dropwizard | Hibernate | JHipster | PrimeFaces" para="Devhence solutions  is the top web, mobile design, and software development company in India that offers scalable web design solutions across the verticals. Being the most popular programming language for Android smartphone apps and most favored for edge device and IoT development, we hold complete proficiency in Java." bgurl="/images/javaservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Java Application And Software Development Services" rightpara="It’s always wise to customize the appearance of a business website and that’s where the role of Java language comes in. Let us introduce to you the Java-based services that we provide." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/java1.png" title="Custom Java Development" para="Devhence solutions  a supreme mobile app development agency in India, is committed to providing custom Java app development of native and cross-platform applications for desktop and mobile devices."/>

                <AndroidServ icon="/images/java2.png" title="Java Web Development" para="Our developers use Java, integrated with HTML, JavaScript, and Css, to build high-performance web applications."/>
                
                <AndroidServ icon="/images/java3.png" title="Java Application & Maintenance" para="We offer app support and maintenance services to ensure your app is working in optimal condition."/>

                <AndroidServ icon="/images/java4.png" title="Java Mobile Development" para="We have skilled developers who easily craft lightweight, fast and rich feature mobile applications using Java."/>

                <AndroidServ icon="/images/java5.png" title="Java/J2EE Development" para="Devhence solutions is the best software development company near me, committed to offering the best solutions to small, medium, and large-scale enterprises using the J2EE platform."/>

                <AndroidServ icon="/images/java6.png" title="Java Software Development" para="Our team of professionals can create a java application as per your requirement. They can also complete complex projects on time."/>
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/javabanner.png" devtitle="Java Development Company | Java Software Development Services" devstrong="" devpara1="Devhence solutions is a leading app development company in Kuwait with 5+ experience in the app/website development industry. Our team of developers has more than 3+ years of industry experience and expertise in various domains. Every one of our professionals are well versed with the latest technologies and tools to deliver comprehensive Java App Development Services, then be it for the website or for the applications; we create wonders. We, as a Java Development Company, agree to the fact that Java is a dominant programming language used in the distributed environment of the internet, and that encourages us to build scalable, platform-independent, and robust mobile app development in Bahrain for diverse business domains." devpara2="Java is a widely-used programming language that was designed to have the look and feel of the C++ language. But in reality, Java enforces an object-oriented programming model, which makes it easier to use than C++" />

    <WhyChoose whytitle="Why Choose Java for Application Development?" whysubtitle="Java is a high-level language with platform-independence and that makes it easy to access and developers' first choice. Java is the Preferred language for designing complex applications. It is a secure language and has all the benefits that a developer can wish for a custom mobile app development in India" whycardimg1="/images/wjava.png" whycardpara1="Java is a fantastic programming language since it assures a high level of security and reduces the amount spent on building apps." whyimgpara1="Assures a High-Level Security" whycardimg2="/images/wjava2.png"  whycardpara2="Java programming language has debugging capabilities. It means it is easy to detect and remove existing and potential errors in code." whyimgpara2="Debugging Capability" whycardimg3="/images/wjava3.png" whycardpara3="Java is able to provide multiple APIs and Libraries for app development. It enables programmers to use a rich set of commands." whyimgpara3="provide multiple Apis and Libraries" whycardimg4="/images/wjava4.png" whycardpara4="No doubt that Java is user-friendly. Usually, it was designed to be easy to use so easy to use for mobile app development." whyimgpara4="User-Friendly"  whycardimg5="/images/wjava5.png" whycardpara5="Java is a fast and efficient programming language, as it easily builds leading apps for small, medium and large enterprises." whyimgpara5="Faster and Efficient" />

    <Process/>
    <Industries />
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Java
