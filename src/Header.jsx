import { Link } from 'react-router-dom';
import Button from './Button';
import './header.css';

function header() {
  return (
    <div className='header-container'>
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
       <div className='section'>
        <div className='section-description'> 
            <p className='title'>We Ideate</p>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam erat quam tellus feugiat risus semper. Amet orci facilisi nec.</p>
        </div>
        <div className='section-description'>
            <p className='title'>We Design</p>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam erat quam tellus feugiat risus semper. Amet orci facilisi nec.</p>
        </div>
        <div className='section-description'>
            <p className='title'>We Develop</p>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam erat quam tellus feugiat risus semper. Amet orci facilisi nec.</p>
        </div>
       </div>
    </div>
  )
}

export default header;