import React from 'react';
import './button.css';

function Button({title}) {
  return (
    <div className='btn'>
       <button>{title}</button>
    </div>
  )
}

export default Button;