import React from "react";
import Vehicles from "./Vehicles.js";
import Starships from "./Starships.js";
import Planets from "./Planets.js";
import People from "./People.js";
import Header from "./Header.js";

export default function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="item vehicles">
          <Vehicles />
        </div>
        <div className="item starships">
          <Starships />
        </div>
        <div className="item planets">
          <Planets />
        </div>
        <div className="item planets">
          <People />
        </div>
      </div>
    </div>
  );
}
