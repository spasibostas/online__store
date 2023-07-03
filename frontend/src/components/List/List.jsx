import React from 'react'
import Card from '../Card/Card'
import useFetch from './../../hooks/useFetch'
import './List.scss'

const List = ({ subCats, sort, catId, page, minPrice, maxPrice }) => {
  
  const qs = require('qs');
  const query = qs.stringify({
    populate: '*',
    filters: {
      categories: {
        id: `${catId}`,
      },
      sub_categories: {
        id: {
          $eq: subCats
        },
      },
      price: {
        $gt: `${minPrice}`,
        $lte: `${maxPrice}`
      },
    },
    sort: `price:${sort}`,
    pagination: {
      page: `${page}`,
      pageSize: 6
    } 
  }, 
  {
  encodeValuesOnly: true, // prettify URL
});

const { data, loading } = useFetch(
  `/products?${query}`
);

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <div className='item' key={item.id}><Card item={item} key={item.id} /></div>)}
    </div>
  )
}

export default List;