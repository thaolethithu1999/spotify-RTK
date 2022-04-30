import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongById, songSelector } from "../redux/slice/SongSlice";
const DetailSong = () => {
  const dispatch = useDispatch();
  const { song } = useSelector(songSelector);

  useEffect(() => {
    dispatch(getSongById(0));
  }, []);

  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold">Now Playing</h2>
      <h2 className="text-neutral-400 text-2xl">{song.name}</h2>
      <div className="w-[240px] m-auto mt-10">
        <img className="w-full " src={song.links.images[0].url} alt="img" />
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <img
          className="w-[70px] rounded-full"
          src={song.links.images[1].url}
          alt="img"
        />
        <span className="text-xl text-white">{song.author}</span>
      </div>
    </div>
  );
};

export default DetailSong;
