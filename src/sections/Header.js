import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { Container, Row, Col } from 'react-grid-system'

import Dropdown from 'react-bootstrap/Dropdown';
import './Header.css'
import { useNavigate } from 'react-router-dom';
function Header() {
  const {userDetails} = useContext(UserContext)
  const navigate = useNavigate()
  function logoutHandler(){
    fetch("http://localhost:4000/logout",{ 
      method: "GET",
      credentials: "include",
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }}).then((response)=>{
          if(response.status){
            navigate('/login')
            console.log("navigate");
          }else{
            console.log("error");
          }
        })
  }
  // if(userDetails){
  //   setName(userDetails.name)
  // }else{
  //   setName("")
  // }
  return (
    <div className='header'>
      <Row>
        <Col md={2}>
      <h4>Mystore</h4>
        </Col>
        <Col md={10}>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {userDetails && userDetails.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
       {userDetails ? "" : <Dropdown.Item href="/login">Login</Dropdown.Item>}
       {userDetails ?  <Dropdown.Item onClick={logoutHandler}>Log out</Dropdown.Item> : ""}
        <Dropdown.Item href="/signup">Sign up</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Col>
      </Row>



    </div>
  )
}

export default Header