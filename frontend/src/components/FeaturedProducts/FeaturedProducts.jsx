import React from 'react'
import * as qs from 'qs'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
import './FeaturedProducts.scss'

const FeaturedProducts = ({ type }) => {

  const query = qs.stringify({
    populate: '*',
    filters: {
      type: {
        $eq: `${type}`,
      },
    }, 
  }, 
  {
  encodeValuesOnly: true,
});

  const {data, loading, error} = useFetch(
    `/products?${query}`
  )
  
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
        </div>
        <div className='bottom'>
            {error 
              ? "Something went wrong!"
              :loading 
              ? 'loading...' 
              : data?.map(item => <div className='item' key={item.id}><Card item={item} key={item.id} /></div>
            )}
        </div>
    </div>
  )
}

export default FeaturedProducts;