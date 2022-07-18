import React, { useState } from 'react'
import { Container, Row, Col } from 'react-grid';
import {useNavigate} from 'react-router-dom'
import './Login.css'
import image from '../image/logo.png'
import image1 from '../image/login-icon.png'

import Loading from './Loading';

// var FormData = require('form-data');
function Login () {
  const [phone,setPhone]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()
  const [loading,setLoading]=useState(null)
 
  function handlPhoneChange(e){
    setPhone(e.target.value)
  }
  function handlePasswordChange(e){
    setPassword( e.target.value)
  }
  
  
 async function componentDidMount(e){
   e.preventDefault()
   setLoading(true)
   console.log("called");
    const requestOption={
      method:'POST',
      headers:{'content-type' : 'application/json'},
      body:JSON.stringify({phone,password})
    };
   const response = await fetch("/login-submit",requestOption)
   const data = await response.json();
   console.log(data.userDatas[0])
   if(data.userDatas[0]){ 
    navigate("/dashboard")
   }else{
    alert("Login failed")
   }
  }
  
      
  
    return (
      <div className='loginpage'>
        <Container>
          <Row>
            <Col md={6}>
              <p id='logoname'>MY STORE</p>
              <img id='logo' src={image} alt="" />
            </Col>
            <Col md={6}>
  
              <div id="login-form" >
                <img id='login-form-icon' src={image1} alt="" />
                <p>Login</p>
                <form onSubmit={componentDidMount} >
                  <input onChange={handlPhoneChange}  type="text" name='phone' id='phone' placeholder='Phone' />
                  <input onChange={handlePasswordChange} type="password" name='password' id='password'  placeholder='Password' />
                  <a id='forgot' href="/">Forgot password</a>  
                  <a id ="create-acc"href="/signup">Create an account</a> 
                  <button id='btn' value="Submit" type="submit">Go!</button>
                  <br />
                </form>
              </div>
  
  
            </Col>
            {loading && <Loading/>}
  
          </Row>
        </Container>
  
  
      </div>
    )
  
  
}

export default Login