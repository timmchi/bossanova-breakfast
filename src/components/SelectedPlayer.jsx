import Player from "./Player"

const SelectedPlayer = ({ selectedStation }) => {
    return (<div className="selected-player-container">{selectedStation && (
        <div className="selected-player">
            <p>Now playing: {selectedStation.name}</p>
            <Player station={selectedStation} />
        </div>
    )}</div>)
}

export default SelectedPlayer