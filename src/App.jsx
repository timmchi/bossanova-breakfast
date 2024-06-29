import StationList from "./components/StationList";
import BreakfastSearch from "./components/BreakfastSearch";
import Hero from "./components/Hero";
import { 
  APIProvider
} from '@vis.gl/react-google-maps'
import { useRef } from "react";

const API_KEY = 

function App() {
  const stationRef = useRef(null)
  const breakfastRef = useRef(null)

  const scrollToStationsChoice = () => stationRef.current.scrollIntoView()

  const scrollToBreakfastChoice = () => breakfastRef.current.scrollIntoView()

  return (
    <div>
      <Hero handleScroll={scrollToStationsChoice} />
      <div ref={stationRef}>
        <StationList handleBreakfastScroll={scrollToBreakfastChoice} />
      </div>
      <APIProvider apiKey={API_KEY}>
        <div ref={breakfastRef} className="breakfast-container">
          <BreakfastSearch />
        </div>
      </APIProvider>
    </div>
  );
}

export default App;
