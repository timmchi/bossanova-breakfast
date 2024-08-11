import { Map } from "@vis.gl/react-google-maps";
import BreakfastMarkers from "./BreakfastMarkers";

const defaultLocation = { lat: 53.54, lng: 10 };
const mapId = import.meta.env.VITE_MAP_ID;

const MapElement = ({ breakfastResults, handleMarkerClick }) => {
  return (
    <div className="map-div">
      <Map
        defaultZoom={12}
        defaultCenter={defaultLocation}
        disableDefaultUI={true}
        id={"breakfast-map"}
        mapId={mapId}
      >
        <BreakfastMarkers
          places={breakfastResults}
          onMarkerClick={handleMarkerClick}
        />
      </Map>
    </div>
  );
};

export default MapElement;
