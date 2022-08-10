import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
function Videoplayer({play}) {
    const [speed,setSpeed]=useState(0.5);
    const [progress, setProgress] = useState(0);
    const videoRef= useRef();
    const setPlayBack = () => {
        if(speed===2.0)
        {
            videoRef.current.playbackRate = 1.0;
            setSpeed(1.0);
        }
        else
        {
      videoRef.current.playbackRate = speed+0.5;
      setSpeed(speed+0.5);
        }
    };
    const handleProgress = () => {
        videoRef.current.addEventListener("timeupdata", (event) => {
            setProgress((event.currentTime / event.duration) * 100);
        })
        console.log(progress)
      };
  return (
    <div className='video-container'>
        <video ref={videoRef} onProgress = {handleProgress} onCanPlay={()=>{setPlayBack()}} autoPlay className = "react-player" src={play}></video>
        <div className="video-bar">
        <div 
        className="progress-done"
        style={{width : `${progress}`}}
        >
        </div>
        </div>
        <div className="video-btns">
            <span className='time-stamp'>0:00/0.20</span>
            <button className='caption'>
                <span className='caption-class'>CC</span>
            </button>
            <div className="speed" onClick={()=>setPlayBack()}>
                <p className='speed-container'><span className='speed-number'>{speed}</span>x</p>
            </div>
            <div className="fullscreen">
                <span className='fullscreen-clicked small-screen'>X</span>
            </div>
        </div>
    </div>
  )
}

export default Videoplayer