import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import {auth} from './firebase'
function Login() {
  const[email,setEmail]= useState('');
  const[password,setPassword]= useState('');
  const signIn=e=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
      .then((auth)=>{
        if (auth) {
          
        }
      })
      .catch(error=>alert(error.message))

  }
  const register=e=>{
    e.preventDefault();
      auth.createUserWithEmailAndPassword(email,password)
      .then((auth)=>{
        if (auth) {
          console.log(auth);
        }
      })
      .catch(error=>alert(error.message))
  }
  return (
    <div className='login'>
      <Link to='/'>
      <img 
      className='login__logo'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png'/></Link>
    
    <div className='login__container'>
      <h1>Sign in</h1>
      <form>
        <h5>Email</h5>
        <input type='text' value={email} onChange={e=>setEmail(e.target.value)}></input>
        
        
        <h5>Password</h5>
        <input type='password' value={password} 
        onChange={e=>setPassword(e.target.value)}
        ></input>
        
        
        <button type='submit'
        onClick={signIn}
        className='login__signInButton'>Sign in</button>
      </form>
      <p>
        By signing in you agree to Amazon's
        Conditions of Use & sale.Please
        see our Privacy Notice,our Cookies Notice
        and our Interest-based Ads
        Notice

      </p>
      
      <button onClick={register}
      className='login__registerButton'>Create your Amazon account</button>
    </div>
    
    </div>
    
  )
}

export default Login;
