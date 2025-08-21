import React, { useState, useRef } from "react";
import "./Navbar.css";
import underline from "@/assets/underline.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "@/assets/menu_open.svg";
import menu_close from "@/assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    if (menuOpen) {
      menuRef.current.classList.remove("active");
      setMenuOpen(false);
    } else {
      menuRef.current.classList.add("active");
      setMenuOpen(true);
    }
  };

  return (
    <div className="navbar" id="navbar">
      <h1 className="meme">METHUCELLA</h1>

      
      {!menuOpen && (
        <img
          src={menu_open}
          alt="Open Menu"
          className="nav-mob-open"
          onClick={toggleMenu}
        />
      )}
      {menuOpen && (
        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={toggleMenu}
        />
      )}

      <ul className="nav-menu" ref={menuRef}>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => {
                setMenu("home");
                toggleMenu(); 
              }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p
              onClick={() => {
                setMenu("about");
                toggleMenu();
              }}
            >
              About me
            </p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p
              onClick={() => {
                setMenu("services");
                toggleMenu();
              }}
            >
              Services
            </p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p
              onClick={() => {
                setMenu("work");
                toggleMenu();
              }}
            >
              Portfolio
            </p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p
              onClick={() => {
                setMenu("contact");
                toggleMenu();
              }}
            >
              Contact
            </p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      {/* Desktop button */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
