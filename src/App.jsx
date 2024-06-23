import { useState } from "react";
import Player from "./components/Player";
import StationList from "./components/StationList";

function App() {
  return (
    <div>
      <div className="main-text">
      <h1 className="site-title">Bossa nova breakfast</h1>
      <h3 className="slogan"><i>Choose your soundtrack, then choose your breakfast</i></h3>
      </div>
      <StationList />
    </div>
  );
}

export default App;
