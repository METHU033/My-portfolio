import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="" />
      <h1><span>I'm Methucella Dushime,</span> Frontend developer based in RWANDA.</h1>
      <p>
        I am a frontend developer from Rwanda, passionate about user-friendly web interfaces. I enjoy turning design
        concepts into interactive digital experiences using modern web
        technologies.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
