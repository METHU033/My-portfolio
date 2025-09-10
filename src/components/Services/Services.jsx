import React from 'react'
import './Services.css'
import theme_pattern from '@/assets/theme_pattern.png'
// import next_icon from '../../assets/next_icon.png'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        <div className="service">
            <h3>01</h3>
          <h2>Web Development</h2>
          <p>I create responsive and user-friendly websites using modern web technologies.</p>
          <div className="services-readmore">
            {/* <p>Read More</p> */}
            {/* <img src={next_icon} alt="" /> */}
            </div>
        </div>
        <div className="service">
            <h3>02</h3>
          <h2>UI/UX Design</h2>
          <p>I design intuitive and engaging user interfaces that enhance user experience.</p>
          <div className="services-readmore">
            {/* <p>Read More</p> */}
            {/* <img src={next_icon} alt="" /> */}
            </div>
        </div>
        <div className="service">
            <h3>03</h3>
          <h2>Social Media</h2>
          <p>I optimize websites for search engines to improve visibility and ranking.</p>
          <div className="services-readmore">
           {/* <p>Read More</p> */}
            {/* <img src={next_icon} alt="" /> */}
        </div>
        </div>
        <div className="service">
            <h3>04</h3>
            <h2>Content Writing</h2>
            <p>I create high-quality content that engages and informs your audience.</p>
            <div className="services-readmore">
            {/* <p>Read More</p> */}
            {/* <img src={next_icon} alt="" /> */}
        </div>
        </div>
        <div className="service">
            <h3>05</h3>
          <h2>Blog Sites</h2>
          <p>I develop and maintain blog sites to share your ideas and stories with the world.</p>
          <div className="services-readmore">
            {/* <p>Read More</p> */}
            {/* <img src={next_icon} alt="" /> */}
        </div>
        </div>
        <div className="service">
            <h3>06</h3>
          <h2>Branding</h2>
          <p>I help businesses establish a strong brand identity and presence.</p>
          <div className="services-readmore">
            {/* <p>Read More</p> */}
            {/* <img src={next_icon} alt="" /> */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services