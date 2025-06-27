import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Secure from '../components/Secure'
import Services from '../components/Services'
import CustomerSlider from '../components/CustomerSlider'
import Footer from '../components/Footer'
import OrbitAnimation from '../components/OrbitAnimation'
import Way from '../components/Way'
import Partners from '../components/Partners'
import Offer from '../components/Offer'
import Our from '../components/Our'
import Keen from '../components/Keen'
import Industries from '../components/Industries'
import TabSection from '../components/Tabs'
import BasicDemo from '../components/Megamenu'
import HeaderNew from '../components/HeaderNew'
import WhatsappBtn from '../components/WhatsappBtn'
// import MegaMenuGolf from '../components/Megamenu'

function Home() {
  return (
    <>
    <Header/>
    {/* <HeaderNew/> */}
    {/* <MegaMenu /> */}
    <Banner/>
    {/* <OrbitAnimation /> */}
    <Way/>
    <Keen/>
    <Partners/>
    <Offer/>
    <Our/>
    <Industries />
    <TabSection/>
    {/* <Secure/>
    <Services/>
    <CustomerSlider/>
     */}
     <Footer/>
     <WhatsappBtn/>
    </>
  )
}

export default Home
