import React, {useEffect, useState } from 'react';
import { Logo, UpperText } from "../AppComponents/Header";
import { Images, Videos } from "../AppComponents/Body";
import { AddressSection} from "../AppComponents/Footer";
// import './App.css';

function App() {
  return (
    <div style={{
      backgroundColor: 'ghostwhite',
    }}>
      <Logo />
      <UpperText />

      <div style={
        {
          backgroundColor: 'whitesmoke'
        }
      }>
        <Images />
      </div>
      <>
        <Videos />
      </>
      <>
        <AddressSection />
      </>
    </div>

  )
}

export default App
