import { 
    Map
} from '@vis.gl/react-google-maps'
import BreakfastMarkers from "./BreakfastMarkers";

const defaultLocation = { lat: 53.54, lng: 10 }

const MapElement = ({ breakfastResults }) => {

    // this rerenders on every key press atm - not good, add debounce
    // map not draggable atm? 
    return (
            <div className="map-div" >
                <Map defaultZoom={10} defaultCenter={defaultLocation} disableDefaultUI={true} >
                    <BreakfastMarkers places={breakfastResults} /> 
                </Map>
            </div>
    )
}

export default MapElement