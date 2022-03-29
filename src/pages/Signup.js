import React, { useState } from 'react'
import { Container, Row, Col } from 'react-grid';
import './Signup.css'
import image from '../image/logo.png'
function Signup() {
  const [name,setName]=useState()
  const [phone,setPhone]=useState()
  const [password,setPassword]=useState()

  function handleNameChange(e){
    setName(e.target.value)
  }
  function handlePhoneChange(e){
    setPhone(e.target.value)
  }
  function handlePasswordChange(e){
    setPassword(e.target.value)
  }
  function componentDidMount(e){
    const requestOption={
      method:"POST",
      headers:{"content-type" : "application/json"},
      body:JSON.stringify({name,phone,password})
    };
    fetch("signup-submit",requestOption).then(response=>response.json())
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
              <p>Signup</p>
              <form action="" onSubmit={componentDidMount}>
                <input onChange={handleNameChange} name="name" type="text" placeholder='Name'/>
                <input onChange={handlePhoneChange} name="phone" type="text" placeholder='Phone' />
                <input onChange={handlePasswordChange} name="password" type="password" placeholder='Password' />
                <a id='already-account' href="/login">I already have an account</a>
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

export default Signup