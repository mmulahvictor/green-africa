import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        {/* <li><Link to='/about'>About</Link></li> */}
        <li><Link to='/sustainableliving'>Sustainable Living</Link></li>
        <li><Link to='/environment'>Environment</Link></li>
        <li><Link to='/greenenergy'>Green Energy</Link></li>
        <li><Link to='/resources'>Resources</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
