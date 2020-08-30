import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Header() {
  return (
    <div className="scopo">
      <Link to="/">
        {' '}
        <span> Home </span>
      </Link>
      <Link to="/lista">
        <span> Produtos </span>
      </Link>
      <Link to="/users">
        <span> Usuários </span>
      </Link>
    </div>
  )
}

export default Header
