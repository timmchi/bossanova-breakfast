import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ station, autoplayEnabled }) => {
  return (
    <AudioPlayer
      src={station.urlResolved}
      showJumpControls={false}
      layout="stacked"
      autoPlay={autoplayEnabled}
      volume={0.3}
      customProgressBarSection={[]}
      customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
      onPlay={(e) => console.log("playing song")}
      autoPlayAfterSrcChange={false}
    />
  );
};

export default Player;
