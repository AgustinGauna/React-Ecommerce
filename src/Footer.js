import React from 'react'
import {FaInstagram, FaTwitter, FaDiscord  } from "react-icons/fa";
import './Style.css' 

const Footer = () => {
  return (
    <section className='footer'>
        <div className="social">
          <a href='https://twitter.com'><FaTwitter /></a>
          <a href='https://instagram.com'><FaInstagram/></a>
          <a href='https://discord.com'><FaDiscord /></a>
        </div>

    </section>
  )
}

export default Footer