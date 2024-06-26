import { Marker } from "@vis.gl/react-google-maps"

const BreakfastMarkers = ({ places }) => {
    return (
        <>
        {places?.slice(0, 5).map(place => <Marker position={place.geometry.location} key={place.name}>

        </Marker>)}
        </>
    )
}

export default BreakfastMarkers