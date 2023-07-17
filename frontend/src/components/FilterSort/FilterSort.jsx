import React from 'react'
import './FilterSort.scss'

const FilterSort = ({setSort, handleThrottleChange}) => {
  return (
    <div class="container">
      <form>
        <label htmlFor="asc">
          <input
            type="radio"
            id="asc"
            value="asc"
            name="radio"
            onChange={(e) => {
              setSort("asc");
              handleThrottleChange();
            }}
          />
          <span>Lowest first</span>
        </label>
        <label>
          <input
            type="radio"
            id="desc"
            value="desc"
            name="radio"
            onChange={(e) => {
              setSort("desc");
              handleThrottleChange();
            }}
          />
          <span>Highest first</span>
        </label>
      </form>
    </div>
  );
}

export default FilterSort