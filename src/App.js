import React, { Component } from "react";
// import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
require("dotenv").config();

class App extends Component {
  state = {};

  componentDidMount() {
    console.log("Mount: Hello World");

    // const getVideo = axios.get(
    // `${"https://cors-anywhere.herokuapp.com/"}https://www.googleapis.com/youtube/v3/search`,

    //   `${"https://cors.bridged.cc/"}https://www.googleapis.com/youtube/v3/search`,

    //   {
    //     params: {
    //       maxResults: 5,
    //       q: "neebs",
    //       key: `${process.env.REACT_APP_APIKEY}`,
    //     },
    //   }
    // );
    // return getVideo
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  componentWillUnmount() {
    console.log("Unmount: What Just Happened?");
  }

  componentDidUpdate() {
    console.log("Update: GoodBye World");
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
