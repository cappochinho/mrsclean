import React from 'react';
import { FaPhoneAlt, FaMobile, FaRegCopyright } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

export function AddressSection() {
  return (
    <>
      <div style={
        {
          padding: '50px',
          marginTop: '80px',
          backgroundColor: 'black',
        }
      }>
        <a href='mailto: edwardprempeh18@gmail.com' Style="text-decoration: none"><MdOutlineEmail />  mrsclean@gmail.com</a>
        <br />
        <a href='tel: +233244980182' Style="text-decoration: none"><FaPhoneAlt />  +233244980182</a>
        <br />
        <a href='tel: +233550554947' Style="text-decoration: none"><FaMobile />  +233550554947</a>
        <br />
      </div>
      <div>
      <p style={{ position: 'relative', color: 'blue', marginTop: '20px', backgroundColor: '', textAlign: 'center'  }}><FaRegCopyright />Mrs Clean 2022-2023</p>
      </div>
    </>

  )
}
