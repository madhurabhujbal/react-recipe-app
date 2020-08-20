import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    // const getSearch = this.props.getSearch;
    // const updateSearch = this.props.updateSearch;
    // const search = this.props.search;
    const { getSearch, updateSearch, search } = this.props;
    return (
      <div>
        <form onSubmit={getSearch} className="search-form">
          <a href="#">
            <button className="home-button">Home</button>
          </a>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
