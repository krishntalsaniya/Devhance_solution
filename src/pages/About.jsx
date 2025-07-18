import React from "react";
import ServHero from "../components/ServHero";
import Header from "../components/Header";
import ServOur from "../components/ServOur";
import Industries from "../components/Industries";
import AndroidServ from "../components/AndroidServ";
import ForDev from "../components/ForDev";
import TabSection from "../components/Tabs";
import Process from "../components/Process";
import Offer from "../components/Offer";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />
      <ServHero
        title="Your Vision, Our Expertise  Turning Ideas Into Impact"
        subtitle="About Devhence Solution."
        para="Delivering Value Through Design, Code, and Creativity"
        bgurl="/images/aboutbg.jpg"
      />
      {/* <div className="servour">
        <div className="container">
          <ServOur leftTitle="Our Wearable App Development Services" rightpara="Rocket launches your business with the dynamic tech of wearable App Development in Atlanta. We became the Best App Development Company in Chicago by fulfilling our client expectations & continue to do so with our robust wearable app development services." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/offer1.png" title="Wearable App Design & Development" para="Wearable app development service with a custom UI/UX design for a high level of personalization. Our dedicated AI development Company Dubai team has the expertise to create prototypes to speed up the development process and ensure the app is to your specifications."/>

                <AndroidServ icon="/images/design.png" title="Wearable App Consultation" para="Hire our expert App Developer in San Francisco for developing high-quality wearable apps for fitness brands, smartwatches, jewellery, & other devices. You can bring your concept to us to see if it is practicable and profitable to you."/>
                
                <AndroidServ icon="/images/Web.png" title="App Maintenance" para="For any form of wearable app to remain competitive, smart support and maintenance are required. Our team of App Developers in Los Angeles are capable enough to fine-tune your apps & add the latest features when needed."/>

                <AndroidServ icon="/images/multi.png" title="Wearable Device App Integration" para="Allow the skilled mobile app developers in Dubai at Devhence Solution to incorporate the newest technology in cutting-edge The Wearable apps that we develop have an appealing user-interaction design that destined your business to accomplish the most."/>
            </div>
        </div>
    </div> */}
      <ForDev
        devbanner="/images/aboutbanner.png"
        devtitle="About Devhence Solution"
        devstrong=""
        devpara1="Devhence Solutions is a trusted mobile app development company based in Vadodara, dedicated to turning your ideas into powerful digital solutions. With a team of highly skilled professionals, we guide your vision through a structured development process  delivering innovation, performance, and value at every step."
        devpara2="We work closely with our clients to ensure each project exceeds expectations and creates a meaningful impact for users. Our streamlined workflows and advanced functionality are all aligned with one mission: driving the growth of your business.
From UI/UX design to development and quality assurance, our team is committed to building world-class mobile applications that combine strategic thinking with creative execution."
      />
      <div className="aibanner">
        <div className="aidata">
          <h2>A Team of Experts Building Scalable Apps for the Future</h2>
          <p>
            As a leading app development company in Vadodara, Devhence Solutions
            empowers startups, growing businesses, and enterprises with
            innovative digital solutions that drive unstoppable growth. Our
            mission goes beyond delivering apps we create experiences that bring
            value to both our clients and their users. Fueled by creativity and
            commitment, our team is dedicated to turning bold ideas into
            impactful, user-focused applications that help businesses achieve
            measurable success.
          </p>
        </div>
      </div>
      <Offer />
      <Process />
      <Industries />
      <TabSection />
      <Footer />
    </>
  );
}

export default About;
