


import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Get from '../pages/Get';
import BasicDemo from './Megamenu';

function HeaderNew() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src="/images/devlogo.jpeg" alt="Logo" />
          </Link>
        </div>

        <div className="hamburger" onClick={toggleOffcanvas}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="nav">
        <BasicDemo />

        </div>

        {/* <div className="btn desktop-btn">
         <Link to="/get" element={<Get/>}> <button>GET QUOTE</button> </Link>
        </div> */}
      </div>

      {/* Offcanvas Menu */}
      <div className={`offcanvas ${offcanvasOpen ? 'show' : ''}`}>
        <div className="offcanvas-header">
           <Link to="/">
            <img src="/images/devlogo.jpeg" width={130} alt="Logo" />
          </Link>
          <button className="close-btn" onClick={toggleOffcanvas}>×</button>
        </div>
        <div className="mb-nav">
        <BasicDemo />
        </div>
        <div className="btn mobile-btn">
          {/* <button>GET QUOTE</button> */}

        {/* <button class="Download-button">
          
         <Link to="/get" style={{textDecoration:"none",color:'#fff'}} element={<Get/>}> <span>Get Quote</span> </Link>
        </button> */}


        </div>
      </div>

      {/* Overlay */}
      {offcanvasOpen && <div className="overlay" onClick={toggleOffcanvas}></div>}
    </>
  );
}

export default HeaderNew;
