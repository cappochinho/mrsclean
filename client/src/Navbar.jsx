import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCartArrowDown, FaProductHunt, FaTiktok, FaInstagram, FaYoutube} from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: 'yellowgreen', padding: '10px'}}>
      <div style={
          { position: 'relative', display: 'flex', flexDirection: 'row',
            justifyContent: 'left', alignItems: 'left',  border: '2px whitesmoke',
            objectFit: 'cover', paddingLeft: '20px', margin: '0',
          }
        }>
        <Link to='/' style={{ textDecoration: 'none', marginRight: '7px', }}><FaHome />Home</Link>
        <Link to='/products' style={{ textDecoration: 'none', marginRight: '7px', }}><FaProductHunt />roducts</Link>
        <Link to='/cart' style={{ textDecoration: 'none', marginRight: '7px',}}><FaCartArrowDown />Cart</Link>
        <Link to='/about' style={{ textDecoration: 'none', marginRight: '7px', }}>About</Link>
      </div>
      <div style={
          { position: 'relative', display: 'flex', flexDirection: 'row',
            justifyContent: 'right', alignItems: 'right',  border: '2px whitesmoke',
            objectFit: 'cover', padding: '0', marginRight: '20px',
          }
        }>
        <a href='https://www.instagram.com/mrscleanpaste/' target='_' style={{ position: 'relative', marginLeft: '5px'}}><FaInstagram /></a>
          <a href='https://www.tiktok.com/@mrscleanpaste' target='_' style={{ position: 'relative', marginLeft: '5px'}}><FaTiktok /></a>
          <a href='//#' style={{ position: 'relative', marginLeft: '10px'}}><FaYoutube /></a>
      </div>
    </nav>
  )
}