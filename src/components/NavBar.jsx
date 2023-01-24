import React from 'react'
import { useState } from 'react'
import '../Styles/navbar.scss'

import {GiHamburgerMenu} from 'react-icons/gi'
function Navbar() {

   const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
    <a href="/" className="brand-name">
     BookStore
    </a>
      <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
        
    <GiHamburgerMenu/>
    </button>
    <div
        className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);
  
}

export default Navbar
