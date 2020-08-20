import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    // const getSearch = this.props.getSearch;
    // const updateSearch = this.props.updateSearch;
    // const search = this.props.search;
    const { getSearch, updateSearch, search, setQuery } = this.props;
    return (
      <div>
        <form onSubmit={getSearch} className="search-form">
          <input
            type="button"
            className="home-button"
            onClick={() => {
              setQuery("chicken");
              // getRecipes();
            }}
            value="Home"
          />
          <input
            autoFocus
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
