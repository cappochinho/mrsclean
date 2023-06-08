import React, { Component } from 'react';
import { FaInstagram, FaTiktok ,FaYoutube, FaCartArrowDown, FaSearch, FaProductHunt} from 'react-icons/fa';

export function UpperText() {
  const intro = 'Mrs Clean Dishwashing Paste';
  const slogan = '🧼🌟 Conquer Tough Grease with Ease! 🧽';

  return (
    <header>
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
      />
      <a href="?" Style="text-decoration: none"><FaProductHunt />Products</a>
      <a href="?"><FaCartArrowDown /></a>
      <a href="?"><FaSearch /></a>
    </>
  )
}

export class SocialLinks extends Component {
  render() {
    return (
      <div  style={
          {
            backgroundColor: 'yellowgreen',
            marginBottom: 10,
          }
        }>
        <a href='/#' Style="text-decoration: none" >Contact Us</a>
        <a href='https://www.instagram.com/mrscleanpaste/' target='_'><FaInstagram /></a>
        <a href='https://www.tiktok.com/@mrscleanpaste' target='_'><FaTiktok /></a>
        <a href='//#'><FaYoutube /></a>
      </div>
    )
  }
}
