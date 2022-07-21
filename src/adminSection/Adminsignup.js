import React, { useState } from 'react'
import { Container, Row, Col } from 'react-grid';
import './Adminsignup.css'
import image from '../image/logo.png'
import {useNavigate} from 'react-router-dom'

function Adminsignup() {
    const [name,setName]=useState()
    const [phone,setPhone]=useState()
    const [password,setPassword]=useState()
    const [address,setAddress]=useState()
    const navigate = useNavigate()
  
    function handleNameChange(e){
      setName(e.target.value)
    }
    function handlePhoneChange(e){
      setPhone(e.target.value)
    }
    function handlePasswordChange(e){
      setPassword(e.target.value)
    }
    async function componentDidMount(e){
      const requestOption={
        method:"POST",
        headers:{"content-type" : "application/json"},
        body:JSON.stringify({name,phone,password,address})
      };
      const response =await fetch("/admin/adminsignup",requestOption)
      const data = await response.json();
      console.log(data)
      if(data){ 
       navigate("/adminDashboard")
      }else{
       alert("Login failed")
      }
    }
    return (
      <div className='signup-page'>
        <Container>
          <Row>
            <Col md={6}>
              <p id='logoname'>MY STORE</p>
              <img id='logo' src={image} alt="" />
            </Col>
            <Col md={6}>
  
              <div id="signup-form" >
                <p>Admin Signup</p>
                <form action="" onSubmit={componentDidMount}>
                  <input onChange={handleNameChange} name="name" type="text" placeholder='Name'/>
                  <input onChange={handlePhoneChange} name="phone" type="text" placeholder='Phone' />
                  <input onChange={handlePasswordChange} name="password" type="password" placeholder='Password' />
                  <a id='already-account' href="/login">I already have an Admin account</a>
                  <button id='btn' type="submit">Signup</button>
                  <br />
                </form>
              </div>
  
  
            </Col>
  
          </Row>
        </Container>
  
  
      </div>
    )
  }
  
export default Adminsignup