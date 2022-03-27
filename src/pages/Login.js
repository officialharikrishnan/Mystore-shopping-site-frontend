import React from 'react'
import { Container, Row, Col } from 'react-grid';
import './Login.css'
import image from '../image/logo.png'
function Login() {
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
              <form action="">
                <input type="text" placeholder='Email or phone' />
                <input type="password" placeholder='Password' />
                <a id='forgot' href="">Forgot password</a>  
                <a id ="create-acc"href="/signup">Create an account</a> 
                <button id='btn' type="submit">Go!</button>
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