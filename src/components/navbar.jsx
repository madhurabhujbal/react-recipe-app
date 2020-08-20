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

// const Navbar = () => {
//   const sayHello = this.props.sayHello;
//   sayHello();
//   return (
//     <nav
//       className="navbar navbar-dark bg-dark"
//       style={{ minHeight: "180px", width: "100%", paddingTop: "20px" }}
//     >
//       <input className="search-bar" type="text" />
//       <button className="search-button" type="submit">
//         Search
//       </button>
//     </nav>
//   );
// };
