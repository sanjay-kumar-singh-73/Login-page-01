import React, { useState } from 'react'
import "./Loginform.css"
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Loginform = () => {

const [popupStyle, showPopup] = useState("hide")

const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
}

  return (
    <div className='cover'>
      <h1>Login</h1>
      <input type='text' placeholder='user-name' /> <br/>
      {/* <input type='email' placeholder='Email' /> <br/> */}
      <input type='password' placeholder='Password' /> <br/>

     <div className='login-btn' onClick={popup}>Login</div>
     <p className='text'>Or Login Using</p>

     <div className='alt-login'>
        <div className='Facebook'><FaFacebook   /></div>
        <div className='Google'><FaGoogle /></div>
     </div>

     <div className={popupStyle}>
        <h3>Login Failed</h3>
        <p>Username or Password incorrect</p>
        <p>Plase Try Again!</p>
     </div>

    </div>
  )
}

export default Loginform
