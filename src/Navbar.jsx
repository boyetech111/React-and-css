import { useState } from 'react';
import './Navbar.css'
import {Link} from "react-router-dom"

function Navbar({ active }) {
  const [hamburger, setHamburger] = useState(false);
    
  function togglehamburger() {
     setHamburger(!hamburger)
   }
  

  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <Link to={"/"}>
           <img src="/images/megastack.svg" alt="megastack" />
        </Link>
        
        <div onClick={togglehamburger} className='nav-main'>
         <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 18.5H20H4ZM4 6.5H20H4ZM4 12.5H20H4Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      </div>

       <div className={hamburger ? 'show-nav-header' : 'nav-header' }>
        <Link className={`${ active === "Home" ? "active-switch" : "inactive-switch"}`}
          to={'/'}
        > 
          Home
        </Link>
        <Link className={`${active === "About" ? "active-switch" : "inactive-switch"}`}
          to={'/About'}
        > 
         About Us
        </Link>
        <Link className={`${active === "Work" ? "active-switch" : "inactive-switch"}`}
          to={'/Ourwork'}
        > 
         Our Work
        </Link>
        <Link className={`${active === "Contact" ? "active-switch" : "inactive-switch"}`}
          to={'/Contact'}
        > 
         Lets Talk
        </Link>  
       </div>
    </div>
  )
}

export default Navbar;