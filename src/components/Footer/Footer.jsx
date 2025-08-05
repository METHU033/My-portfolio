import React from 'react'
import './Footer.css'
import footer_logo from '@/assets/footer_logo.png'
import Logo from '@/assets/Logo.png'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className="footer-top">
        <div className="footer-top-left">
           <img src={Logo} alt="" />
           <p>I am a frontend developer from, RWANDA with 10 years of exprience in companies like Tost Group, Ishyiga Software and KPL</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={footer_logo} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
     </div>
     <hr />
     <div className="footer-buttom">
        <p className="footer-buttom-left"> 2024 Dushime Methucella.All rihgts reserved.
            <div className="footer-buttom-right">
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </p>
     </div>
    </div>
  )
}

export default Footer