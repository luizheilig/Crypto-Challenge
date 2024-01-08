import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'


function Header() {
  return (
    <div className="header-container">
      <Link className='header-h1' to="/cryptos">
        <h2>Cryptos</h2>
      </Link>
      <Link className='header-h1' to="/wallet">
        <h2>My Wallet</h2>
      </Link>
      <Link className='header-h1' to="/">
        <h2>Logout</h2>
      </Link>
    </div>
  )
}

export default Header