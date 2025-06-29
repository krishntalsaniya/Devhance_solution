import React from "react";
import ServHero from "../components/ServHero";
import Header from "../components/Header";
import ServOur from "../components/ServOur";
import Industries from "../components/Industries";
import AndroidServ from "../components/AndroidServ";
import ForDev from "../components/ForDev";
import TabSection from "../components/Tabs";
import Process from "../components/Process";
import WhyChoose from "../components/WhyChoose";
import Keen from "../components/Keen";
import FormHero from "../components/FormHero";
import Footer from "../components/Footer";

function WebDevelopment() {
  return (
    <>
      <Header />
      {/* <ServHero title="Web3 Development Company" subtitle="" para="Being a leading web3 development company, we craft interactive solutions including AI, NFTs, AI, IoT and Cryptography technologies. With in-depth knowledge in web3 tools, oracles, APIs and Programming languages such as solidity and rust, we serve the best to our valuable clients at an affordable price." bgurl="/images/web3servbg.jpg" /> */}
      <FormHero
        title="Top Website Development Company"
        subtitle="Your Trusted Platform for Scalable Web Development Solutions"
        para="Devhence Solutions is a leading web and mobile app development company based in Vadodara, India, offering powerful and scalable website development services tailored to your business goals.
With expertise across diverse industries and technologies, we create robust, user-friendly websites that are built for performance, security, and growth. Whether you’re a startup or an established enterprise, we deliver custom web solutions that adapt to your evolving needs.
Partner with Devhence Solutions where innovation meets reliability in every line of code."
      />
      <div className="servour">
        <div className="container">
          <ServOur
            leftTitle="Reliable & Scalable Web Development Services"
            rightpara="At Devhence Solutions, we specialize in building robust, creative, and fully scalable web development solutions tailored to meet both simple and complex business requirements.
Whether you're launching a basic website or a feature-rich web application, our expert team in Vadodara ensures cost-effective development without compromising on quality."
          />
          <div className="serv-bottom">
            <AndroidServ
              icon="/images/webdevelopmet1.png"
              title="Content Management System (CMS) Development"
              para="At Devhence Solutions, we develop intuitive and scalable CMS platforms that give you full control over your website’s content allowing you to update text, images, blogs, and more with ease. Whether it's WordPress, custom CMS, or enterprise-level solutions, we deliver platforms that are user-friendly, secure, and built for growth."
            />

            <AndroidServ
              icon="/images/webdevelopmet2.png"
              title="Seamless Social Media Integration"
              para="At Devhence Solutions, we integrate social media functionality into your website to enhance user engagement and accessibility. With seamless integration, users can easily connect, share, and navigate through their favorite platforms directly from your site improving visibility and user interaction."
            />

            <AndroidServ
              icon="/images/webdevelopmet3.png"
              title="Web Application Development"
              para="A web application is a software program that runs on a remote server and is accessed through a web browser over the internet.
At Devhence Solutions, we specialize in developing dynamic, scalable, and secure web applications tailored to meet your business objectives enabling seamless user experiences across devices and platforms."
            />

            <AndroidServ
              icon="/images/webdevelopmet4.png"
              title="Mobile Application Development"
              para="A mobile application is a software program specifically designed to operate on smartphones, tablets, and other mobile devices.
At Devhence Solutions, we develop high-performance mobile apps for Android and iOS built to deliver seamless functionality, intuitive design, and engaging user experiences that meet the demands of today’s on-the-go audience."
            />

            <AndroidServ
              icon="/images/webdevelopmet5.png"
              title="Mobile-Optimized Website Design"
              para="A mobile-optimized website automatically adapts its layout, design, and functionality to fit smartphones and tablets ensuring a smooth and intuitive user experience across all screen sizes.
At Devhence Solutions, we build websites that are fully responsive, fast-loading, and touch-friendly, so your users enjoy seamless navigation no matter what device they're using."
            />

            <AndroidServ
              icon="/images/webdevelopmet6.png"
              title="Document Management System (DMS) "
              para="A Document Management System (DMS) is a digital solution designed to efficiently store, organize, track, and manage documents reducing dependency on paper and improving workflow.
At Devhence Solutions, we develop secure and scalable DMS platforms that streamline document handling, enhance collaboration, and ensure quick access to critical information anytime, anywhere."
            />
          </div>
        </div>
      </div>
      <ForDev
        devbanner="/images/webdevelopmetbanner.png"
        devtitle="Top-Tier Web Development Services"
        devstrong=""
        devpara1="Devhence Solutions is one of the leading software development companies in India, delivering high-quality and scalable web development services with a customer-centric approach.
Our experienced web developers in Vadodara specialize in building custom, high-performance, and future-ready websites tailored to your business needs. With over 5+ years of expertise across diverse domains, our team leverages the latest tools, frameworks, and design trends to deliver complete web solutions from design and development to testing and launch."
        devpara2="We’re not just developers we’re strategic partners. Whether you need a simple corporate site or a complex web application, we craft responsive, user-focused platforms that drive results."
      />

      {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

      <Process />
      <Industries />
      {/* <Keen/> */}
      <TabSection />
      <Footer />
    </>
  );
}

export default WebDevelopment;
