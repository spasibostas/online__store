import React from 'react'
import Card from '../Card/Card'
import useFetch from './../../hooks/useFetch'
import './List.scss'

const List = ({ subCats, maxPrice, sort, catId }) => {

  const filter = subCats.map(
    (item) => `&[filters][sub_categories][id][$eq]=${item}`
).join('')

  const { data, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${filter}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
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