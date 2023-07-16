import React from 'react'
import Card from '../Card/Card'
import './List.scss'

const List = ({ changeThrottleHandle, data }) => {

  return (
    <div className="list">
      {changeThrottleHandle 
        ?
          <div className='list-items'>
            {data?.map((item) => (<div className='item loading' key={item.id}><Card item={item} key={item.id} /></div>))}
          </div>
        :
        <>
          {data?.length < 1 ? 
            <div className='list-empty'>
              <span>There are no products for this category and price</span>
            </div>
            :
            <div className='list-items'>
              {data?.map((item) => (<div className='item' key={item.id}><Card item={item} key={item.id} /></div>))}
            </div>
          }
        </>
        }
    </div>
  )
}

export default List;