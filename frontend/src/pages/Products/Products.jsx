import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import List from './../../components/List/List';
import Slider from 'react-slider'
import Accordion from './../../components/Accordion/Accordion';
import Loader from '../../components/Loader/Loader';
import './Products.scss'

const Products = () => {

  const MIN = 0;
  const MAX = 200;

  const catId = parseInt(useParams().id)
  const [sort, setSort] = useState('asc');
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [values, setValues] = useState([MIN, MAX])
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const {loading} = useFetch()

  const paginate = (pageNumber) => {
    window.scrollTo({
      top: 90,
      left: 0,
      behavior: "smooth"
    });
    setCurrentPage(pageNumber)
  }

  const { subCategories } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  )

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value))
  }

  return (
    <>
      {loading ?
        <Loader />
       :
      <div className='products' id='products'>
        <div className='left'>
          <div className="filterItem">
            <Accordion subCategories={subCategories} handleChange={handleChange}/>
          </div>
          <div className="filterItem">
            <div className='filters'>
              <div className='filters-price'>
                <h3>Sort by price</h3>
                <div className='values'>${values[0]} - ${values[1]}</div>
                <small>
                  Current range: ${values[1] - values[0]}
                </small>
                <div className="filters-price__slider" id='slider'>
                  <Slider 
                    value={values} 
                    className='filters-slider' 
                    min={MIN} 
                    max={MAX} 
                    onAfterChange={setValues}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <form>
              <label htmlFor="asc">
                <input type="radio" id='asc' value="asc" name="radio" onChange={(e) => setSort("asc")}/>
                <span>Lowest first</span>
              </label>
              <label>
                <input type="radio" id='desc' value="desc" name="radio" onChange={(e) => setSort("desc")}/>
                <span>Highest first</span>
              </label>
            </form>
          </div>
        </div>
        <div className='right'>
          <List paginate={paginate} productsPerPage={productsPerPage} currentPage={currentPage} catId={catId} minPrice={values[0]} maxPrice={values[1]} sort={sort} subCats={selectedSubCats}/>
        </div>
      </div>
      }
    </>
  )
}

export default Products;