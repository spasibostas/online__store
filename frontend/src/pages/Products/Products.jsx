import React, {useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import List from './../../components/List/List';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Slider from 'react-slider'
import './Products.scss'

const Products = () => {

  const MIN = 0;
  const MAX = 200;

  const catId = parseInt(useParams().id)
  const [sort, setSort] = useState('asc');
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [page, setPage] = useState(1);
  const [values, setValues] = useState([MIN, MAX])

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const { data } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  )

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value))
  }

  return (
    <div className='products'>
      <div className='left'>
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <div className='input'>
                <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            </div>
          ))}
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
                  onChange={setValues}/>
              </div>
            </div>
          </div>
        </div>
        <div className="filterItem">
          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name='price' onChange={(e) => setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name='price' onChange={(e) => setSort("desc")}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        {catId === 1 ? <img 
          className='catImg' 
          src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
          alt="" 
        />
        :
        <img 
          className='catImg' 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
          alt="" 
        />
        }
        <List page={page} catId={catId} minPrice={values[0]} maxPrice={values[1]} sort={sort} subCats={selectedSubCats}/>
        <div className="pages">
          <Stack spacing={2}>
            <Typography className='pagination'>Page: {page}</Typography>
            <Pagination count={2} page={page} onChange={handlePageChange} />
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Products;