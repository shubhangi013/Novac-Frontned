import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer'>
      <div className='social_content'>
        <MdAttachMoney className='footer_icon' />
        <p>Join us to get your big-break into Fintech and everything related to finance!</p>
        <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
          <p className='copyright'>© 2022 All rights reserved</p>
      </div>
      <div className='pages_links'>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>MINIMAL</h2>
              <Link to='/'>About Us</Link>
              <Link to='/'>Contact Us</Link>
              <Link to='/'>FAQ</Link>
            </div>
            <div className='footer-link-items'>
              <h2>LEGAL</h2>
              <Link to='/'>Terms and Condition</Link>
              <Link to='/'>Privacy Policy</Link>
            </div>
            <div className='footer-link-items'>
              <h2>CONTACT</h2>
              <Link to='mailto:support@novac.com'>support@novac.com</Link>
              <Link to='/'>IIT (BHU) Varanasi, India</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
