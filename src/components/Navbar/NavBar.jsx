import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.scss";
import SearchBar from "../SearchBar/SearchBar";

import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  //React///
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  //React///

  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">
        The Booktown
      </Link>
      <SearchBar className="search-bar" />

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <GiHamburgerMenu />
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
