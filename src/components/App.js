import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Youtube from "../apis/youtube";
import VideoList from "./VideoList/VideoList";

class App extends Component {
  state = { videos: [] };
  onSearchTermSubmit = async term => {
    //async process
    const response = await Youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items
    });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Youtube search</h1>
          <SearchBar onFormSubmit={this.onSearchTermSubmit} />
          <h2 className="subtitle">Videos found: {this.state.videos.length}</h2>
          <VideoList videoData={this.state.videos}> </VideoList>
        </div>
      </section>
    );
  }
}
export default App;
