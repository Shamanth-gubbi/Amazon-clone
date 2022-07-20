import React from 'react'
import { useStateValue } from './stateProvider';
import Header from './Header';
import './Checkout.css';


function Checkout() {
  const[{basket},dispatch]=useStateValue();
  return (
    
    <div className='checkout'>
      <Header/> 
      <img className='checkout__ad'
      src='https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg'/>
      
    </div>
  )
 
}

export default Checkout;
