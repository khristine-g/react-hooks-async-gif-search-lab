import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const API_KEY = "dc6zaTOxFJmzC";
const API_URL = `https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=${API_KEY}&rating=g`;

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    this.handleSearchSubmit("dogs");
  }

  handleSearchSubmit = (query) => {
    fetch(`${API_URL.replace("YOUR QUERY HERE", query)}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          gifs: json.data.slice(0, 3)
        });
      });
  }

  render() {
    return (
      <div>
        <GifSearch onSearchSubmit={this.handleSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;

