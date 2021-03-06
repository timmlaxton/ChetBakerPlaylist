import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo, songs, setCurrentSong, }) => {


  const playSongHandler = () => {
  if(isPlaying) {
    audioRef.current.pause();
    setIsPlaying(!isPlaying)
  } else {
    audioRef.current.play()
    setIsPlaying(!isPlaying)
  }
}


const getTime = (time) => {
return (
  Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
)
}

const dragHandler = (e) => {
  audioRef.current.currentTime = e.target.value
setSongInfo({...songInfo, currentTime: e.target.value})
} 

const skiptTrackHandler = (direction) => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  if(direction === 'skip-forward') {
    setCurrentSong(songs[(currentIndex + 1) % songs.length])
  } 
    if(direction === 'skip-back') {
      if((currentIndex - 1) % songs.length === -1){
        setCurrentSong(songs[songs.length -1])
        return;
      }
    setCurrentSong(songs[(currentIndex -  1) % songs.length])
  }
}


  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon 
        onClick={() => skiptTrackHandler('skip-back')} 
        className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon 
        onClick={playSongHandler}
        className="play" 
        size="2x" 
        icon={isPlaying ? faPause : faPlay } />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skiptTrackHandler('skip-forward')}
        />
      </div>
    </div>
  );
};

export default Player;
