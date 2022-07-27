import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system'
import { UserContext } from '../Context/UserContext'
import image from '../image/address.png'
import './Profile.css'
function Profile() {
  const {setUserDetails} = useContext(UserContext)
  const [userData,setUserData]=useState()
  const [editStatus,setEditStatus]=useState(false)
  const [name,setName]=useState()
  const [phone,setPhone]=useState()
  const [address,setAddress]=useState()
  const navigate = useNavigate()
  useEffect(()=>{
    fetch("/profile",{
      method: "GET",
      credentials: "include",
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    }).then((response)=> response.json())
    .then((json)=>{
      if(json.status){

        setUserDetails(json.userData)
        setUserData(json.userData)
      }else{
        navigate('/login')
      }
    })
  },[])
  
  const editHandler = () =>{
    setEditStatus(true)
  }
  const cancelHandler = () =>{
    setEditStatus(false)
  }
  const saveHandler = (e) =>{
    e.preventDefault()
    const requestOption={
      method:"POST",
      headers:{"content-type" : "application/json"},
      body:JSON.stringify({name,phone,address})
    };
    console.log(requestOption);
    fetch('profile-edit',requestOption).then((res)=>{
      if(res.status){
        window.location.reload()
      }else{
        setEditStatus(false)
      }
    })
  }
  const nameHandler = (e) =>{
      setName(e.target.value)

  }
  const phoneHandler = (e) =>{
      setPhone(e.target.value)
    
  }
  const addressHandler = (e) =>{
      setAddress(e.target.value)
    
  }
  return (
    <div>
      <Container>
        <Row>
        <Col md={6}>
              <img id='address-image' src={image} alt="" />
          </Col>
          <Col md={6}>
              {editStatus ? 
                <div className="address-card-edit">
              <h5>Name : <input type="text" name='name' onChange={nameHandler} placeholder={userData.name} /></h5>
              <hr />
              <h5>Phone : <input type="number" name='phone' onChange={phoneHandler} placeholder={userData.phone} /></h5>
              <hr />
              <h5>Address : <input type="text" name='address' onChange={addressHandler} placeholder={userData.address} /></h5>
              <button className='cancel-btn' onClick={cancelHandler}>Cancel</button>
              <button className='save-btn' onClick={saveHandler}>Save</button> 
            </div> : <div>
            {userData &&
            
              <div className="address-card">
                <h5>Name : {userData.name}</h5>
                <hr />
                <h5>Phone : {userData.phone}</h5>
                <hr />
                <h5>Address : {userData.address}</h5>
                <button className='edit-btn' onClick={editHandler}>Edit</button>
              </div>
              }</div>
          }
          </Col>
          
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
      

    </div>
  )
}

export default Profile