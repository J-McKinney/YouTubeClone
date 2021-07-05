import React, { Component } from "react";
// import Button from "../Components/Button/Button";
import SearchBar from "../Components/SearchBar/SearchBar";
// import VideoContainer from "../Components/VideoContainer/VideoContainer";
// import VideoList from "../Components/VideoList/VideoList";
import API from "../utils/API";

class Home extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.searchYouTube("kittens");
  }

  componentDidUpdate() {
    console.log(this.state.search);
    console.log(this.state.results);
  }

  searchYouTube = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res.data.items[0] }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the YouTube API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchYouTube(this.state.search);
  };

  render() {
    return (
      <>
        <SearchBar
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
      </>
    );
  }
}

export default Home;
