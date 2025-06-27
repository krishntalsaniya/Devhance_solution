import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setIsMobileMenu(!isMobileMenu);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div
      className="mega-menu-wrapper"
      // onMouseLeave={() => window.innerWidth > 768 && setIsOpen(false)}
      onMouseEnter={() => window.innerWidth > 768 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth > 768 && setIsOpen(false)}
    >
      <div
        // className={`menu-button ${isOpen || isMobileMenu ? 'active' : ''}`}
        // onClick={toggleMenu}
        className={`menu-button ${isOpen || isMobileMenu ? 'active' : ''}`}
        onClick={toggleMenu}
        // onMouseEnter={() => window.innerWidth > 768 && setIsOpen(true)}
      >
        All Services <span className="arrow">&#9662;</span> <i className="fa-solid fa-bars bar"></i>
      </div>

      {(isOpen || isMobileMenu) && (
        <div  className={`mega-menu ${isMobileMenu ? 'mobile' : ''}`}>
        {/* <div className={`mega-menu ${isMobileMenu ? 'mobile' : ''}`}> */}
          <div className="menu-column">
            <h4>Our Services</h4>
            <ul>
              <li> 
                <Link to="/iphone" className='mega-link'> Iphone App Development
                </Link>
               </li>
              <li>
                <Link to="/android" className='mega-link'>Android App Development
                </Link>
              </li>
              {/* <li>Backend Development Course</li> */}
              <li>
              <Link to="/Flutter" className='mega-link'> Flutter App Development
              </Link>
              </li>
              <li>
              <Link to="/wearable" className='mega-link'> Wearable App Development
              </Link>
              </li>
              <li>
              <Link to="/react-native" className='mega-link'> React Native App Development
              </Link>
              </li>
              <li>
              <Link to="/webdesign" className='mega-link'> Web Design
              </Link>
              </li>
              <li>
              <Link to="/webdevelopment" className='mega-link'> Website Development
              </Link>
              </li>
              <li>
              <Link to="/betting" className='mega-link'> Sports Betting App Development
              </Link>
              </li>
              <li>
              <Link to="/php" className='mega-link'> PHP Web Development
              </Link>
              </li>
              <li>
              <Link to="/Angular" className='mega-link'> Angular JS Development
              </Link>
              </li>
            </ul>
            {/* <h4>Hardware Networking</h4>
            <ul>
              <li>
              <Link to="/hardware" className='mega-link'>
              <img src="/hardlogo.jpg" alt="Frontend" className="menu-icon" /> Hardware Networking Training Course
              </Link>
              </li>
              <li>
              <Link to="/cyber" className='mega-link'>
              <img src="/cyberlogo.png" alt="Frontend" className="menu-icon" /> Cyber Security Certification Course
              </Link>
              </li>
            </ul>
            <h4>Graphic Design</h4>
            <ul>
              <li>
              <Link to="/uiux" className='mega-link'>
              <img src="/uilogo.svg" alt="Frontend" className="menu-icon" /> UI & UX
              </Link>
              </li>
              <li>
                <Link to="/graphic" className='mega-link'>
                <img src="/gilogo.svg" alt="Frontend" className="menu-icon" /> Graphic Design 
                </Link>
              </li>
              <li>
                <Link to="/videoedit" className='mega-link'>
                  <img src="/vidlogo.png" alt="Frontend" className="menu-icon" /> Video Editing 
                </Link>
              </li>
            </ul> */}
            
          </div>

          <div className="menu-column">
            <h4>Our Solutions</h4>
            <ul>
              <li>
              <Link to="/Healthcare" className='mega-link'>Healthcare App Development
              </Link>
              </li>
              <li>
              <Link to="/Grocery" className='mega-link'>
              Grocery App Development
              </Link>
              </li>
              <li>
              <Link to="/Fitness" className='mega-link'>
              Fitness App Development
              </Link>
              </li>
              <li>
              <Link to="/Handyman" className='mega-link'> Handyman App Development 
              </Link>
              </li>
              <li>
              <Link to="/Onlyfans" className='mega-link'>Onlyfans App Development
              </Link>
              </li>
              <li>
              <Link to="/RealEstate" className='mega-link'> Real Estate App Development 
              </Link>
              </li>
              <li>
              <Link to="/Dating" className='mega-link'> Dating App Development
              </Link>
              </li>
              <li>
              <Link to="/Uber" className='mega-link'> Uber Like App Development
              </Link>
              </li>
              <li>
              <Link to="/Ecommerce" className='mega-link'>Ecommerce App Development
              </Link>
              </li>
              <li>
              <Link to="/taxi" className='mega-link'>Taxi Booking App Development
              </Link>
              </li>
            </ul> 
          </div>

          <div className="menu-column">
            {/* <h4>Cad / Cam</h4> */}
            <ul>
              {/* <li><img src="/aulogo.png" alt="Frontend" className="menu-icon" />AutoCAD</li> */}
             <li>
             <Link to="/ott" className='mega-link'>OTT App
             </Link>
             </li>
             <li>
             <Link to="/Salon" className='mega-link'>Salon App
             </Link>
             </li>
             <li>
             <Link to="/Live-Cricket" className='mega-link'>Live Cricket Score Application
             </Link>
             </li>
             <li>
             <Link to="/Logistics" className='mega-link'>Logistics Software Development
             </Link>
             </li>
             <li>
             <Link to="/Food-Delivery" className='mega-link'>Food Delivery App Development
             </Link>
             </li>
             <li>
             <Link to="/LiveVideo" className='mega-link'>
             Live Video Shopping App
             </Link>
             </li>
             <li>
             <Link to="/Education" className='mega-link'> Education App Development
             </Link>
             </li>
             <li>
             <Link to="/eWallet" className='mega-link'> eWallet App Development
             </Link>
             </li>
             <li>
             <Link to="/EScooter" className='mega-link'> E-Scooter App Development
             </Link>
             </li>
             <li>
             <Link to="/blockchain" className='mega-link'> Blockchain Application Development
             </Link>
             </li>
            </ul> 
          </div>

          <div className="menu-column">
            <h4>Resources</h4>
            <ul>
             <li>
             <Link to="/google-pay" className='mega-link'> Google Pay
             </Link>
             </li>
              <li>
              <Link to="/Youtube" className='mega-link'>Youtube 
              </Link>
              </li>
             {/* <Link to="/"> <li> <img src="/gilogo.svg" alt="Frontend" className="menu-icon" /> Graphic Design</li></Link> */}
             <li> 
             <Link to="/metamask" className='mega-link'> MetaMask
             </Link>
             </li>
             <li> 
             <Link to="/Walemart" className='mega-link'>Walemart
              </Link>
             </li>
             <li> 
             <Link to="/Sofascore" className='mega-link'> Sofascore 
             </Link>
             </li>
             <li>
             <Link to="/Doctor" className='mega-link'> Doctor On Demand
             </Link>
             </li>
             <li>
             <Link to="/BookMyShow" className='mega-link'> 
             BookMyShow
             </Link>
             </li>
             {/* <li>
             <Link to="/c&c++" className='mega-link'>
             <img src="/clogo.png" alt="Frontend" className="menu-icon" />C & C++
             </Link>
             </li> */}
            </ul>
            {/* <h4>Cad / Cam</h4>
            <ul>
              <li><img src="/aulogo.png" alt="Frontend" className="menu-icon" />AutoCAD</li>
              <li><img src="/sologo.jpeg" alt="Frontend" className="menu-icon" />Solidedge</li>
              <li><img src="/crlogo.png" alt="Frontend" className="menu-icon" />Creo</li>
              <li><img src="/swlogo.png" alt="Frontend" className="menu-icon" />Solidworks</li>
              <li><img src="/silogo.jpg" alt="Frontend" className="menu-icon" />Siemens NX</li>
              <li><img src="/anlogo.png" alt="Frontend" className="menu-icon" />Ansys</li>
            </ul> */}
            {/* <h4>Software Testing</h4>
            <ul>
            <li>Software Testing Course</li>
            <li>Automation Testing Course</li>
            </ul> */}
          </div>

          <div className="menu-column">
            <h4>More</h4>
            <ul>
              {/* <li>Internship for Students</li> */}
             <li>
             <Link to="/contact" className='mega-link'> 
             Contact Us
              </Link>
             </li>
             {/* <li>
             <Link to="/work" className='mega-link'> 
               Join Us
            </Link>
             </li> */}
             <li> 
             <Link to="/about" className='mega-link'> 
              About Us 
            </Link>
            </li>
              {/* <li>Our Students</li> */}
              {/* <li>Our Blogs</li> */}
              {/* <li>Our Sitemap</li> */}
              {/* <li>About Us</li> */}
              {/* <li>Privacy Policy</li> */}
            </ul>
          </div>
        </div>
      )}

      {/* <a href="tel:+919998483743" className='header-call'>
      &#128222;  +91 99984 83743
        </a> */}
    </div>
  );
};

export default MegaMenu;