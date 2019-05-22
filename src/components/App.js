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
    console.log("response", response.data.items);
    this.setState({
      videos: response.data.items
    });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 class="title">Youtube search</h1>
          <SearchBar onFormSubmit={this.onSearchTermSubmit} />
          <h2 class="subtitle">Videos found: {this.state.videos.length}</h2>
          <VideoList videoData={this.state.videos}> </VideoList>
        </div>
      </section>
    );
  }
}
export default App;
