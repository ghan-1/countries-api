import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchSelecter from "./components/SearchSelecter";
import CountriesList from "./components/CountriesList";

function App() {
  const [call_url, set_call_url] = useState("");
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="navBarDiv"
        style={{
          height: "80px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <NavBar />
      </div>
      <div
        className="bodyDiv"
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "row",
        }}
      >
        <div
          className="rightSide"
          style={{
            width: "100%",
            margin: "20px",
          }}
        >
          <div className="rightTop" style={{ height: "100px" }}>
            <SearchSelecter set_call_url={set_call_url} />
          </div>
          <div className="rightButtom">
            <CountriesList url={call_url} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
