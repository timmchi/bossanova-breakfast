import { useState } from "react";
import { 
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow
} from '@vis.gl/react-google-maps'

const API_KEY = 

const MapElement = () => {
    const position = { lat: 53.54, lng: 10 }

    return (
        <APIProvider apiKey={API_KEY}>
            <div style={{ height: "50vh" }}>
                <Map defaultZoom={9} defaultCenter={position}>

                </Map>
            </div>
        </APIProvider>
    )
}

export default MapElement