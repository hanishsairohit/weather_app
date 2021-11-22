import "./App.css";
import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchWeather from "./components/SearchWeather";
import ShowWeather from "./components/ShowWeather";

function App() {
  const [color, setColor] = useState("red");
  return (
    <div className="App">
      <h1> Weather</h1>
      <SearchWeather chanageBG={setColor} />
      <Routes>
        <Route exact path="/" component={SearchWeather} />
      </Routes>
    </div>
  );
}

export default App;
