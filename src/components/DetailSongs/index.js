import { useContext } from "react";
import Songs from "../../Context";

function DetailSongs() {
  const {song} = useContext(Songs)
  console.log(song.name);
  return (
    <div className="col-span-1 p-3">

      <div className="w-[300px] max-w-[300px] m-auto mt-32">
        <img
          className="w-full"
          src={song.links.images[0].url}
          alt="avatar"
        />
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <img
          className="w-[40px] rounded-full"
          src={song.links.images[1].url}
          alt="avatar"
        />
        <span className="text-xl text-white">Alan Walker</span>
      </div>
      <h2 className="text-cyan-500 font-bold mt-10">Now Playing</h2>
      <h2 className="text-neutral-400 text-2xl">{song.name}</h2>
    </div>
  );
}

export default DetailSongs;
