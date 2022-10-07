import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './footer.css';

function Footer() {
  return (
    <footer className='footer-container'>
        <p className='get'>Get in touch</p>
        <div className='footer'>
          <Link to={'/Contact'}><Button title='Lets Talk' /></Link>
            <p className='footer-info'>
              Reach out to find out how we can be of help to you. Hit the button below to send us an email at hello@megastack.tech
              <br />
              <br />
              <br/>
              You can also check out some of our previous project we’ve helped our partners ship to their users. Click here to see our works.
            </p> 
      </div>
      <p className='border'></p>
      <div className='footer-copyright'>
        <div className='copyright-info'>
           ©Copyright 2022, Megastack Technologies Limited
        </div>
        <div className='copyright-socials'>
          <p className='instagram'>
            <img src='/images/instagram.svg' alt='instagram' />
            instagram
          </p>
          <p className='linkdin'>
            <img src='/images/linkdin.svg' alt='linkdin'/>
            linkedin
          </p>
          <p className='facebook'>
            <img src='/images/facebook.svg ' alt='facebook' />
            facebook
          </p>
          <p className='twitter'>
            <img  src='/images/twitter.svg'  alt='twitter' />
            twitter
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;