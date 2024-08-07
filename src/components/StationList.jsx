import { useState, useRef } from "react";
import Player from "./Player";
import SelectStationButton from "./SelectStationButton";
import LanguageList from "./LanguageList";
import SelectedPlayer from "./SelectedPlayer";
import FetchingComponent from "./FetchingComponent";
import useStations from "../hooks/useStations";

const StationList = ({ handleBreakfastScroll }) => {
  const [chosenStationId, setChosenStationId] = useState(null);
  const [language, setLanguage] = useState(null);
  const stationsRef = useRef(null);
  const languageRef = useRef(null);

  const { isPending, data } = useStations(language);
  const stations = data;

  const handleLanguageChoice = (language) => {
    console.log("Language chosen:", language);
    setLanguage(language);
    stationsRef.current.scrollIntoView();
  };

  const handleStationChoice = (id) => {
    console.log("Station chosen", id);
    setChosenStationId(id);
    handleBreakfastScroll();
  };

  const handleBackToLanguageScroll = () => {
    languageRef.current.scrollIntoView();
  };

  return (
    <div className="language-station-container">
      <div ref={languageRef}>
        <LanguageList handleLanguageChoice={handleLanguageChoice} />
      </div>
      <div className="stations-container" ref={stationsRef}>
        <div className="section-title radio-title">
          <h3>Choose a radio station</h3>
          <button onClick={handleBackToLanguageScroll} className="CTA-button">
            Back to language selection
          </button>
        </div>
        <div className="stations">
          {!isPending ? (
            <div className="station-list-container">
              {stations &&
                stations.map((station) => (
                  <div className="station-player" key={station?.id}>
                    <SelectStationButton
                      handleStationChoice={() =>
                        handleStationChoice(station?.id)
                      }
                      handleStationUnselect={() => setChosenStationId(null)}
                      chosen={chosenStationId === station?.id}
                    />
                    <div className="station-info">
                      <img
                        className="station-logo"
                        alt="station logo"
                        src={
                          station.favicon
                            ? station.favicon
                            : "https://png.pngtree.com/template/20190323/ourmid/pngtree-coffee-logo-design-image_82183.jpg"
                        }
                        width="60"
                        height="60"
                      />
                      <p className="station-name">{station?.name}</p>
                    </div>
                    <Player station={station} />
                  </div>
                ))}
            </div>
          ) : (
            <FetchingComponent elementName={"stations"} bgColor={"orange"} />
          )}
        </div>
      </div>
      <SelectedPlayer
        selectedStation={stations?.find(
          (station) => station.id === chosenStationId
        )}
      />
    </div>
  );
};

export default StationList;
