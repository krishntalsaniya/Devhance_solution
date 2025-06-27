import React from 'react'
import { Link } from 'react-router-dom'

const company = [
  {
    id:1,
    name:'About Us',
    link:'/about'
  },
  {
    id:2,
    name:'Portfolio',
    link:'/'
  },
  {
    id:3,
    name:'Contact Us',
    link:'/contact'
  },
]

const services = [
  // {
  //   id:1,
  //   name:'Mobile App Development',
  //   link:'/'
  // },
  {
    id:2,
    name:'Iphone App Development',
    link:'/iphone'
  },
  {
    id:3,
    name:'Android App Development',
    link:'/android'
  },
  {
    id:4,
    name:'Flutter App Development',
    link:'/flutter'
  },
  {
    id:5,
    name:'Wearable App Development',
    link:'/wearable'
  },
  {
    id:6,
    name:'React Native App Development',
    link:'/react-native'
  },
  {
    id:7,
    name:'Web Design',
    link:'/webdesign'
  },
  {
    id:8,
    name:'Website Development',
    link:'/Webdevelopment'
  },
  {
    id:9,
    name:'Sports Betting App Development',
    link:'/betting'
  },
  {
    id:10,
    name:'PHP Web Development',
    link:'/php'
  },
  {
    id:11,
    name:'Hire Android App Developers',
    link:'/android'
  },
  {
    id:12,
    name:'Angular JS Development',
    link:'/Angular'
  },
  // {
  //   id:12,
  //   name:'Hire Mobile App Developers',
  //   link:'/'
  // },
]

const solution = [
  {
    id:1,
    name:'Healthcare App Development',
    link:'/healthcare'
  },
  {
    id:2,
    name:'Grocery App Development',
    link:'/Grocery'
  },
  // {
  //   id:3,
  //   name:'Carwash App Development',
  //   link:'/'
  // },
  {
    id:4,
    name:'Fitness App Development',
    link:'/fitness'
  },
  {
    id:5,
    name:'Handyman App Development',
    link:'/Handyman'
  },
  {
    id:6,
    name:'Onlyfans App Development',
    link:'/Onlyfans'
  },
  {
    id:7,
    name:'Real Estate App Development',
    link:'/realestate'
  },
  {
    id:8,
    name:'Dating App Development',
    link:'/dating'
  },
  {
    id:9,
    name:'Blockchain Application Development',
    link:'/blockchain'
  },
  {
    id:10,
    name:'Uber Like App Development',
    link:'/uber'
  },
  {
    id:11,
    name:'Ecommerce App Development',
    link:'/ecommerce'
  },
  {
    id:12,
    name:'Taxi Booking App Development',
    link:'/taxi'
  },
]

const data = [
  {
    id:1,
    name:'OTT App ',
    link:'/Ott'
  },
  {
    id:2,
    name:'Salon App',
    link:'/salon'
  },
  // {
  //   id:3,
  //   name:'MVP',
  //   link:'/'
  // },
  {
    id:4,
    name:'Live Cricket Score Application',
    link:'/live-cricket'
  },
  {
    id:5,
    name:'Logistics Software Development',
    link:'/logistics'
  },
  {
    id:6,
    name:'Food Delivery App Development',
    link:'/food-delivery'
  },
  {
    id:7,
    name:'Live Video Shopping App',
    link:'/livevideo'
  },
  {
    id:8,
    name:'Education App Development',
    link:'/education'
  },
  {
    id:9,
    name:'Taxi Booking App Development ',
    link:'/taxi'
  },
  {
    id:10,
    name:'eWallet App Development',
    link:'/ewallet'
  },
  {
    id:11,
    name:'E-Scooter App Development',
    link:'/escooter'
  },
  {
    id:12,
    name:'Google Pay',
    link:'/google-pay'
  },
]




function Footer() {
  return (
    <>
      <div className="footer">
          <div className="footerbx">
              <img src="/images/devlogo.jpeg" width={150} style={{borderRadius:'10px'}} alt="" />
              {/* <h3>Devhence Solution</h3> */}
              {
                company.map((item)=>
                  <Link className='footerlink' key={item.id} to={item.link}>
                    <p>{item.name}</p>
                  </Link>
                )
              }
              <div className="icons">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
              </div>
          </div>
          <div className="footerbx">
          <h3>Our Services</h3>
              {
                services.map((item)=>
                  <>
                  <Link className='footerlink' key={item.id} to={item.link}>
                    <p>{item.name}</p>
                  </Link>
                  </>
                )
              }
          </div>
          <div className="footerbx">
          <h3>Our Solutions</h3>
              {
                solution.map((item)=>
                  <>
                  <Link className='footerlink' key={item.id} to={item.link}>
                    <p>{item.name}</p>
                  </Link>
                  </>
                )
              }
          </div>
          <div className="footerbx">
          {/* <h3>Regional Services</h3> */}
              {
                data.map((item)=>
                  <>
                  <Link className='footerlink' key={item.id} to={item.link}>
                    <p>{item.name}</p>
                  </Link>
                  </>
                )
              }
          </div>
      </div>
      <div className="footbm">
        <h4>© 2025 All Right Reserved by Devhence Solutions </h4>
      </div>
    </>
  )
}

export default Footer
