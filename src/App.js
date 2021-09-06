import React from "react";
import Player from "./components/Player";
import Podcast from "./components/Podcast";
import './styles/app.scss'


function App() {
  return (
    <div className="App">
      <Podcast />
      <Player />
    </div>
  );
}

export default App;
