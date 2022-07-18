import React, { useEffect } from 'react'
import './Header.css'
function Header() {
  useEffect(()=>{
    const response = fetch("http://localhost:4000/")
   const data = response
   console.log(data)
  },[])
  return (
    <div className='header'>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a href='/' className="navbar-brand">My Store</a>
        <a className='nav-item' href='/signup'>Signup</a>
        <a className='nav-item' href='/login'  >Login</a>
        <a className='nav-item' href='/cart'  >Cart</a>


        
      </nav>



    </div>
  )
}

export default Header