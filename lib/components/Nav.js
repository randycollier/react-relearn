import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () =>{
  return (

    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="#">AntidoteDesign</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to='/' className="nav-link"
              href="#">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/portfolio' className="nav-link"
              href="#">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/humans' className="nav-link"
              href="#">Demo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/resume' className="nav-link"
              href="#">Resume</NavLink>
          </li>
        </ul>
      </div>
    </nav>


    
  );
};


export default Nav;


