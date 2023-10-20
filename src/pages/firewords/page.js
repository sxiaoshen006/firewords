import React from 'react';
import video_url from '../../assets/fire.mp4'
import './page.css';
function Page1() {
  return (
    <div>
      <video style={{  width: "100%", margin: "0 auto" }}
          autoPlay
          loop
          muted
          controls
          alt="All the devices"
          src={video_url}>
      </video>
      <div className='txt'>Game of Thrones</div>
    </div>

  );
}

export default Page1;
