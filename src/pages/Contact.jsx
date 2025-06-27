import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactHero'

function Contact() {
  return (
    <>
     <Header/>
     <div className="cnt-frm">
      <div className="cnt-lf">
        <h1>Transform Your Vision into Reality!</h1>
        <p>
          Send us a query to join our community of customers, partners & career-professionals
        </p>
      </div>
      <div className="cnt-rt">
      <ContactForm/>
      </div>
     </div>
     <Footer/>
    </>
  )
}

export default Contact
