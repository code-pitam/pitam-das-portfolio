import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ classactive, setclassactive }) => {

  return (
    <div className='navbar'>
        <h1 className='logo'>PD<span>.</span></h1>
        <div className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#project">Projects</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#contact">ContactMe</a>
        </div>
        <div className="hamburger" onClick={() => setclassactive(!classactive)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
        {/* <a className='resume' href="">Resume</a> */}
    </div>

  )
}

export default Navbar