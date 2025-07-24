import React from 'react'
import './About.css' 
import theme_pattern from '@/assets/theme_pattern.png'
import profile_img from '@/assets/profile_img.jpg'

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
    <img src={theme_pattern} alt="" />
    </div>
    <div className="about-sections">
      <div className="about-left">
        <img src={profile_img} alt="" />
      </div>
      <div className="about-right">
        <div className="about-para">
          <p>I am a frontend developer from Rwanda, passionate about user-friendly web interfaces.</p>
          <p> I enjoy turning design
        concepts into interactive digital experiences using modern web technologies.</p>
        </div>
        <div className="about-skills">
          <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
          <div className="about-skill"><p>REACT JS</p><hr style={{width:"70%"}}/></div>
          <div className="about-skill"><p>- - - AI - - -</p><hr style={{width:"60%"}}/></div>
          <div className="about-skill"><p>NEXT JS</p><hr style={{width:"50%"}}/></div>
          </div>        
      </div>
    </div>
    <div className="about-achievements">
      <div className="about-achievement">
        <h1>10+</h1>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>90+</h1>
        <p>PROJECTS COMPLETED</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>15+</h1>
        <p>HAPPY CLIENTS</p>
      </div>
      </div>
    </div>
  )
}

export default About