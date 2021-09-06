import React, {useState} from "react";
import './styles/app.scss'
import Player from "./components/Player";
import Song from "./components/Songs";
import data from "./utils"



function App() {

const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0])
const [isPlaying, setIsPlaying] = useState(false)


  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong} />
    </div>
  );
}

export default App;
