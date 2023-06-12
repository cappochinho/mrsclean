import React from 'react';
import { Logo } from '../AppComponents/Header';
import './styles/Products.css'

export default function Products() {
  return (
    <div>
      <Logo />
      <h1 style={{ textAlign: 'center' }}>Products</h1>
      <div style={{ padding: '30px' }}>
        <div style={
        { position: 'relative', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',  border: '2px solid whitesmoke',
          objectFit: 'cover', padding: '0', margin: '0',
        }
      }>
      <div className='gimagecontainer'>
        <img
          className='greenimage'
          src={require("../AppComponents/images/green.jpg")}
          alt="Green Paste"
          width={200}
          height={200}
          style={
            {
              borderRadius: '10px',
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: '10px',
              display: 'block',
            }
          }
        />
        <div className='greentext'>Green Paste</div>
      </div>
      <div className='yimagecontainer'>
        <img
          className='yellowimage'
          src={require("../AppComponents/images/yellow.jpg")}
          alt="Yellow Paste"
          width={200}
          height={200}
          style={
            {
              borderRadius: '10px',
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: '10px'
            }
          }
        />
        <div className='yellowtext'>Yellow Paste</div>
      </div>
    </div>
      </div>
    </div>

  );
}
