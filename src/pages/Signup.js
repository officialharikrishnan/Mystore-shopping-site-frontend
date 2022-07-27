import React, { useContext, useState } from 'react'
import { Container, Row, Col } from 'react-grid';
import './Signup.css'
import image from '../image/signup.png'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../Context/UserContext';
function Signup() {
  const {setUserDetails} = useContext(UserContext)
  const [name,setName]=useState()
  const [phone,setPhone]=useState()
  const [password,setPassword]=useState()
  const [address,setAddress]=useState()
  const navigate = useNavigate()
  const [userCheck,setUserCheck]=useState()

  function handleNameChange(e){
    setName(e.target.value)
  }
  function handlePhoneChange(e){
    setPhone(e.target.value)
  }
  function handlePasswordChange(e){
    setPassword(e.target.value)
  }
  function handleAddressChange(e){
    setAddress(e.target.value)
  }
  async function componentDidMount(e){
    e.preventDefault()
    const requestOption={
      method:"POST",
      headers:{"content-type" : "application/json"},
      body:JSON.stringify({name,phone,password,address})
    };
     fetch("/signup-submit", requestOption).then((response)=> response.json()).then((json)=>{
      console.log(json);
      if(json.status){ 
        setUserDetails(json.userData)
       navigate("/dashboard")
      }else{
        if(json.userCheck){
          setUserCheck(true)
          alert("This phone number already used")
        }else{
          alert("Login failed")
        }
      }
    })
    // const response =await fetch("/signup-submit",requestOption)
    // const data =  response.json();
    console.log(requestOption)
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
              <p id='signup'>Signup</p>
              <form action="" onSubmit={componentDidMount}>
                <input onChange={handleNameChange} name="name" type="text" placeholder='Name'/>
                <input onChange={handlePhoneChange} name="phone" className={userCheck ? "user-exist" : ""} type="text" placeholder='Phone' />
                <input onChange={handlePasswordChange} name="password" type="password" placeholder='Password' />
                <input onChange={handleAddressChange} name="address" type="text" placeholder='Address' />
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