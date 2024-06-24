import StationList from "./components/StationList";
import BreakfastSearch from "./components/BreakfastSearch";

function App() {
  return (
    <div>
      <div className="main-text">
      <h1 className="site-title">Bossa nova breakfast</h1>
      <h3 className="slogan"><i>Choose your soundtrack, then choose your breakfast</i></h3>
      </div>
      <StationList />
      <BreakfastSearch />
    </div>
  );
}

export default App;
