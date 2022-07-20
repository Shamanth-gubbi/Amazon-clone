import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './stateProvider';

function Header() {
  const[{basket}]=useStateValue();
  return <nav className="header">
  <Link to="/login">
  <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"/>
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
       <span className="header__optionLineTwo header__basketCount" >0</span>
     </div>
    </Link>
  </div>
  </nav>
}

export default Header;
