import React from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
function App() {
  return (
    
    <Router>
      <div className="app">
    
      <Routes>
        <Route path="/checkout" element ={<Checkout/>}>
         
        </Route>
        <Route path="/" element ={<Home/>}>
         
        </Route>
        <Route path="/login" element ={<Login/>}>
         
        </Route>
      </Routes>
    
      </div>
    </Router>
  );
}

export default App;
