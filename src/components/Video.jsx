import React from 'react'
import { useEffect } from 'react';
import Videoplayer from './Videoplayer';
function Video({play}) {

  return (
    <div className='video-container'>
        {/* <div className="thumbnail"></div> */}
        <Videoplayer play = {play}/>
    </div>
  )
}

export default Video