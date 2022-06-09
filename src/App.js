import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import ListSongs from "./components/ListSongs";
import DetailSongs from "./components/DetailSongs";
import Songs from "./Context";
import SongsData from "./data/songs.json";
import Player from "./components/Player";

function App() {
  const [song, setSong] = useState(SongsData[0]);
  const handleSetSong = (idSong) => {
    const song = SongsData.find((song) => song.id === idSong);
    if (!song) setSong(SongsData[0]);
    else setSong(song);
  };

  return (
    <div className="App">
      <Songs.Provider value={{ SongsData, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          <DetailSongs />
          <ListSongs />
        </div>
        <Player />
      </Songs.Provider>
    </div>
  );
}

export default App;
