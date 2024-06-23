import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ station }) => {
  console.log(station);

  return (
    <AudioPlayer
      src={station.url}
      onPlay={(e) => console.log("playing song")}
    />
  );
};

export default Player;
