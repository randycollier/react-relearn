import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () =>{
  return (
    <div>
      <NavLink to="/" >HOME</NavLink>
      <NavLink to="/humans" >HUMANS</NavLink>
    </div>
  );
};


export default Nav;