import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark bg-dark"
      style={{ minHeight: "180px", width: "100%", paddingTop: "20px" }}
    >
      <input className="search-bar" type="text" />
      <button className="search-button" type="submit">
        Search
      </button>
    </nav>
  );
};
export default Navbar;
