import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './Navbar.css';
import Logo from './header.png';
import Dropdown from 'react-bootstrap/Dropdown'
import main from './main.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
   <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-info navbar-header ">
  <div class="container-fluid">
  
    <Link class="navbar-brand" to="/"><img src={Logo} width="50px"/></Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-end"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <div class="navbar-collapse justify-content-end">
      <ul class="navbar-nav  mb-2 mb-lg-0 ">
      
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/program">Programs</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/teams">Team</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about-us">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact-us">Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Donate">Donate</Link>
        </li>
       
 </ul>
 </div>
    </div>
   
  </div>
</nav>

       </div>
    )
}

export default Navbar
