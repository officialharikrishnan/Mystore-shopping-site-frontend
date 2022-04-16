import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a href='/' className="navbar-brand">My Store</a>
        <a className='nav-item' href='/signup'>Signup</a>
        <a className='nav-item' href='/login'  >Login</a>

        
      </nav>



    </div>
  )
}

export default Header