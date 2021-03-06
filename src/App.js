import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Songs";
import Library from "./components/Library";
import Nav from "./components/Nav"
import data from "./utils";

function App() {
  const audioRef = useRef(null)
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0
})

const [libraryStatus, setLibraryStatus] = useState(false)
const timeUpdateHandler = (e) => {
const current = e.target.currentTime;
const duration = e.target.duration;
setSongInfo({...songInfo, currentTime: current, duration})
}

  return (
    <div className={`App${libraryStatus ?  "library-active" : ""}`}>
    <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player
      audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} libraryStatus={libraryStatus} setSongs={setSongs} />
      <audio 
      onTimeUpdate={timeUpdateHandler} 
      onLoadedMetadata={timeUpdateHandler} 
      ref={audioRef} 
      src={currentSong.audio}
      
      ></audio>

    </div>
  );
}

export default App;
