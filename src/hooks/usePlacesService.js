import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useQuery } from "@tanstack/react-query";

const usePlacesService = (location, searchPlaces) => {
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

    const request = {
      keyword: 'Breakfast cafe restaurant',
      location: location,
      openNow: true,
      radius: 5000
    }

    // works but no point in wasting credits atm
    // const fetchNearbyPlaces = async () => {
    //   if (!placesService || !searchPlaces || !map) return;
    //   console.log('fetching nearby places, big google cost');
    
    //   return new Promise((resolve, reject) => {
    //     placesService?.nearbySearch(request, (results, status) => {
    //       if (status === 'OK') {
    //         console.log('results in queryFn', results);
    //         resolve(results);
    //       } else {
    //         reject(status);
    //       }
    //     });
    //   });
    // };

    // const { data: fetchedResults } = useQuery({
    //   queryKey: ['breakfastPlaces', location],
    //   queryFn: fetchNearbyPlaces,
    //   enabled: !!placesService && !!map && !!location && !!searchPlaces,
    //   refetchOnWindowFocus: false,
    // })
  
    // console.log('data', fetchedResults)
    // return { map, fetchedResults } 
    return { map } 
}

export default usePlacesService