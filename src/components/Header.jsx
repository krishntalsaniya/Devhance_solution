// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import { Link } from 'react-router-dom';
// import Get from '../pages/Get';
// import MegaMenu from './Megamenu';

// function Header() {
//   const [offcanvasOpen, setOffcanvasOpen] = useState(false);

//   const toggleOffcanvas = () => {
//     setOffcanvasOpen(!offcanvasOpen);
//   };

//   return (
//     <>
//       <div className="header">
//         <div className="logo">
//           <Link to="/">
//             <img src="/images/devlogo.jpeg" alt="Logo" />
//           </Link>
//         </div>

//         <div className="hamburger" onClick={toggleOffcanvas}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         <div className="nav">
//         <Navbar />
//         <MegaMenu/>
//         </div>

//       </div>

//       {/* Offcanvas Menu */}
//       <div className={`offcanvas ${offcanvasOpen ? 'show' : ''}`}>
//         <div className="offcanvas-header">
//            <Link to="/">
//             <img src="/images/devlogo.jpeg" width={130} alt="Logo" />
//           </Link>
//           <button className="close-btn" onClick={toggleOffcanvas}>×</button>
//         </div>
//         <div className="mb-nav">
//         <Navbar />
//         {/* <MegaMenu/> */}
//         </div>
//         <div className="btn mobile-btn">
//           {/* <button>GET QUOTE</button> */}

//         {/* <button class="Download-button">

//          <Link to="/get" style={{textDecoration:"none",color:'#fff'}} element={<Get/>}> <span>Get Quote</span> </Link>
//         </button> */}

//         </div>
//       </div>

//       {/* Overlay */}
//       {offcanvasOpen && <div className="overlay" onClick={toggleOffcanvas}></div>}
//     </>
//   );
// }

// export default Header;

// ------test-header-------------

import React from "react";
import Navbar from "./Navbar";
// import Logo from '../../public/Logo.png'
import { Link } from "react-router-dom";
import MegaMenu from "./Megamenu";
function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src="/images/devlogo.jpeg" height={70} />
          </Link>
          {/* <button className='course-btn'>
            Course <i class="fa-solid fa-bars" style={{marginLeft:'10px'}}></i>
        </button> */}
          <MegaMenu />
        </div>
        {/* <a href="tel:+919998483743" className='header-call'>
      &#128222;  +91 99984 83743
        </a>   */}
        <nav>
          {/* <a href="tel:+919998483743" className='header-call'>
      &#128222;  +91 99984 83743
        </a>   */}

          <Navbar />
        </nav>
        {/* <i class="fa-solid fa-bars" id='bar'></i>   */}
      </div>
    </>
  );
}

export default Header;
