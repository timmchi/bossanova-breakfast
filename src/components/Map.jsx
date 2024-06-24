import { useState } from "react";
import { 
    APIProvider,
    Map,
    useMapsLibrary
} from '@vis.gl/react-google-maps'

const API_KEY = 'AIzaSyBkRujkfnEY9WcJtWbG46I275XCzzSzEQ4'

const MapElement = ({ location }) => {

    // this rerenders on every key press atm - not good, add debounce
    return (
        <APIProvider apiKey={API_KEY}>
            <div style={{ height: "50vh" }}>
                <Map defaultZoom={10} center={location} disableDefaultUI={true}>
                </Map>
            </div>
        </APIProvider>
    )
}

export default MapElement