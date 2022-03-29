import React, { useState } from 'react'
import { Container, Row, Col } from 'react-grid';
import './Login.css'
import image from '../image/logo.png'
import axios from 'axios'
// var FormData = require('form-data');
function Login () {
  const [phone,setPhone]=useState()
  const [password,setPassword]=useState()
 
  function handlPhoneChange(e){
    setPhone(e.target.value)
  }
  function handlePasswordChange(e){
    setPassword( e.target.value)
  }
  
  
  function componentDidMount(){
    const requestOption={
      method:'POST',
      headers:{'content-type' : 'application/json'},
      body:JSON.stringify({phone,password})
    };
    fetch("/login-submit",requestOption).then(response=>response.json())
    console.log("function called")
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
  
          </Row>
        </Container>
  
  
      </div>
    )
  
  
}

export default Login