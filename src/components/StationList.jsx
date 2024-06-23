import { useState, useEffect } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import Player from "./Player";

const languages = ["english", "portuguese"];

const StationList = () => {
  const [stations, setStations] = useState(null);
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    const setupApi = async () => {
        const api = new RadioBrowserApi(fetch.bind(window), "Bossa nova breakfast");
    
        const stations = await api.searchStations({
          language: language,
          tag: "bossa nova",
          limit: 30,
        });
    
        setStations(stations)
      };

    setupApi();
    
  }, [language]);


  return (
    <div>
      <div className="language-list">
        
          {languages.map((language) => (
            
              <button key={language} onClick={() => setLanguage(language)}>{language}</button>
        
          ))}
        
      </div>
      <div className="station-list">
        {stations &&
          stations.map((station) => (
            <div className="station-player" key={station?.id}>
                <div className="station-info">
                <img className="station-logo" alt="station logo" src={station.favicon} width="60" height="60" />
                <p className="station-name">{station?.name}</p>
                </div>
              <Player station={station} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default StationList;
