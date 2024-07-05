import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useQuery } from "@tanstack/react-query";

const usePlacesService = () => {
    const map = useMap('breakfast-map');
    const placesLibrary = useMapsLibrary('places');
    const { data: placesService, isPending } = useQuery({
      queryKey: ['placesService',  map?.__gm_id, placesLibrary?.maps], queryFn: async () => {
        if (!placesLibrary || !map) return null;
        return new placesLibrary.PlacesService(map);
      },
      enabled: !!placesLibrary && !!map,
      refetchOnWindowFocus: false,
    })

  
    return isPending ? { placesService: null, map } : { placesService, map };
}

export default usePlacesService