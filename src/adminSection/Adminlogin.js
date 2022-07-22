import React, { useState } from 'react'
import { Container, Row, Col } from 'react-grid';
import {useNavigate} from 'react-router-dom'
import './Adminlogin.css'
import image from '../image/logo.png'
import image1 from '../image/admin.png'


// var FormData = require('form-data');
function Adminlogin() {
  const [phone,setPhone]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()
 
  function handlPhoneChange(e){
    setPhone(e.target.value)
  }
  function handlePasswordChange(e){
    setPassword( e.target.value)
  }
  
  
 async function componentDidMount(e){
   e.preventDefault()
   console.log("called");
    const requestOption={
      method:'POST',
      headers:{'content-type' : 'application/json'},
      body:JSON.stringify({phone,password})
    };
   const response = await fetch("/admin/adminlogin-submit",requestOption)
   const data = await response.json();
   console.log(data)
   if(data.adminDatas){ 
    navigate("/adminDashboard")
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
                <p>Admin Login</p>
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

export default Adminlogin