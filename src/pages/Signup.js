import React from 'react'
import { Container, Row, Col } from 'react-grid';
import './Signup.css'
import image from '../image/logo.png'
function Signup() {
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
              <form action="">
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email or phone' />
                <input type="password" placeholder='Password' />
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