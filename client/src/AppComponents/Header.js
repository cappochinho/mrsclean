import React, { Component } from 'react';
import { FaInstagram, FaTiktok ,FaYoutube, FaCartArrowDown, FaSearch, FaProductHunt} from 'react-icons/fa';

export function UpperText() {
  const intro = 'Mrs Clean Dishwashing Paste';
  const slogan = '🧼🌟 Conquer Tough Grease with Ease! 🧽';

  return (
    <header style={
        {
          textAlign: 'center',
          padding: '40px',
        }
      }>
      <h1>{intro}</h1>
      <h3>{slogan}</h3>
    </header>
  )
}

export function Navigation() {
  return(
    <>
      <img
        src={require("./images/logo.png")}
        alt="Mrs. Clean Logo"
        width={50}
        height={50}
        style={{
          marginLeft: '20px',
        }}
      />
      <div style={
        {
          position: 'relative',
          left: '1200px',
        }
      }
      >
        <a href="?" style={{ textDecoration: 'none' }}><FaProductHunt />roducts</a>
        <a href="?" style={{ textDecoration: 'none', marginLeft: '10px' }}><FaCartArrowDown /></a>
        <a href="?" style={{ textDecoration: 'none', marginLeft: '10px' }}><FaSearch /></a>
      </div>
    </>
  )
}

export class SocialLinks extends Component {
  render() {
    return (
      <div  style={
          {
            backgroundColor: 'yellowgreen',
            marginBottom: '10px',
            padding: '30px',
          }
        }>
        <a href='/#' Style="text-decoration: none" >Contact Us</a>
        <a href='https://www.instagram.com/mrscleanpaste/' target='_' style={{ position: 'relative', left: '1145px', marginLeft: '5px'}}><FaInstagram /></a>
        <a href='https://www.tiktok.com/@mrscleanpaste' target='_' style={{ position: 'relative', left: '1150px', marginLeft: '5px'}}><FaTiktok /></a>
        <a href='//#' style={{ position: 'relative', left: '1155px', marginLeft: '10px', marginRight: '50px'}}><FaYoutube /></a>
      </div>
    )
  }
}
