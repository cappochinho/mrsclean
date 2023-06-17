import React from 'react';
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
      <div>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', lineHeight: '1.4', color: '#333333', padding: '20px', }}>
          Transform your dishwashing routine into an <strong style={{ fontWeight: 'bold' }}>eco-friendly experience</strong> with our <strong style={{ fontWeight: 'bold' }}>revolutionary dishwashing paste</strong>. Our environmentally conscious formula is designed to provide powerful cleaning while minimizing your carbon footprint. With every use, you can enjoy spotless dishes while knowing that you're making a positive impact on the planet.
          <br /><br />
          Our dishwashing paste combines cutting-edge technology with sustainable ingredients, ensuring a guilt-free cleaning experience that doesn't compromise on performance. Say goodbye to harsh chemicals and hello to a greener, cleaner home with our <strong style={{ fontWeight: 'bold' }}>earth-friendly dishwashing paste</strong>.
        </p>
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
