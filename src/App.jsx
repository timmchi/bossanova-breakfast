import StationList from "./components/StationList";
import BreakfastSearch from "./components/BreakfastSearch";
import Hero from "./components/Hero";
import RadioSkeleton from "./components/RadioSkeleton";
import FetchingComponent from "./components/FetchingComponent";
import { 
  APIProvider
} from '@vis.gl/react-google-maps'
import { useRef } from "react";

const API_KEY = 'AIzaSyBkRujkfnEY9WcJtWbG46I275XCzzSzEQ4'

function App() {
  const stationRef = useRef(null)
  const breakfastRef = useRef(null)

  const scrollToStationsChoice = () => stationRef.current.scrollIntoView()

  const scrollToBreakfastChoice = () => breakfastRef.current.scrollIntoView()

  return (
    <div>
      <Hero handleScroll={scrollToStationsChoice} />
      {/* <FetchingComponent elementName="stations" bgColor="orange" /> */}
      <div ref={stationRef}>
        <StationList handleBreakfastScroll={scrollToBreakfastChoice} />
      </div>
      <APIProvider apiKey={API_KEY}>
        <div ref={breakfastRef} className="breakfast-container">
          <BreakfastSearch handleScroll={scrollToStationsChoice} />
        </div>
      </APIProvider>
    </div>
  );
}

export default App;
