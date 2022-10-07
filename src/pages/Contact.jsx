import React from 'react';
import './contact.css'
import Navbar from '../Navbar';
import Footer from '../Footer';


function Contact() {
  return (
    <>
     <Navbar active={'Contact'} />
     <div className='contact-container'>
        <div className='head-description'>
            <p className='headline'>Become our partner Let’s talk about your next project</p>
            <p id='sub-headline'>
                Drop us a line with the form below or better still shoot us
                an email on hello@magastack.tech
            </p>
        </div>
     </div>
     <form>
         <div className='input-group'>
           <label>Full Name</label>
           <input type='name' placeholder='Your name'/>       
         </div>     
        <div className='input-group'>
           <label>Email</label>
           <input type='email' placeholder='Your email'/>   
         </div>     
        <div className='input-group'>
           <label>Phone Number</label>
           <input type='tel' placeholder='Your number' />   
         </div>     
        <div className='input-group'>
           <label>Message</label>
           <textarea placeholder='Tell us briefly about your project' />   
        </div> 
       <button className='input-button'>Send Message</button>       
    </form>  
    <div className='foot'>
        <Footer/>      
    </div>      

    </>
  )
}

export default Contact;