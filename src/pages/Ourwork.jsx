import { Link } from 'react-router-dom';
import Button from '../Button';
import Navbar from '../Navbar';

import './ourwork.css';

function Ourwork() {
  return (
      <>
        <Navbar active={'Work'}/>
        <div className='banner-container'>
            <div className='head-description'>
                <p className='line'>Check out some of our partner’s projects</p>
                <p id='sub-headline'>
                    We have collaborated on a variety of projects across
                    divers industries and discipline.Yes, we make complex 
                    idea into usable, functional digital products and help our
                    partners reach their goals 
                </p>
            </div>
            <div className='full-button'>
            </div>
        </div>
       <div className='product-container'>  
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
        <footer>
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
        
    </>
  )
}

export default Ourwork;