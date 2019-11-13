import React from "react";
import pfp from "./assets/pfp.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pfp} className="App-logo" alt="logo" />
        <p>Christopher Ng</p>
        <p>Full Stack Web Developer</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
