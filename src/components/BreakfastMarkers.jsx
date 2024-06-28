import { Marker, AdvancedMarker } from "@vis.gl/react-google-maps"

const BreakfastMarkers = ({ places, onMarkerClick }) => {
    return (
        <>
            {places?.slice(0, 5).map(place => <AdvancedMarker position={place.geometry.location} key={place.name} onClick={() => onMarkerClick(place.place_id)}>
                <span style={{ fontSize: '32px'}}>☕</span>
            </AdvancedMarker>)}
        </>
    )
}

export default BreakfastMarkers