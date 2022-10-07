import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Header from '../Header';
import Process from '../Process';
import Button from '../Button';
import "./homepage.css"

function Homepage() {
  return (
    <div className='home-container'>
        <Navbar  active={"Home"} />
        <Header />
        <Process />
        <div className='home-contain'>
        <div className='home-description'>
          <p className='case'>Case Study</p>
          <p className='view'>View More</p>
        </div>
        <div className='product-details'>
            <div className='product-card'>
                <div className='card'> 
                <img src='images/yummy.png' alt='yummy' />
                </div>
                <p className='heading'>Yummy Spot</p>
                <p className='sub-heading'>UI/UX Design, Desktop App</p>
            </div>
            <div className='product-card'>
            <div className='card'> 
              <img src='images/vale.png' alt='vale'/> 
            </div>   
                <p className='heading'>Vale Finance</p>
                <p className='sub-heading'>UI/UX Design, Website, Web App</p>
            </div>
        </div>
        <div className='product-details'>   
            <div className='product-card'>
              <div className='card'>   
                <img src='images/aero.png' alt='aero'/>
              </div>   
                <p className='heading'>Aero</p>
                <p className='sub-heading'>UI/UX Design, Website</p>
            </div>
            <div className='product-card'>
              <div className='card'> 
                <img src='images/godark.png' alt='go'/> 
              </div>    
                <p className='heading'>GoDark</p>
                <p className='sub-heading'>Website, Web App Dev</p>
            </div>
        </div> 
      </div>
        <footer className='home-footer'>
        <p className='get'>Get in touch</p>
        <div className='footer'>
          <Link  to={'/Contact'}><Button title='Lets Talk' /></Link>
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
    </div>
  )
}

export default Homepage;