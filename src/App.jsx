import StationList from "./components/StationList";
import BreakfastSearch from "./components/BreakfastSearch";
import { 
  APIProvider
} from '@vis.gl/react-google-maps'

const API_KEY = 'AIzaSyBkRujkfnEY9WcJtWbG46I275XCzzSzEQ4'

function App() {
  return (
    <div>
      <div className="main-text">
      <h1 className="site-title">Bossa nova breakfast</h1>
      <h3 className="slogan"><i>Choose your soundtrack, then choose your breakfast</i></h3>
      </div>
      <StationList />
      <APIProvider apiKey={API_KEY}>
        <BreakfastSearch />
      </APIProvider>
    </div>
  );
}

export default App;
