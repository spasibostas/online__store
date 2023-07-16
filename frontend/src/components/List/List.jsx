import React from 'react'
import * as qs from 'qs'
import Card from '../Card/Card'
import useFetch from './../../hooks/useFetch'
import Pagination from '../Pagination/Pagination'
import './List.scss'

const List = ({ subCats, sort, catId, minPrice, maxPrice, paginate, changeThrottleHandle, currentPage }) => {

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
      page: `${currentPage}`,
      pageSize: 6,
    } 
  }, 
  {
  encodeValuesOnly: true,
});

  const { data, totalProducts, productsPerPage} = useFetch(
    `/products?${query}`
  );

  return (
    <div className="list">
      {changeThrottleHandle 
        ? <>
            <div className='list-items'>
              {data?.map((item) => (<div className='item loading' key={item.id}><Card item={item} key={item.id} /></div>))}
            </div>
            <div className='list-pagination loading'>
              <Pagination productsPerPage={productsPerPage} paginate={paginate} totalProducts={totalProducts} currentPage={currentPage}/>
            </div>
          </>
        :
        <>
          {data?.length < 1 ? 
            <div className='list-empty'>
              <span>There are no products for this category and price</span>
            </div>
            :
            <>
              <div className='list-items'>
                {data?.map((item) => (<div className='item' key={item.id}><Card item={item} key={item.id} /></div>))}
              </div>
              <div className='list-pagination'>
                <Pagination productsPerPage={productsPerPage} paginate={paginate} totalProducts={totalProducts} currentPage={currentPage}/>
              </div>
            </>
          }
        </>
        }
    </div>
  )
}

export default List;