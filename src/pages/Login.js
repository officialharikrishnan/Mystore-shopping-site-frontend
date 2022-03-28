import React, { useState } from 'react'
import { Container, Row, Col } from 'react-grid';
import './Login.css'
import image from '../image/logo.png'
function Login () {
  const [phone,setPhone]=useState()
  const [password,setPassword]=useState()
 
  function handlPhoneChange(e){
    setPhone({phone: e.target.value})
  }
  function handlePasswordChange(e){
    setPassword({password: e.target.value})
  }
  
  
  function handleSubmit(e){
    alert("submited")
    e.preventDefault();
    console.log(phone,password)
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
                <form onSubmit={handleSubmit} action="/submit" method='post' encType='application/x-www-form-urlencoded'>
                  <input onChange={handlPhoneChange}  type="text" name='phone' id='phone' placeholder='Email or phone' />
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