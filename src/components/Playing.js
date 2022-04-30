import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getSongById, songSelector } from "../redux/slice/SongSlice";

const Playing = () => {
  const dispatch = useDispatch();
  const { song } = useSelector(songSelector);

  const handleClickNext = () => {
    dispatch(getSongById(song.id + 1));
  };

  const handleClickPrevious = () => {
    dispatch(getSongById(song.id - 1));
  };
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  );
};

export default Playing;
