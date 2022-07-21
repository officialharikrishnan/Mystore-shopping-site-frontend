import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import image1 from '../image/profile-icon.png'
import image2 from '../image/profile-icon-verified.png'
import adminimg from '../image/admin.png'



import Dropdown from 'react-bootstrap/Dropdown';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../Context/Admin'
function Header() {
  const {userDetails} = useContext(UserContext)
  const {admin} = useContext(AdminContext)
  const navigate = useNavigate()
  function logoutHandler(){
    fetch("/logout",{ 
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
      {admin ? 
      <div>
        <section className='sectionOne'>
     <a href="/adminDashboard"><h3 id='header_1'>Mystore  <br /><h6 id='header_2'>Admin</h6></h3></a>
      </section>
      <section className='sectionTwo'>

      <Dropdown>
         <img src={adminimg} alt=""/> 
      <Dropdown.Toggle  id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="/login">Login</Dropdown.Item>
        <Dropdown.Item href="/adminDashboard/addproduct">Add product</Dropdown.Item> 
        <Dropdown.Item href="/adminDashboard/allusers">All users</Dropdown.Item>
       <Dropdown.Item onClick={logoutHandler}>Log out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </section>
      </div>
       : 
      
      <div>
        <section className='sectionOne'>
     <a href="/dashboard"><h3 >Mystore</h3></a>
      </section>
      <section className='sectionTwo'>

      <Dropdown>
        {userDetails ? <img src={image2} alt=""/> : <img src={image1} alt="" />}
      <Dropdown.Toggle  id="dropdown-basic">
        {userDetails && userDetails.name}
      </Dropdown.Toggle>

      <Dropdown.Menu >
       {userDetails ? "" : <Dropdown.Item href="/login">Login</Dropdown.Item>}
        {userDetails ? "" : <Dropdown.Item href="/signup">Sign up</Dropdown.Item>}
        {userDetails ? <Dropdown.Item href="/profile">Profile</Dropdown.Item> : ""}
        {userDetails ? <Dropdown.Item href="/cart">Cart</Dropdown.Item> : ""}
       {userDetails ?  <Dropdown.Item onClick={logoutHandler}>Log out</Dropdown.Item> : ""}
      </Dropdown.Menu>
    </Dropdown>
      </section>
      </div>
      
      
      
      
      }




    </div>
  )
}

export default Header