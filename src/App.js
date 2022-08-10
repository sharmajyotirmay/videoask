import React, {useEffect, useState} from 'react';
import Video from './components/Video'
import Rightcontainer from './components/Rightcontainer'
function App() {
  const [clickedButton, setClickedButton] = useState();
  const [video, setVideo] = useState({
    A : "https://bit.ly/3BTJvPM",
    B : "https://bit.ly/3QxAm3q"
});
const [play, setPlay] = useState("");


  return (
    <>
    <div className='main-container'>
      <Video clickedButton = {clickedButton} video = {video} setVideo = {setVideo} play = {play}/>
      <Rightcontainer clickedButton = {clickedButton} setClickedButton = {setClickedButton} play = {play} setPlay = {setPlay}/>
    </div>
    </>
  );
}

export default App;
