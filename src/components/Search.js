// Imports
import React from "react";

// Search component
const Search = props => {
  return (
    <form className="animated slideInRight" onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City" />
      <input type="text" name="country" placeholder="Country" />
      <button
        className="btn peach-gradient animated pulse infinite"
        id="btnGetWeather"
      >
        Get Weather
      </button>
    </form>
  );
};

// Export
export default Search;
