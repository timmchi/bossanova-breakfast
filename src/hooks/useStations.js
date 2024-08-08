import { useQuery } from "@tanstack/react-query";
import { RadioBrowserApi } from "radio-browser-api";

const useStations = (language) => {
  const { isLoading, data } = useQuery({
    queryKey: ["stations", language],
    queryFn: async () => {
      if (!language) return;

      const api = new RadioBrowserApi(
        fetch.bind(window),
        "Bossa nova breakfast"
      );

      try {
        const fetchedStations = await api.searchStations({
          language: language,
          tag: "bossa nova",
          limit: 30,
        });
        return fetchedStations;
      } catch (err) {
        console.log("Error fetching stations", err);
        return [];
      }
    },
    enabled: !!language,
    refetchOnWindowFocus: false,
  });

  console.log(data);
  return { data, isLoading };
};

export default useStations;
