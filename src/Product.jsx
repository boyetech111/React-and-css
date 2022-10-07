import React from 'react';
import './product.css';

function Product() {
  return (
    <div className='product-container'>
        <div className='product-description'>
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
  )
}

export default Product;