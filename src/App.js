import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// const axios = require("axios");
// const url = "https://www.googleapis.com/youtube/v3/search";

class App extends Component {
  state = {};

  componentDidMount() {
    console.log("Mount: Hello World");
    console.log(process.env.REACT_APP_APIKEY);
  }

  componentDidUpdate() {
    console.log("Update: GoodBye World");
    // console.log(process.env.REACT_APP_APIKEY);
  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code> src / App.js </code> and save to reload.{" "}
            </p>{" "}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React{" "}
            </a>{" "}
          </header>{" "}
        </div>
      </>
    );
  }
}

export default App;
