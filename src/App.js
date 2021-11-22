import "./App.css";
import { React, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SearchWeather from "./components/SearchWeather";

function App() {
  const [color, setColor] = useState("red");
  return (
    <Router>
      <div className="App">
        <h1> Weather</h1>
        <SearchWeather chanageBG={setColor} />
        <Routes>
          <Route exact path="/" component={SearchWeather} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
