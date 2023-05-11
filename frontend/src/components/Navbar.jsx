import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()
  let adminemail = sessionStorage.getItem("userEmail")
  const sesionExpire = ()=>{
    sessionStorage.clear()
    navigate("/login")
  }
  
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light shadow">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-0 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link text-black" to="/services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-black" to="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link text-black" to="/contact">Contact</Link>
        </li>
      </ul>
      <Link class="navbar-brand fw-bolder text-center fs-4 mx-auto text-black" to="/">FINE ARTs</Link> 
      {(adminemail)?
      <button onClick={sesionExpire} class="btn btn-outline-primary ms-auto px-4 rounded-pill"><i class='fa  me-2'></i>Logout</button>

      :
      <div>

      <Link  class="btn btn-outline-info text-black ms-auto px-4 rounded-pill" to="/login"><i class='fa  me-2'></i>Login</Link> 
      
         <Link to="/register" className='btn btn-outline-info text-black ms-2 px-4 rounded-pill'>
        <i className='fa  me-2'></i>Register</Link>
      </div>
        }

       {/* <Link to="/dashboard" className='btn btn-outline-primary ms-2 px-4 rounded-pill'>
       <i className='fa  me-2'></i>Dashboard</Link> */}
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar