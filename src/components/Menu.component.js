import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default Menu;