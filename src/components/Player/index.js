import { useContext } from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./index.css";
import Songs from "../../Context";

function Player() {
  const { song, handleSetSong } = useContext(Songs);
  const handlePlay = () => {
    handleSetSong(song.id);
  };
  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };
  const handleClickPre = () => {
    handleSetSong(song.id - 1);
  };
  return (
    
    <AudioPlayer
      className="player-music"
      src={song.url}
      layout="stacked-reverse"
      showSkipControls={true}
      showJumpControls={false}
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPre}
      onPlaying={handlePlay}
    />
    
  );
}

export default Player;
