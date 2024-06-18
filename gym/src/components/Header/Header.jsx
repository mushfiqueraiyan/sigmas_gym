import React from 'react'
import Logo from '../../assets/logo.png'
import "./Header.css"

function Header() {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>

        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header