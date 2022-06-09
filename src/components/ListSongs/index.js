import { useContext, useState, useEffect } from "react";
import Songs from "../../Context";

import "./index.css";

function ListSongs() {
  const { SongsData, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handlerPlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setIdSong(song.id);
  }, [song]);

  return (
    <div className="col-span-2 overflow-y-scroll cursor-default">
      <table className="w-full">
        <thead className="table-header text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[20%]">Author</th>
            <th className="w-[10%]">
            </th>
          </tr>
        </thead>
        <tbody>
          {SongsData.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${
                idSong === song.id && "text-teal-400 bg-slate-600"
              }`}
              onClick={() => handlerPlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSongs;
