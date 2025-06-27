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

function Ecommerce() {
  return (
    <>
    <Header/>
    <ServHero title="E-Commerce Website Development Company" subtitle="" para="We provide highly innovative and appealing e-commerce website development services that can attract more customers, as we believe that your website is your main asset. As a leading software development company in India, we ensure your digital presence drives results and growth." bgurl="/images/ecomservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="We Deliver What We Promise" rightpara="Devhence solutions is a notable e-commerce website development company as we always offer what we promise. This helps us with 100% client satisfaction. The best quality of ours which is acknowledged the most is that our utmost priority is maintaining a good relationship with our clients and cost is secondary for us." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/ecom1.png" title="e-commerce App Development" para="Devhence solutions  is well-versed in providing the best eCommerce app development services at a budget-friendly price."/>

                <AndroidServ icon="/images/ecom2.png" title="Custom e-commerce Website Design" para="Our web developers are specialized in creating high-end quality custom eCommerce website designs for our valuable clients."/>
                
                <AndroidServ icon="/images/ecom3.png" title="Web Development & Customization" para="Avail high-quality web development & customization services that meet your business requirements."/>

                <AndroidServ icon="/images/ecom4.png" title="Shopping Cart Development" para="We are committed to offering shopping cart development services that provide an unmatched user experience."/>

                <AndroidServ icon="/images/ecom5.png" title="Maintenance & Support" para="At Devhence solutions our team of developers provides maintenance and support services to make sure the website is running smoothly."/>

                <AndroidServ icon="/images/ecom6.png" title="eCommerce Platform Migration" para="We offer eCommerce platform migration services as well as make sure to offer unmatched user experience."/>
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/ecombanner.png" devtitle="Best Website Development Company To Rely On" devstrong="" devpara1="We make sure to develop e-commerce website which ensure high website traffic. We make this possible by designing and developing highly responsive e-commerce web development that performs well on every platform including smartphones, laptops, PCs, etc. We structure our client’s website according to their business needs to help them engage a large number of customers and therefore, earn a high amount of profits. Our website developers work tirelessly to ensure high-quality results, which help us to satisfy our clients fully. If you are looking for the best software development company in India, Devhence solutions is the right choice for you." devpara2="" />

    <WhyChoose whytitle="What Makes Us A Leading e-commerce Website Development Company" whysubtitle="We make sure to develop an e-commerce website after undergoing through the latest and advanced security techniques." whycardimg1="" whycardpara1="" whyimgpara1="" whycardimg2=""  whycardpara2="" whyimgpara2="" whycardimg3="/images/whyecom1.png" whycardpara3="We believe in perfection and that's the reason why we assign a particular task to our skilled team of designers, master coders, and marketing consultants for each project. This enables us to provide satisfactory services." whyimgpara3="Specialization" whycardimg4="/images/whyecom2.png" whycardpara4="We believe in full client satisfaction and for that, we make sure to coordinate with our clients at every level of our website development process. This enables us to deliver what our clients exactly want." whyimgpara4="Cordination"  whycardimg5="/images/wyimg.png" whycardpara5="Our clients are our topmost priority and so is their time and that's why we ensure on-time delivery. That's the reason why we don't waste a single moment to revert to our clients and offer them the most useful solutions to help them grow." whyimgpara5="Dedication" />

    <Process/>
    <Industries />
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Ecommerce
