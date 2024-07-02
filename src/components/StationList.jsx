import { useState, useEffect, useRef } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import Player from "./Player";
import SelectStationButton from "./SelectStationButton";
import LanguageList from "./LanguageList";
import SelectedPlayer from "./SelectedPlayer";

const StationList = ({ handleBreakfastScroll }) => {
  const [stations, setStations] = useState(null);
  const [chosenStationId, setChosenStationId] = useState(null)
  const [language, setLanguage] = useState(null);
  const [loading, setLoading] = useState(false);
  const stationsRef = useRef(null)
  const languageRef = useRef(null)

  useEffect(() => {
    const setupApi = async () => {
        const api = new RadioBrowserApi(fetch.bind(window), "Bossa nova breakfast");
    
        if (language) {
          try {
            setLoading(true)

            const stations = await api.searchStations({
            language: language,
            tag: "bossa nova",
            limit: 30,
          });
      
          setStations(stations)
        } catch (err) {
          console.error('Error fetching stations', err)
        } finally {
          setLoading(false)
        }
      }
      };

    setupApi();
    
  }, [language]);

  const handleLanguageChoice = (language) => {
    console.log('Language chosen:', language)
    setLanguage(language)
    stationsRef.current.scrollIntoView()
  }

  const handleStationChoice = (id) => {
    console.log('Station chosen', id)
    setChosenStationId(id)
    handleBreakfastScroll()
  }

  const handleBackToLanguageScroll = () => {
    languageRef.current.scrollIntoView()
  }

  return (
    <div>
      <div ref={languageRef}>
          <LanguageList handleLanguageChoice={handleLanguageChoice} />
      </div>
      <div className="stations-container" ref={stationsRef}>
        <div className="section-title radio-title">
            <h3>Choose a radio station</h3>
            <button onClick={handleBackToLanguageScroll} className="CTA-button">Back to language selection</button>
        </div>
        <div className="stations">
          {!loading ? (<div className="station-list-container">
            {stations &&
              stations.map((station) => (
                <div className="station-player" key={station?.id}>
                    <SelectStationButton handleStationChoice={() => handleStationChoice(station?.id)} handleStationUnselect={() => setChosenStationId(null)} chosen={chosenStationId === station?.id} />
                    <div className="station-info">
                      <img className="station-logo" alt="station logo" src={station.favicon ? station.favicon : 'https://png.pngtree.com/template/20190323/ourmid/pngtree-coffee-logo-design-image_82183.jpg'} width="60" height="60" />
                      <p className="station-name">{station?.name}</p>
                    </div>
                  <Player station={station} />
                </div>
              ))}
          </div>) : <div className="fetching-div">Fetching stations...</div>}
        </div>
      </div>
          <SelectedPlayer selectedStation={stations?.find(station => station.id === chosenStationId)} />
      </div>
  );
};

export default StationList;
