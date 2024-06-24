import { useState } from "react";
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { useLoadScript, useJsApiLoader } from '@react-google-maps/api'
import MapElement from "./Map";
import LocationSearch from "./LocationSearch";

const API_KEY = 

const BreakfastSearch = () => {
    const [location, setLocation] = useState({ lat: 53.54, lng: 10 })
    const [locationQuery, setLocationQuery] = useState('')
    const [ libraries ] = useState(['places']);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: API_KEY,
        libraries: libraries,
    })

    if (!isLoaded) return <div>Loading...</div>

    const handleSearch = async (e) => {
        e.preventDefault()
        const results = await getGeocode({ address: locationQuery })
        const { lat, lng } = getLatLng(results[0])
        console.log('coords', { lat, lng })
        console.log(location)
        setLocation({ lat, lng })
        console.log(location)
    }

    return (
        <div className="breakfast">
            <MapElement location={location} />
            <LocationSearch searchValue={locationQuery} onSearch={setLocationQuery} handleSubmit={handleSearch}/>
        </div>
    )
}

export default BreakfastSearch