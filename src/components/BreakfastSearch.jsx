import { useState } from "react";
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import MapElement from "./Map";
import BreakfastOptionCard from "./BreakfastOptionCard";
import LocationSearch from "./LocationSearch";
import PaginationElement from "./Pagination";
import usePlacesService from "../hooks/usePlacesService";
import { cafes } from '../data/mockCafes'

// TODO - fix rerendering on every key press when searching for a place

const BreakfastSearch = ( {handleScroll} ) => {
    const [location, setLocation] = useState({ lat: 53.54, lng: 10 })
    const [searchPlaces, setSearchPlaces] = useState(false)
    const [locationQuery, setLocationQuery] = useState('')
    const [breakfastResults, setBreakfastResults] = useState(cafes)
    const [resultsPage, setResultsPage] = useState(1)
    const [openCard, setOpenCard] = useState('')

    // const { map, fetchedResults } = usePlacesService(location, searchPlaces)
    const { map } = usePlacesService(location, searchPlaces)

    const handleSearch = async (e) => {
        e.preventDefault()
        const results = await getGeocode({ address: locationQuery })
        setLocationQuery('')
        const { lat, lng } = getLatLng(results[0])
        console.log('coords', { lat, lng })
        // console.log(location)
        setLocation({ lat, lng })
        setSearchPlaces(true)
        map.setCenter({ lat, lng })
    }

    const handleMarkerClick = (placeId) => {
        console.log('clicked marker')
        setOpenCard(placeId)
        console.log(openCard)
    }

    const handlePlaceClose = () => {
        console.log('closing card')
        setOpenCard('')
    }

    const resultsSlicer = (pageIndex, breakfastResults) => {
        switch (pageIndex) {
            case 1:
                return breakfastResults.slice(0, 5)
            case 2:
                return breakfastResults.slice(5, 10)
            case 3:
                return breakfastResults.slice(10, 15)
            case 4:
                return breakfastResults.slice(15, 20)
            default:
                return breakfastResults.slice(0, 5)
        }
    }

    const handlePageChange = (e, value) => {
        setResultsPage(value)
    }


    return (
        <div className="breakfast">
            <div className="section-title">
                <h3>Input your location, then explore breakfast options</h3>
                <button onClick={handleScroll} className="CTA-button">Select a different station</button>
            </div>
            {searchPlaces && <PaginationElement page={resultsPage} handlePageChange={handlePageChange} />}
            <div className="map-with-search">
                <MapElement breakfastResults={resultsSlicer(resultsPage, breakfastResults)} handleMarkerClick={handleMarkerClick}/>
                <LocationSearch searchValue={locationQuery} onSearch={setLocationQuery} handleSubmit={handleSearch} />
                <div className="breakfast-list">
                    {resultsSlicer(resultsPage, breakfastResults).map(place => <><BreakfastOptionCard place={place} key={place.place_id} openCard={openCard} handleClose={handlePlaceClose} /></>)}
                </div>
            </div>
        </div>
    )
}

export default BreakfastSearch