import React, { useState, useRef } from "react";
import "./Navbar.css";
import Logo from "@/assets/Logo.png";
import underline from "@/assets/underline.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "@/assets/menu_open.svg";
import menu_close from "@/assets/menu_close.svg";


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.classList.add("active");
  };

  const closeMenu = () => {
    menuRef.current.classList.remove("active");
  };

  return (
    <div className="navbar" id="navbar">
      <img src={Logo} alt="Logo" />
      <img src={menu_open} alt="Open Menu"
        className="nav-mob-open"
        onClick={openMenu}
      />
      <ul className="nav-menu" ref={menuRef}>
        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={closeMenu}
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
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
