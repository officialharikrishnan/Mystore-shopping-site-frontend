import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { Container, Row, Col } from 'react-grid-system'
import image1 from '../image/profile-icon.png'
import image2 from '../image/profile-icon-verified.png'


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
            window.location.reload()
          }else{
            alert("an error occurred")
          }
        })
  }
  
  return (
    <div className='header'>
      <section className='sectionOne'>
     <a href="/dashboard"><h3 >Mystore</h3></a>
      </section>
      <section className='sectionTwo'>

      <Dropdown>
        {userDetails ? <img src={image2} alt=""/> : <img src={image1} alt="" />}
      <Dropdown.Toggle  id="dropdown-basic">
        {userDetails && userDetails.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
       {userDetails ? "" : <Dropdown.Item href="/login">Login</Dropdown.Item>}
       {userDetails ?  <Dropdown.Item onClick={logoutHandler}>Log out</Dropdown.Item> : ""}
        <Dropdown.Item href="/signup">Sign up</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </section>




    </div>
  )
}

export default Header