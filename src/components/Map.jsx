import { 
    Map
} from '@vis.gl/react-google-maps'
import BreakfastMarkers from "./BreakfastMarkers";

const MapElement = ({ location, breakfastResults }) => {

    // this rerenders on every key press atm - not good, add debounce
    return (
            <div style={{ height: "50vh" }}>
                <Map defaultZoom={10} center={location} disableDefaultUI={true} >
                    <BreakfastMarkers places={breakfastResults} />
                </Map>
            </div>
    )
}

export default MapElement