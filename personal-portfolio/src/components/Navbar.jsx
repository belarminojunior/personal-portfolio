import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";

const Nav = () => {
  const [navbarblur, setnavbarblur] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setnavbarblur(true);
    } else {
      setnavbarblur(false);
    }
  };

  const showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    ham[0].classList.toggle("showNavbar");
  };

  const hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
      <h1
        title="Reload"
        onClick={() => window.location.reload(true)}
        className="Logo"
      >
        WNDR
      </h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li onClick={hideMenu}>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/about">
            <BsPerson /> About
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/project">
            <BsCodeSlash /> Projects
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/contact">
            <CgPhone /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
