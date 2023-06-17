import React from 'react';
import ReactPlayer from 'react-player';

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
      <div style={{ textAlign: 'center', padding: '20px', color: 'blueviolet' }}>
        <p>Watch in awe as our environmentally conscious dishwashing paste effortlessly tackles grease and grime, leaving your dishes sparkling clean and your conscience clear. With its unique composition, our paste creates rich, luxurious suds that cling to every dish, ensuring thorough cleaning with minimal effort.</p>
      </div>
      {/* <h4 style={{ textAlign: 'center', padding: '20px', color: 'blueviolet' }}>Mrs Clean Paste in Action</h4> */}
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
      <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', textAlign: 'center', padding: '20px', color: 'blueviolet'  }}>
        <p style={{ marginBottom: '20px' }}>
          Experience the sheer delight of our <strong>eco-friendly dishwashing paste</strong> as it effortlessly lathers with water, creating a luxurious and satisfying foam.
        </p>
        <p style={{ marginBottom: '20px' }}>
          Watch as a small amount of our paste transforms into a rich, velvety lather, making dishwashing a truly enjoyable experience.
        </p>
      </div>
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
