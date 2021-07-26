import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto"> 
            <nav className="navbar navbar-expand-lg navbar-light bg-white" >
  <NavLink className="navbar-brand" to="/">Abc</NavLink >
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <NavLink className="nav-link" activeClassName="menu_active" exact to="/">Home <span className="sr-only"></span></NavLink >
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="menu_active"to="/service">Services</NavLink >
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="menu_active"to="/about">About</NavLink >
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="menu_active" to="/contact">Contact Us</NavLink >
      </li>
     
    </ul>
    
  </div>
</nav>
</div>
            </div>
        </div>
        </>
    )
}

export default Navbar
