import React from "react";
import styling from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <>
      <div className={styling.wrapper}>
        <form className={styling.form}>
          <label className={styling.label} htmlFor="search">
            Search:
          </label>
          <input
            className={styling.formControl}
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            placeholder="Search for a video"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className={styling.button}>
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
