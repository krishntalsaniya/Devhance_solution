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

function Webdesign() {
  return (
    <>
      <Header />
      {/* <ServHero title="Web3 Development Company" subtitle="" para="Being a leading web3 development company, we craft interactive solutions including AI, NFTs, AI, IoT and Cryptography technologies. With in-depth knowledge in web3 tools, oracles, APIs and Programming languages such as solidity and rust, we serve the best to our valuable clients at an affordable price." bgurl="/images/web3servbg.jpg" /> */}
      <FormHero
        title="Customizable & Responsive Web Design Services"
        para="Devhence Solutions is a leading web and mobile app development company based in Vadodara, offering scalable, high-performance web design solutions tailored to your business needs.
Our team of creative web designers integrates the latest technologies to craft responsive, user-friendly websites that adapt flawlessly across all devices. With a focus on functionality and aesthetics, we help take your online presence to the next level ensuring it works as beautifully as it looks."
      />
      <div className="servour">
        <div className="container">
          <ServOur
            leftTitle="Devhence Solutions Customizable, Responsive Web Experiences"
            rightpara="Partnering with a responsive web design company like Devhence Solutions means more than just getting a modern website it’s about building a seamless digital experience tailored to your users.
We deliver clean, scalable, and fully responsive websites that integrate the right features, tools, and content to support your business growth. No matter where you're located, our Vadodara-based team is ready to bring your vision to life."
          />
          <div className="serv-bottom">
            <AndroidServ
              icon="/images/webdesign1.png"
              title="Responsive Web Design Solutions"
              para="At Devhence Solutions, we deliver highly adaptive and future-ready responsive web designs that ensure a flawless user experience across all devices from smartphones and tablets to desktops.
Our goal is simple: to make your website look great and perform seamlessly, no matter where it’s viewed."
            />

            <AndroidServ
              icon="/images/webdesign2.png"
              title="Custom Web Design Tailored to Your Business"
              para="At Devhence Solutions, our skilled web developers in Vadodara, India craft custom website designs that align perfectly with your business goals. We focus on creating visually appealing, user-friendly interfaces that ensure easy navigation and a seamless experience for your customers."
            />

            <AndroidServ
              icon="/images/webdesign3.png"
              title="Dynamic Website Design Services"
              para="Devhence Solutions offers dynamic web design solutions that give you complete control over a feature-rich, interactive website. Our expertly crafted dynamic websites are built for flexibility, scalability, and user engagement allowing you to manage and update content effortlessly while delivering a smooth and modern experience to your visitors."
            />

            <AndroidServ
              icon="/images/webdesign4.png"
              title="Bug-Free Applications with Ongoing Support"
              para="At Devhence Solutions, we don’t just launch your app we ensure it runs flawlessly post-deployment. Our team actively monitors performance, listens to user feedback, and delivers timely updates to keep your application secure, stable, and bug-free."
            />
          </div>
        </div>
      </div>
      <ForDev
        devbanner="/images/webdesignbanner.png"
        devtitle="Partner with a Top-Rated Web Design Company in India"
        devstrong=""
        devpara1="Devhence Solutions is a trusted web design and development company based in Vadodara, India, known for delivering scalable, responsive, and result-driven websites. With a customer-centric approach, we not only specialize in website design but also offer end-to-end mobile app development services across industries."
        devpara2="Our skilled team provides complete website solutions — from PSD conversion to fully responsive, SEO-optimized web designs."
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

export default Webdesign;
