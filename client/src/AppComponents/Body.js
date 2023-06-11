import React from 'react';
import ReactPlayer from 'react-player';
// import { MDBView, MDBMask } from 'mdbreact';

export function Images() {
  return (
    <div style={
        { position: 'relative', display: 'flex', flexDirection: 'row',
          justifyContent: 'center', alignItems: 'center',  border: '2px solid whitesmoke',
          objectFit: 'cover', padding: '0', margin: '0',
        }
      }>
      <img
        src={require("./images/green.jpg")}
        alt="Green Paste"
        width={200}
        height={200}
        style={
          {
            borderRadius: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '10px',
          }
        }
      />
      <img
        src={require("./images/yellow.jpg")}
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
      <img
        src={require("./images/yellow open.jpg")}
        alt="Yellow Paste Open"
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
    </div>
  )
}

export function Videos() {
  return(
    <div>
      <h4 style={{ textAlign: 'center', padding: '20px', color: 'blueviolet' }}>Mrs Clean Paste in Action</h4>
      <div style={
        { position: 'relative', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',  border: '2px solid whitesmoke',
          objectFit: 'cover', padding: '0', margin: '0',
        }
      }
      >
        <ReactPlayer
          url={require('./videos/Grease.mp4')}
          controls={true}
          width={300}
          height={300}
          playing={true}
          muted={true}
        />
      </div>
      <h4 style={{ textAlign: 'center', padding: '20px', color: 'blueviolet' }}>Lathers with water easily!</h4>
      <div style={
        { position: 'relative', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',  border: '2px solid whitesmoke',
          objectFit: 'cover', padding: '0', margin: '0',
        }
      }
      >
        <ReactPlayer
          url={require('./videos/Video1.mp4')}
          controls={true}
          width={300}
          height={300}
          playing={true}
          muted={true}
        />
      </div>
    </div>
  )
}
