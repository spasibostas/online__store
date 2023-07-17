import React from 'react'
import Accordion from './../../components/Accordion/Accordion';
import './FilterCategories.scss'

const FilterCategories = ({subCategories, handleChange}) => {
  return (
    <div className="filterItem">
      <Accordion subCategories={subCategories} handleChange={handleChange} />
    </div>
  );
}

export default FilterCategories