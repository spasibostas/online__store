import React from 'react'
import Slider from 'react-slider'
import './FilterPrice.scss'

const FilterPrice = ({values, MIN, MAX, setValues, handleThrottleChange, setCurrentPage}) => {
  return (
    <div className="filterItem">
      <div className="filters">
        <div className="filters-price">
          <h3>Sort by price</h3>
          <div className="values">
            ${values[0]} - ${values[1]}
          </div>
          <small>Current range: ${values[1] - values[0]}</small>
          <div className="filters-price__slider" id="slider">
            <Slider
              value={values}
              className="filters-slider"
              min={MIN}
              max={MAX}
              onAfterChange={(e) => {
                setValues(e);
                handleThrottleChange();
                setCurrentPage(1)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPrice