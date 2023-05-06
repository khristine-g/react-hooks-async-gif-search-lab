import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    query: ""
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.query);
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="query">Enter a search term:</label>
          <input
            type="text"
            className="form-control"
            id="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    );
  }
}

export default GifSearch;

