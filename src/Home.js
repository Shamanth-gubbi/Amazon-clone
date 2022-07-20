import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Home.css"
import Product from './Product';
import { initialState } from './reducer';
import { useStateValue } from './stateProvider';
export default function Home() {
  const[{basket}]=useStateValue();
  return (
    
    <div className="home">
     <nav className="header">
  <Link to="/login">
  <img className="header_logo" src="https://germainmaureau.com/app/uploads/2020/05/Amazon-logo.png"/>
  </Link>
  
 <div className="header__search">
 <input type="text" className="header_searchInput"/>
  <PageviewOutlinedIcon className="header_searchIcon"/>
 </div>
  <div className="header__nav">
    <Link to="/login" className="header__link">
    <div className="header__option">
    <span className="header__optionLineOne">Hello</span>
    <span className="header__optionLineTwo">Sign In</span>
    </div>
    </Link>

    <Link to="/login" className="header__link">
    <div className="header__option">
    <span className="header__optionLineOne">Returns</span>
    <span className="header__optionLineTwo">& Orders</span>
    </div>
    </Link>

    <Link to="/login" className="header__link">
    <div className="header__option">
    <span className="header__optionLineOne">Your</span>
    <span className="header__optionLineTwo">Prime</span>
    </div>
    </Link>
    
    <Link to="/checkout" className="">
     <div className="header__optionBasket">
     <ShoppingBasketIcon/>
       <span className="header__optionLineTwo header__basketCount" >{basket?.length}</span>
     </div>
    </Link>
  </div>
  </nav>
    <img 
    className='home__image'
    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=''/>
   <div className='home__row'>
   <Product id={123} title="The lean startup-How constant innovation creates radically succesful business paperback " 
    price={11.96}
    rating={5}
    image="https://www.amazon.in/Lean-Startup-Innovation-Successful-Businesses/dp/0670921602"
    />
    <Product id={123} title="The lean startup-How constant innovation creates radically succesful business paperback " 
    price={11.96}
    rating={5}
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMm_lzt-jESbwcqsxdOwPeolWM7Fq833Vew&usqp=CAU"
  />

   </div>
    <div className='home__row'>
    <Product id={123} title="The lean startup-How constant innovation creates radically succesful business paperback " 
    price={11.96}
    rating={5}
    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
/>
    <Product id={123} title="The lean startup-How constant innovation creates radically succesful business paperback " 
    price={11.96}
    rating={5}
    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
    />
    <Product id={123} title="The lean startup-How constant innovation creates radically succesful business paperback " 
    price={11.96}
    rating={5}
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOpN-wh-bnjFqoShAArc52UbEmLtuhQwHhQ&usqp=CAU"
    />
    </div>
    
    </div>
  )
}
