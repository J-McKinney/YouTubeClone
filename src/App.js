import React, { Component } from "react";
// import Home from "./Pages/Home"
// import axios from "axios";
import "./App.css";
require("dotenv").config();

class App extends Component {
  state = {};

  componentDidMount() {
    // const getVideo = axios.get(
    // `${"https://cors-anywhere.herokuapp.com/"}https://www.googleapis.com/youtube/v3/search`,
    //   `${"https://cors.bridged.cc/"}https://www.googleapis.com/youtube/v3/search`,
    //   {
    //     params: {
    //       part: "snippet", // Shows the snippets/thumbnails...
    //       maxResults: 5, // Max Results to search YouTube API for
    //       q: "neebs", // The search term query
    //       key: `${process.env.REACT_APP_APIKEY}`, // Obviously my key
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

  componentWillUnmount() {}

  componentDidUpdate() {}

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">{/* <Home /> */}</header>{" "}
        </div>
      </>
    );
  }
}

export default App;
