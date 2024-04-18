import React from 'react'
import {Link, NavLink} from "react-router-dom"
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link  className="navbar-brand" href="#"><AiOutlineShopping style={{fontSize:25}} />E-Commerce App</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link ">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category" className="nav-link">Category</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/register" className="nav-link" >Regsiter</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" >Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link" >Cart (0)</NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header
