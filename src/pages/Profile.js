import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system'
import { UserContext } from '../Context/UserContext'
import image from '../image/address.png'
import './Profile.css'
function Profile() {
  const {setUserDetails} = useContext(UserContext)
  const [userData,setUserData]=useState()
  const navigate = useNavigate()
  useEffect(()=>{
    fetch("http://localhost:4000/profile",{
      method: "GET",
      credentials: "include",
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    }).then((response)=> response.json())
    .then((json)=>{
      console.log(json);
      if(json.status){

        setUserDetails(json.userData)
        setUserData(json.userData)
      }else{
        navigate('/login')
      }
    })
  },[])
  console.log(userData);
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
              {userData && 
              <div className="address-card">
                <h5>Name : {userData.name}</h5>
                <hr />
                <h5>Phone : {userData.phone}</h5>
                <hr />
                <h5>Address : {userData.address}</h5>
              </div>
              }
          </Col>
          <Col md={6}>
              <img id='address-image' src={image} alt="" />
          </Col>
        </Row>
      </Container>
      

    </div>
  )
}

export default Profile