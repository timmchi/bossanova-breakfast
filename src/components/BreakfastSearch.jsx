import { useEffect, useState } from "react";
import { 
    APIProvider,
    useMap,
    useMapsLibrary
} from '@vis.gl/react-google-maps'
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { useLoadScript, useJsApiLoader } from '@react-google-maps/api'
import MapElement from "./Map";
import BreakfastOptionCard from "./BreakfastOptionCard";
import LocationSearch from "./LocationSearch";
import { cafes } from '../data/mockCafes'

const API_KEY = 

const usePlacesService = () => {
    const map = useMap();
    const placesLibrary = useMapsLibrary('places');
    const [placesService, setPlacesService] = useState(null);
  
    useEffect(() => {
      if (!placesLibrary || !map) return;
  
      setPlacesService(new placesLibrary.PlacesService(map));
    }, [placesLibrary, map]);
  
    return placesService;
}

const BreakfastSearch = () => {
    const [location, setLocation] = useState({ lat: 53.54, lng: 10 })
    const [searchPlaces, setSearchPlaces] = useState(false)
    const [locationQuery, setLocationQuery] = useState('')
    const [breakfastResults, setBreakfastResults] = useState(cafes)

    const placesService = usePlacesService()
    const map = useMap();
    const [ libraries ] = useState(['places']);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: API_KEY,
        libraries: libraries,
    })

    useEffect(() => {
        if (!placesService) return;

        if (searchPlaces) {
            placesService?.nearbySearch(request, (results, status) => {

                    console.log(results)
                    setBreakfastResults(results)
                
            })
        }
        
    }, [placesService, location])

    const request = {
        keyword: 'Breakfast cafe restaurant',
        location: location,
        openNow: true,
        radius: 5000
    }

    if (!isLoaded) return <div>Loading...</div>

    const handleSearch = async (e) => {
        e.preventDefault()
        const results = await getGeocode({ address: locationQuery })
        const { lat, lng } = getLatLng(results[0])
        console.log('coords', { lat, lng })
        console.log(location)
        setLocation({ lat, lng })
        setSearchPlaces(true)
        map.setCenter({ lat, lng })
        console.log(location)
    }

    return (
        <div className="breakfast">
            <div className="map-with-search">
                <MapElement breakfastResults={breakfastResults} />
                <LocationSearch searchValue={locationQuery} onSearch={setLocationQuery} handleSubmit={handleSearch}/>
            </div>
                {breakfastResults.slice(0, 5).map(place => <><BreakfastOptionCard place={place} key={place.place_id} /></>)}
        </div>
    )
}

export default BreakfastSearch