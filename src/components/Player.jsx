import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ station }) => {

  return (
    <AudioPlayer
      src={station.urlResolved}
      showJumpControls={false}
      layout="stacked"
      customProgressBarSection={[]}
      customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
      onPlay={(e) => console.log("playing song")}
      autoPlayAfterSrcChange={false}
    />
  );
};

export default Player;
