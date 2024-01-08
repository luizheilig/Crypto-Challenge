import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'


function Header() {
  return (
    <div className="header-container">
      <Link to="/cryptos">
        <h1>Cryptos</h1>
      </Link>
      <Link to="/wallet">
        <h1>My Wallet</h1>
      </Link>
      <Link to="/">
        <h1>Logout</h1>
      </Link>
    </div>
  )
}

export default Header