import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactHero";

function Contact() {
  return (
    <>
      <Header />
      <div className="cnt-frm">
        <div className="cnt-lf">
          <h1>Start Your Digital Journey with Devhence</h1>
          <p>
            Get in touch to explore how we can turn your ideas into impactful
            digital solutions.
          </p>
        </div>
        <div className="cnt-rt">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
