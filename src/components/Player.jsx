import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => (
        <AudioPlayer
            autoPlay
            src="http://example.com/audio.mp3"
            onPlay={e => console.log('playing song')}
            />
    )


export default Player