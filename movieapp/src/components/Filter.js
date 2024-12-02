import React, { useState } from "react";
import PropTypes from "prop-types";

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleFilterChange = (event, field) => {
    const value = event.target.value;
    if (field === "title") setTitle(value);
    if (field === "rating") setRating(value);
    onFilter({
      title: field === "title" ? value : title,
      ratings: field === "rating" ? value : rating,
    });
  };

  const clearFilter = () => {
    setTitle("");
    setRating("");
    onFilter({ title: "", ratings: "" });
  };

  return (
    <div className="filter-container">
      <div className="filter-field">
        <input
          type="text"
          className="filter-input"
          placeholder="Search by title"
          aria-label="Search movies by title"
          value={title}
          onChange={(event) => handleFilterChange(event, "title")}
        />
      </div>
      <div className="filter-field">
        <input
          type="number"
          className="filter-input"
          placeholder="Search by minimum rating"
          aria-label="Search movies by minimum rating"
          value={rating}
          onChange={(event) => handleFilterChange(event, "rating")}
        />
      </div>
      <button className="filter-button" onClick={clearFilter}>
        Clear
      </button>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
