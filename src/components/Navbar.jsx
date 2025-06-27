import React from 'react'
import { NavLink } from 'react-router-dom'
// import MegaMenu from './Megamenu'

function Navbar() {
  return (
    <>
        <NavLink className="navlink" to='/'>Home</NavLink>
        <NavLink className="navlink" to='/about'>About Us</NavLink>
        <NavLink className="navlink" to='/contact'>Contact Us</NavLink>
        {/* <NavLink className="navlink" to='/tell'>Services</NavLink>
        <NavLink className="navlink" to='/tips'>Portfolio</NavLink>
        <NavLink className="navlink" to='/contact'>Resources</NavLink>
        <NavLink className="navlink" to='/social'>Contact Us</NavLink> */}
    </>
  )
}

export default Navbar
