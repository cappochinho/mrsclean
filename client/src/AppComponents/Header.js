import React from 'react';

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

export function Logo() {
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
    </>
  )
}

