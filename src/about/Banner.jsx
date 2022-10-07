import { Link } from 'react-router-dom';
import Button from '../Button';
import './banner.css';

function Banner() {
  return (
    <div className='banner-container'>
       <div className='head-description'>
        <p className='headline'>Your partner in  building amazing digital products</p>
        <p id='sub-headline'>
          We are a software development agency leveraging design thinking 
          framework to help our clients meet their 
          increasing revenue with best users experience.
        </p>
       </div>
       <div className='full-button'>
        <Link  to={'/Contact'}><Button title='Lets Talk' /></Link>
       </div>
    </div>
  )
}

export default Banner;