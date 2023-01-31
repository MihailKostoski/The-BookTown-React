import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import '../Styles/navbar.scss'
import SearchField from './SearchField';

import {GiHamburgerMenu} from 'react-icons/gi'
function Navbar() {

   const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">BookStore</Link>
      <SearchField/>
  
      <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
        
    <GiHamburgerMenu/>
    </button>
    <div
        className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);
  
}

export default Navbar
