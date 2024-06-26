import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";

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


export default usePlacesService