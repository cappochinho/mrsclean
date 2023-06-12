import React, { useEffect, useState } from 'react';
import { Logo } from '../AppComponents/Header';
import { AddressSection } from '../AppComponents/Footer';
import './styles/Products.css'

export default function Products() {

  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setPriceData(data);
      }
    )
  }, []);

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
        <div style={{ textAlign: 'center' }}>
          {priceData ? (
            <p>GHS {priceData}.00</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <br />
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
        <div style={{ textAlign: 'center' }}>
          {priceData ? (
            <p>GHS {priceData}.00</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
    </div>
    <AddressSection />
    </div>
  );
}
